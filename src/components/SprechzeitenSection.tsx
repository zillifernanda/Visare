import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Montag – Freitag", time: "08:00 – 17:00 Uhr" },
  { day: "Samstag", time: "nach Vereinbarung" },
  { day: "Sonntag & Feiertage", time: "geschlossen" },
];

const SprechzeitenSection = () => {
  return (
    <section id="sprechzeiten" className="section-padding">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Sprechzeiten & Standort
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hours */}
          <div className="bg-card rounded-2xl p-6 card-elevated">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Sprechzeiten</h3>
            </div>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm font-medium text-foreground">{h.day}</span>
                  <span className="text-sm text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-card rounded-2xl p-6 card-elevated">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Standort</h3>
            </div>
            <address className="not-italic text-muted-foreground leading-relaxed mb-6">
              <p className="font-medium text-foreground">Visare Augenheilkunde</p>
              <p>Musterstraße 12</p>
              <p>88045 Friedrichshafen</p>
              <p>Deutschland</p>
            </address>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://www.google.com/maps/search/Musterstra%C3%9Fe+12+88045+Friedrichshafen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Route planen
              </a>
            </Button>

            {/* Map placeholder */}
            <div className="mt-5 rounded-xl overflow-hidden border border-border aspect-video bg-muted flex items-center justify-center">
              <iframe
                title="Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.1!2d9.48!3d47.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM5JzAwLjAiTiA5wrAyOCc0OC4wIkU!5e0!3m2!1sde!2sde!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SprechzeitenSection;
