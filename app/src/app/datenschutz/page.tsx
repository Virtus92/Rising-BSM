import { Metadata } from 'next';
import Header from '@/shared/components/layout/Header';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - RISING BS e.U.',
  description: 'Datenschutzerklärung der RISING BS e.U. - Informationen zum Umgang mit Ihren persönlichen Daten',
};

export default function DatenschutzPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow pt-20 pb-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <p className="text-sm">für www.rising-bsm.at</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortlich für den Datenschutz</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <p className="font-semibold">RISING BS e.U.</p>
                <p>Becirovic Alen</p>
                <p>Waldmüllergang 10a, 4020 Linz</p>
                <p className="mt-2">
                  <a href="tel:+4368184030694" className="text-orange-600 dark:text-orange-400 hover:underline">+43 681 840 30 694</a>
                </p>
                <p>
                  <a href="mailto:info.risingbs@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">info.risingbs@gmail.com</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p>
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies gesetzlich erlaubt ist oder 
                Sie in die Datenverarbeitung einwilligen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Welche Daten werden verarbeitet?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontaktformular:</strong> Name, E-Mail-Adresse, Nachricht, Telefonnummer (falls angegeben)</li>
                <li><strong>Nutzungsdaten:</strong> IP-Adresse, Browser-Typ, Zugriffszeiten, Geräteinformationen</li>
                <li><strong>Cookies:</strong> Zur Verbesserung der Nutzererfahrung verwenden wir Cookies. Details dazu finden Sie weiter unten.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Zweck der Datenverarbeitung</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Beantwortung Ihrer Anfragen</li>
                <li>Erfüllung vertraglicher Verpflichtungen</li>
                <li>Verbesserung unseres Webangebotes</li>
                <li>Sicherheit und Abwehr von Missbrauch</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Rechtsgrundlagen</h2>
              <p className="mb-4">Die Verarbeitung Ihrer Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtungen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Weitergabe von Daten</h2>
              <p>
                Eine Weitergabe Ihrer Daten erfolgt nur, wenn dies gesetzlich zulässig ist oder Sie eingewilligt 
                haben, z.B. bei Dienstleistern oder im Rahmen der Vertragsabwicklung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p>
                Unsere Webseite verwendet Cookies, um die Nutzung zu erleichtern und statistische Auswertungen 
                zu ermöglichen. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers 
                deaktivieren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und 
                Datenübertragung. Zudem können Sie Ihre Einwilligung zur Datenverarbeitung jederzeit 
                widerrufen. Wenden Sie sich dazu an die oben angegebenen Kontaktdaten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Dauer der Speicherung</h2>
              <p>
                Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die oben genannten 
                Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Sicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Zugriff, 
                Verlust oder Missbrauch zu schützen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Bitte prüfen Sie 
                regelmäßig die aktuelle Version auf unserer Webseite.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}