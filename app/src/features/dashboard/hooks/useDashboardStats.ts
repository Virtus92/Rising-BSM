import { useState, useEffect, useCallback, useRef } from 'react';
import { useToast } from '@/shared/hooks/useToast';
import { getLogger } from '@/core/logging';
import { useAuth } from '@/features/auth/providers/AuthProvider';
import AuthService from '@/features/auth/core/AuthService';

// Get logger instance
const logger = getLogger();

// Define a more specific type for the state
type StatsData = {
  userCount: number;
  customerCount: number;
  requestCount: number;
  appointmentCount: number;
};

type StatsState = StatsData & {
  loading: boolean;
  error: Error | null;
};

// Define the hook's return type including the refresh function
type UseDashboardStatsReturn = StatsState & {
  refreshStats: () => Promise<void>;
};


/**
 * Hook for fetching and managing dashboard statistics
 * Uses service layer to fetch data from API endpoints
 */
export const useDashboardStats = (): UseDashboardStatsReturn => {
  // Get auth context to check authentication status
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  
  // Initialize state with default values
  logger.debug('Using dashboardStats hook');
  const [state, setState] = useState<StatsState>({
    userCount: 0,
    customerCount: 0,
    requestCount: 0,
    appointmentCount: 0,
    loading: true,
    error: null,
  });
  
  const { toast } = useToast();
  
  // Use ref to prevent multiple simultaneous fetches
  const isFetchingRef = useRef(false);
  // Use ref to track mounted state to prevent state updates after unmount
  const isMountedRef = useRef(true);
  // Track last successful fetch time to prevent excessive refresh
  const lastFetchTimeRef = useRef(0);

  // Extract fetchStats as a separate callback
  const fetchStats = useCallback(async (showErrors = false) => {
    // Don't attempt to fetch if not authenticated
    if (!isAuthenticated) {
      logger.info('User is not authenticated, skipping dashboard stats fetch');
      if (isMountedRef.current) {
        setState(prev => ({ 
          ...prev, 
          loading: false,
          error: new Error('Authentication required to view statistics') 
        }));
      }
      return;
    }
    
    logger.info('Fetching dashboard stats...');
    // Don't allow multiple simultaneous fetches
    if (isFetchingRef.current) {
      logger.debug('Already fetching stats, skipping duplicate request');
      return;
    }
    
    // Throttle refreshes (minimum 5 seconds between refreshes)
    const now = Date.now();
    if (now - lastFetchTimeRef.current < 5000 && lastFetchTimeRef.current !== 0) {
      logger.debug('Throttling stats fetch - too soon since last fetch');
      return;
    }
    
    // Set fetching flag
    isFetchingRef.current = true;
    
    // Reset loading and error state before fetching
    if (isMountedRef.current) {
      setState(prev => ({ ...prev, loading: true, error: null }));
    }
    
    try {
      // Use dedicated dashboard stats endpoint that only requires authentication
      const response = await fetch('/api/dashboard/stats', { 
        credentials: 'include',
        headers: { 'Cache-Control': 'no-cache' }
      });
      
      // Track successful fetch time
      lastFetchTimeRef.current = Date.now();

      if (isMountedRef.current) {
        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.data) {
            const stats = result.data;
            
            // Update state with fetched data from dashboard stats
            setState(prev => ({
              ...prev,
              userCount: stats.users?.total || 0,
              customerCount: stats.customers?.total || 0,
              requestCount: stats.requests?.total || 0,
              appointmentCount: stats.appointments?.total || 0,
              loading: false,
              error: null
            }));
          } else {
            throw new Error(result.message || 'Invalid response format');
          }
        } else {
          const errorText = await response.text();
          console.error('Dashboard stats API failed:', response.status, errorText);
          throw new Error(`API request failed with status ${response.status}`);
        }
      }
    } catch (error) {
      logger.error('Failed to fetch dashboard stats', error instanceof Error ? error : new Error(String(error)));
      if (isMountedRef.current) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error : new Error('An unknown error occurred while fetching stats')
        }));
        
        if (showErrors) {
          toast({
            title: 'Error loading dashboard',
            description: 'Failed to load statistics. Please try again later.',
            variant: 'error'
          });
        }
      }
    } finally {
      // Clear fetching flag
      isFetchingRef.current = false;
    }
  }, [toast, isAuthenticated]);

  // Function to manually refresh stats with visible feedback
  const refreshStats = useCallback(async () => {
    try {
      await fetchStats(true); // Show errors for manual refresh
      toast({
        title: 'Statistics refreshed',
        description: 'Dashboard statistics have been updated.',
        variant: 'success'
      });
    } catch (error) {
      logger.error('Failed to manually refresh stats:', error instanceof Error ? error : new Error(String(error)));
      // Error handling and toasts are already in fetchStats with showErrors=true
    }
  }, [fetchStats, toast]);

  // Subscribe to auth initialization events
  useEffect(() => {
    // Set mounted flag
    isMountedRef.current = true;
    
    // If already authenticated, fetch stats immediately with a small delay
    if (isAuthenticated && !isAuthLoading) {
      const initialFetchTimeout = setTimeout(() => {
        if (isMountedRef.current) {
          fetchStats();
        }
      }, 500);
      
      return () => {
        clearTimeout(initialFetchTimeout);
        isMountedRef.current = false;
      };
    }
    
    // Subscribe to auth initialization to trigger fetch when auth is ready
    logger.debug('Dashboard stats: Subscribing to auth initialization events');
    
    // Function to handle authentication initialization completion
    const handleAuthInit = (status: any) => {
      logger.debug('Dashboard stats: Auth initialization completed', status);
      
      if (status.isAuthenticated && isMountedRef.current) {
        logger.debug('Dashboard stats: Auth ready and user authenticated, fetching stats');
        setTimeout(() => {
          if (isMountedRef.current) {
            fetchStats();
          }
        }, 500);
      } else if (isMountedRef.current) {
        // No authentication, set not loading but with error
        logger.debug('Dashboard stats: Auth ready but user not authenticated');
        setState(prev => ({
          ...prev,
          loading: false,
          error: new Error('Authentication required to view statistics')
        }));
      }
    };
    
    // Subscribe to the initialization complete event using AuthService
    const unsubscribe = AuthService.onAuthStateChange(handleAuthInit);
    
    // Clean up subscription on unmount
    return () => {
      unsubscribe();
      isMountedRef.current = false;
    };
  }, [fetchStats, isAuthenticated, isAuthLoading]);

  // Set up a refresh interval - only when authenticated
  useEffect(() => {
    // Only set up interval if component is mounted and user is authenticated
    if (!isMountedRef.current || !isAuthenticated) return;
    
    logger.debug('Setting up dashboard stats refresh interval (5 minutes)');
    
    // Create a reference to the fetch function that doesn't change between renders
    const stableFetchStats = () => {
      // Only fetch if component is still mounted and not already fetching
      if (isMountedRef.current && !isFetchingRef.current && isAuthenticated) {
        logger.debug('Interval-triggered stats refresh');
        fetchStats().catch(err => {
          logger.error('Error in interval refresh:', err instanceof Error ? err : new Error(String(err)));
        });
      }
    };
    
    // Set to 5 minutes (300000ms)
    const intervalId = setInterval(stableFetchStats, 300000); 
    
    // Clean up interval on unmount
    return () => {
      logger.debug('Clearing dashboard stats refresh interval');
      clearInterval(intervalId);
    }; 
  }, [fetchStats, isAuthenticated]);

  // Return the state and the refresh function
  return { ...state, refreshStats };
};