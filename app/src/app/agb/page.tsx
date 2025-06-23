import { Metadata } from 'next';
import Header from '@/shared/components/layout/Header';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AGB - RISING BS e.U.',
  description: 'Allgemeine Geschäftsbedingungen der RISING BS e.U.',
};

export default function AGBPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow pt-20 pb-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <p className="text-sm">für die Webseite "www.rising-bsm.at"</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und 
                Geschäftsbeziehungen zwischen RISING BS und den Nutzern der Webseite www.rising-bsm.at. 
                Mit der Nutzung der Webseite erklärt der Nutzer, diese AGB zu akzeptieren.
              </p>
              <p className="mb-4">
                Unsere Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäfte mit 
                Unternehmen und Privatpersonen. Sie sind auch für künftige Geschäftsbeziehungen 
                gültig, selbst wenn sie nicht erneut ausdrücklich erwähnt werden. Abweichenden AGB von 
                Kunden wird hiermit widersprochen.
              </p>
              <p className="mb-4">
                Die Vertragssprache ist ausschließlich Deutsch.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Vertragspartner, Vertragsschluss</h2>
              <p className="mb-4">
                Der Vertrag kommt mit RISING BS, Waldmüllergang 10a, 4020 Linz, Österreich, 
                zustande. Die Präsentation der Dienstleistungen und Produkte auf der Webseite stellt kein 
                verbindliches Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar. Der 
                Nutzer kann Online-Anfragen absenden, die erst durch die Bestätigung des Anbieters 
                rechtsverbindlich werden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Leistungen und Preise</h2>
              <p className="mb-4">
                Alle Leistungen und Preise sind auf der Webseite angegeben. Änderungen sind 
                vorbehalten. Die Preise verstehen sich inklusive der geltenden Mehrwertsteuer, sofern 
                diese anfällt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Zahlungsbedingungen</h2>
              <p className="mb-4">
                Zahlung erfolgt gemäß den auf der Webseite angegebenen Modalitäten. Zahlungen sind 
                sofort nach Vertragsabschluss fällig, sofern nichts anderes schriftlich vereinbart wurde.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Nutzungsrechte</h2>
              <p className="mb-4">
                Der Nutzer erhält ein nicht exklusives, nicht übertragbares Recht zur Nutzung der 
                angebotenen Inhalte im Rahmen der Webseite für private Zwecke. Eine Weitergabe, 
                Vervielfältigung oder kommerzielle Nutzung ist untersagt, sofern nicht anderweitig 
                schriftlich vereinbart.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Haftung</h2>
              <p className="mb-4">
                Der Anbieter haftet nur für vorsätzliche oder grob fahrlässige Schäden. Für Schäden aus 
                der Nutzung der Webseite, insbesondere bei Datenverlust, haftet der Anbieter nur im 
                gesetzlich zulässigen Rahmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Datenschutz</h2>
              <p className="mb-4">
                Der Schutz persönlicher Daten ist uns wichtig. Unsere Datenschutzerklärung finden Sie 
                auf der Webseite. Mit der Nutzung der Webseite stimmt der Nutzer der Verarbeitung seiner 
                Daten gemäß der Datenschutzerklärung zu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Urheberrecht</h2>
              <p className="mb-4">
                Alle Inhalte der Webseite, insbesondere Texte, Bilder und Logos, sind urheberrechtlich 
                geschützt. Das Kopieren oder Verbreiten ist nur mit schriftlicher Zustimmung des Anbieters 
                zulässig.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Schlussbestimmungen</h2>
              <p className="mb-4">
                Es gilt österreichisches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam 
                sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Gerichtsstand ist das 
                sachlich zuständige Gericht in Landesgericht Linz.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}