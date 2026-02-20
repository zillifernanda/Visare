const ImpressumSection = () => {
  return (
    <section id="impressum" className="section-padding">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Impressum
        </h2>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5">
          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Anbieter / Betreiber</h3>
            <p>Visare Augenheilkunde<br />Dr. med. Anna Keller</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Anschrift</h3>
            <p>Musterstraße 12<br />88045 Friedrichshafen<br />Deutschland</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Kontakt</h3>
            <p>Telefon: +49 123 456 789<br />E-Mail: info@visare-augen.de</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Berufsbezeichnung</h3>
            <p>Fachärztin für Augenheilkunde<br />Verliehen in der Bundesrepublik Deutschland</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Zuständige Kammer</h3>
            <p>Landesärztekammer Baden-Württemberg<br />[Platzhalter-Adresse der Kammer]</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />DE XXX XXX XXX (falls vorhanden)</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-base mb-1">Verantwortlich i.S.d. § 18 MStV</h3>
            <p>Dr. med. Anna Keller<br />Anschrift wie oben</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressumSection;
