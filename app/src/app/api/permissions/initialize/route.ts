/**
 * Permissions Initialization API Route
 * 
 * Ensures all system permissions are properly seeded in the database
 */
import { NextRequest, NextResponse } from 'next/server';
import { routeHandler } from '@/core/api/server/route-handler';
import { formatResponse } from '@/core/errors/formatting/response-formatter';
import { getServiceFactory } from '@/core/factories/serviceFactory.server';
import { SystemPermission } from '@/domain/enums/PermissionEnums';
import { SystemPermissionMap } from '@/domain/permissions/SystemPermissionMap';
import { getLogger } from '@/core/logging';

const logger = getLogger();

export const runtime = 'nodejs';

/**
 * POST /api/permissions/initialize
 * Initialize/seed all system permissions
 */
export const POST = routeHandler(
  async (req: NextRequest) => {
    const userId = req.auth?.userId;
    
    try {
      const serviceFactory = getServiceFactory();
      const permissionService = serviceFactory.createPermissionService();
      
      const { force } = await req.json().catch(() => ({ force: false }));
      
      logger.info('Initializing system permissions', { userId, force });
      
      const results = {
        created: 0,
        updated: 0,
        skipped: 0,
        errors: [] as string[]
      };
      
      // Get all permission definitions
      const permissionDefinitions = Object.values(SystemPermissionMap);
      
      for (const definition of permissionDefinitions) {
        try {
          // Check if permission already exists
          const existing = await permissionService.findByCode(definition.code);
          
          if (existing && !force) {
            results.skipped++;
            continue;
          }
          
          if (existing && force) {
            // Update existing permission
            await permissionService.update(existing.id, {
              name: definition.name,
              description: definition.description,
              category: definition.category
            }, { userId });
            results.updated++;
          } else {
            // Create new permission
            await permissionService.create({
              code: definition.code,
              name: definition.name,
              description: definition.description,
              category: definition.category
            }, { userId });
            results.created++;
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          logger.error(`Error processing permission ${definition.code}`, error as Error);
          results.errors.push(`${definition.code}: ${errorMessage}`);
        }
      }
      
      logger.info('Permission initialization completed', results);
      
      return NextResponse.json(
        formatResponse.success(results, 'Permissions initialized successfully')
      );
      
    } catch (error) {
      logger.error('Error initializing permissions', error as Error);
      
      return NextResponse.json(
        formatResponse.error(
          error instanceof Error ? error.message : 'Failed to initialize permissions',
          500
        ),
        { status: 500 }
      );
    }
  },
  {
    requiresAuth: true,
    requiredPermission: [SystemPermission.SYSTEM_ADMIN]
  }
);