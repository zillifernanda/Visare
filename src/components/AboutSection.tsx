import { Heart, Shield, Sparkles } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: Heart, title: "Persönlich", desc: "Individuelle Betreuung für jede Patient:in" },
    { icon: Shield, title: "Vertrauensvoll", desc: "Transparente Beratung und ehrliche Kommunikation" },
    { icon: Sparkles, title: "Modern", desc: "Neueste Diagnostik und Behandlungsmethoden" },
  ];

  return (
    <section id="ueber-uns" className="section-padding section-alt-bg">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Über die Praxis
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Willkommen bei Visare Augenheilkunde. Bei uns steht Ihre Sehkraft im Mittelpunkt.
            Wir bieten moderne augenärztliche Versorgung mit menschlichem, vertrauensvollem Ansatz.
            Unser Ziel: Ihre Augengesundheit langfristig erhalten und verbessern.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-6 text-center card-elevated"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                <Icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
