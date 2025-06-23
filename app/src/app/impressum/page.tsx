import { Metadata } from 'next';
import Header from '@/shared/components/layout/Header';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Impressum - RISING BS e.U.',
  description: 'Impressum der RISING BS e.U. - Gesetzliche Informationen und Kontaktdaten',
};

export default function ImpressumPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow pt-20 pb-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Impressum
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Unternehmensdaten</h2>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-lg mb-2">RISING BS e.U.</p>
                    <p><span className="font-semibold">Inhaber:</span> Becirovic Alen</p>
                    <p><span className="font-semibold">Rechtsform:</span> Einzelunternehmen (e.U.)</p>
                    <p><span className="font-semibold">Sitz/Adresse:</span></p>
                    <p>Waldmüllergang 10a</p>
                    <p>4020 Linz, Österreich</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Firmenbuchnummer:</span> FN 588114 z</p>
                    <p><span className="font-semibold">Firmenbuchgericht:</span> Landesgericht Linz</p>
                    <p><span className="font-semibold">UID-Nr.:</span> ATU77045449</p>
                    <p><span className="font-semibold">Website:</span> www.rising-bsm.at</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kontaktdaten</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <p className="mb-2">
                  <span className="font-semibold">Telefon:</span>{' '}
                  <a href="tel:+4368184030694" className="text-orange-600 dark:text-orange-400 hover:underline">
                    +43 681 840 30 694
                  </a>
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a href="mailto:info.risingbs@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">
                    info.risingbs@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Unternehmensgegenstand</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <p>
                  Erbringung von Dienstleistungen im Bereich der Immobilien- und Objektpflege, 
                  insbesondere Grünflächenbetreuung, Winterdienst, Gebäudereinigung, Hausbetreuung, 
                  Objektpflege, ergänzt durch Montage- und Entrümpelungsarbeiten.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Gewerbeberechtigung</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <p className="mb-3">
                  <span className="font-semibold">Gewerbeberechtigung:</span> Hausbetreuung, bestehend in der 
                  Durchführung einfacher Reinigungstätigkeiten einschließlich objektbezogener einfacher 
                  Wartungstätigkeiten
                </p>
                <p>
                  <span className="font-semibold">Aufsichtsbehörde/Gewerbebehörde:</span> Magistrat der Stadt Linz
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Mitgliedschaften</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Wirtschaftskammer Oberösterreich (WKOÖ)</li>
                  <li>KSV 1870</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold mb-3">Haftung für Inhalte</h3>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold mb-3">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren 
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen 
                Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, 
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen 
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers.
              </p>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}