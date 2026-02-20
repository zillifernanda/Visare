import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Eye, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import AppointmentModal from "./AppointmentModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const badges = [
    { icon: ShieldCheck, label: "Fachärztin für Augenheilkunde" },
    { icon: Eye, label: "Transparente Beratung" },
    { icon: Microscope, label: "Moderne Diagnostik" },
  ];

  return (
    <>
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Moderne Augenarztpraxis"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative container py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 animate-fade-in-up">
              Klar sehen.
              <br />
              Besser leben.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Moderne Augenheilkunde mit persönlicher Betreuung und präziser Diagnostik.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" onClick={() => setModalOpen(true)} className="text-base font-semibold px-8 py-6">
                Termin buchen
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base font-semibold px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground"
              >
                <a href="#kontakt">Kontakt</a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 bg-primary-foreground/15 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-primary-foreground/90 flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Hero;
