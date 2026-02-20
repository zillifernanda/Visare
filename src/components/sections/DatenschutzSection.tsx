const DatenschutzSection = () => {
  return (
    <section id="datenschutz" className="section-padding section-alt-bg">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Datenschutzerklärung
        </h2>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">1. Verantwortlicher</h3>
            <p>
              Visare Augenheilkunde — Dr. med. Anna Keller<br />
              Musterstraße 12, 88045 Friedrichshafen<br />
              E-Mail: info@visare-augen.de<br />
              Telefon: +49 123 456 789
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">2. Zweck der Verarbeitung</h3>
            <p>
              Wir verarbeiten personenbezogene Daten zur Terminvereinbarung, zur Beantwortung von Anfragen
              und zur Bereitstellung unserer Website.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">3. Rechtsgrundlage (Art. 6 Abs. 1 DSGVO)</h3>
            <p>
              Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
              zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) oder aufgrund berechtigter Interessen
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">4. Speicherdauer</h3>
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt,
              es sei denn, gesetzliche Aufbewahrungsfristen stehen dem entgegen.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">5. Rechte der Betroffenen</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich dazu an die oben genannte Kontaktadresse.
              Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">6. Kontakt Datenschutz</h3>
            <p>
              Für Fragen zum Datenschutz wenden Sie sich bitte an:<br />
              datenschutz@visare-augen.de
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">7. Hosting / Analytics</h3>
            <p>
              Diese Website wird bei [Hosting-Anbieter Platzhalter] gehostet. Es werden ggf. Server-Logfiles
              erhoben (IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs). Weitere Analytics-Dienste werden
              derzeit nicht eingesetzt.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">8. Cookies</h3>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. Sie können Ihre Browser-Einstellungen
              so konfigurieren, dass Sie über das Setzen von Cookies informiert werden und einzeln über
              deren Annahme entscheiden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatenschutzSection;
