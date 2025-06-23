'use client';

import { useState } from 'react';
import { Check, ArrowRight, X, Snowflake, TreePine, Sparkles, Wrench, Truck, Home, Users } from 'lucide-react';
import Image from 'next/image';

/**
 * Typdefinition für die Daten eines Service-Modals
 */
type ServiceModalData = {
  title: string;
  subtitle: string;
  image: string;
  content: React.ReactNode;
};

/**
 * Services-Komponente für die Landingpage
 * 
 * Zeigt die angebotenen Dienstleistungen als Karten mit modalen Detailansichten.
 */
const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceModalData | null>(null);

  const openModal = (service: ServiceModalData) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  /**
   * Service-Modal Daten
   */
  const serviceModals: Record<string, ServiceModalData> = {
    winterdienst: {
      title: 'Winterdienst',
      subtitle: 'Sicherheit bei Schnee und Eis',
      image: '/images/winterdienst.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Unser professioneller Winterdienst sorgt für sichere Wege und Flächen. Mit modernster Ausrüstung und erfahrenem Personal sind wir rund um die Uhr für Sie im Einsatz.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Leistungen</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Schneeräumung von Gehwegen und Parkplätzen</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Professioneller Streuservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Eisbeseitigung und Prävention</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Dachlawinen-Sicherung</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Service-Garantie</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>24/7 Bereitschaftsdienst</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Wetterüberwachung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Dokumentation aller Einsätze</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Umweltfreundliche Streumittel</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      )
    },
    gruenflaechenbetreuung: {
      title: 'Grünflächenbetreuung',
      subtitle: 'Professionelle Pflege Ihrer Außenanlagen',
      image: '/images/gruenflaechen.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Wir kümmern uns um die fachgerechte Pflege Ihrer Grünflächen und Außenanlagen. Von der Rasenpflege bis zum Baumschnitt - alles aus einer Hand.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Rasenpflege</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Regelmäßiges Mähen</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Vertikutieren und Düngen</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Unkrautbekämpfung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Kantenstechen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Gehölzpflege</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Hecken- und Strauchschnitt</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Baumschnitt und -pflege</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Sturmschadenbeseitigung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Neupflanzungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    dienstleistungen: {
      title: 'Allgemeine Dienstleistungen',
      subtitle: 'Vielseitige Lösungen für Ihre Bedürfnisse',
      image: '/images/dienstleistungen.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Wir bieten Ihnen ein breites Spektrum an Dienstleistungen für Haus, Garten und Gewerbe. Schnell, zuverlässig und professionell.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Hausmeisterservice</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Kleinreparaturen</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Kontroll- und Wartungsarbeiten</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Mülltonnenservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Urlaubsbetreuung</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Montage & Handwerk</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Möbelmontage</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Regale und Schränke</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Bildaufhängung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Kleine Renovierungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    weitere: {
      title: 'Weitere Dienstleistungen',
      subtitle: 'Spezialisierte Services nach Bedarf',
      image: '/images/weitere-dienstleistungen.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Ergänzend zu unseren Hauptdienstleistungen bieten wir spezialisierte Services für besondere Anforderungen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Kranführer-Service</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Zertifizierte Kranführer</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Bau- & Industriemontagen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Personalleasing</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Qualifiziertes Fachpersonal</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Flexible Einsatzzeiten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    reinigung: {
      title: 'Reinigung',
      subtitle: 'Sauberkeit mit System',
      image: '/images/reinigung.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Professionelle Reinigung mit modernster Dampfreinigungstechnologie. Chemiefrei, gründlich und umweltschonend.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Reinigungsservice</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Büroreinigung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Treppenhausreinigung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Fensterreinigung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Grundreinigung</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Dampfreinigung</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>99,9% Bakterienentfernung</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Ohne Chemikalien</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Allergikerfreundlich</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Umweltschonend</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    umzuege: {
      title: 'Umzüge & Transporte',
      subtitle: 'Stress-freier Umzug garantiert',
      image: '/images/umzuege.jpg',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Von der Planung bis zur Ausführung - wir kümmern uns um Ihren kompletten Umzug. Schnell, sicher und zuverlässig.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Umzugsservice</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Privatumzüge</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Firmenumzüge</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Ein- und Auspackservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Möbelmontage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Transportservice</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Möbeltransporte</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Schwertransporte</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Expresstransporte</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 mt-0.5" />
                  <span>Lagerung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="services" className="bg-gray-50 dark:bg-slate-800 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Dienstleistungen</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Rundum-Sorglos-Paket für Ihre Immobilie - Alles aus einer Hand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1: Winterdienst */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-blue-100 to-slate-100 dark:from-blue-900/20 dark:to-slate-900/20 flex items-center justify-center">
              <Snowflake className="w-24 h-24 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Snowflake className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Winterdienst
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 Schneeräumung</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Professioneller Streuservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Eisbeseitigung & Prävention</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.winterdienst)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Service Card 2: Grünflächenbetreuung */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center">
              <TreePine className="w-24 h-24 text-green-600 dark:text-green-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <TreePine className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
                Grünflächenbetreuung
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Rasenpflege & Mähen</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Hecken- & Baumschnitt</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Laubentfernung & Unkrautbekämpfung</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.gruenflaechenbetreuung)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Service Card 3: Allgemeine Dienstleistungen */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center">
              <Wrench className="w-24 h-24 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Wrench className="w-6 h-6 mr-2 text-amber-600 dark:text-amber-400" />
                Dienstleistungen
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Hausmeisterservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Montage & Kleinreparaturen</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Entrümpelung & Entsorgung</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.dienstleistungen)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>


          {/* Service Card 5: Reinigung */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
                Reinigung
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Dampfreinigung ohne Chemie</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">99,9% Bakterienentfernung</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Allergikerfreundlich</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.reinigung)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Service Card 6: Umzüge & Transporte */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center">
              <Truck className="w-24 h-24 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Truck className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
                Umzüge & Transporte
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Komplett-Umzugsservice</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Möbel- & Spezialtransporte</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Ein- & Auspackservice</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.umzuege)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Service Card 6: Weitere Dienstleistungen - moved to last position */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden card-hover">
            <div className="relative h-56 bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20 flex items-center justify-center">
              <Users className="w-24 h-24 text-slate-600 dark:text-slate-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Users className="w-6 h-6 mr-2 text-slate-600 dark:text-slate-400" />
                Weitere Dienstleistungen
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Kranführer-Service</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Personalleasing</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Maßgeschneiderte Lösungen</span>
                </li>
              </ul>
              <button 
                onClick={() => openModal(serviceModals.weitere)}
                className="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 font-medium inline-flex items-center"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {modalOpen && currentService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div 
            className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-3xl w-full z-10 max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 w-full">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">{currentService.title}</h3>
                <p className="text-white/80">{currentService.subtitle}</p>
              </div>
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-200 p-1 rounded-full bg-black/30"
                onClick={closeModal}
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              {currentService.content}
            </div>
            
            {/* Modal Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between">
              <button 
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={closeModal}
              >
                Schließen
              </button>
              <a 
                href="#contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                onClick={closeModal}
              >
                Anfrage senden
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;