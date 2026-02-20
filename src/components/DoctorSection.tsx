import { CheckCircle, Quote } from "lucide-react";
import doctorImg from "@/assets/doctor-anna.jpg";

const DoctorSection = () => {
  const specialties = [
    "Allgemeine Augenheilkunde",
    "Vorsorgeuntersuchungen",
    "Sehkorrektur",
    "Behandlung von Augenerkrankungen",
  ];

  return (
    <section id="aerztin" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden card-elevated aspect-[3/4] max-w-md mx-auto md:max-w-none">
              <img
                src={doctorImg}
                alt="Dr. med. Anna Keller"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Dr. med. Anna Keller
            </h2>
            <p className="text-primary font-medium mb-5">Fachärztin für Augenheilkunde</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Langjährige Erfahrung in Diagnostik und Behandlung von Augenerkrankungen.
              Präzise Diagnostik, moderne Standards, persönliche Betreuung.
            </p>

            <h3 className="font-semibold text-foreground mb-3">Schwerpunkte</h3>
            <ul className="space-y-2.5 mb-8">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-foreground">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ul>

            <blockquote className="relative bg-secondary rounded-xl p-5">
              <Quote className="h-5 w-5 text-accent mb-2" />
              <p className="text-foreground font-display text-lg italic">
                „Gutes Sehen bedeutet Lebensqualität."
              </p>
              <cite className="text-sm text-muted-foreground mt-2 block not-italic">
                — Dr. med. Anna Keller
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
