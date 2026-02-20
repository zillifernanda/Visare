import { useState, type FormEvent } from "react";
import { Phone, Mail, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const KontaktSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [dsgvo, setDsgvo] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!dsgvo) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section-padding section-alt-bg">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Kontakt
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
          Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Kontaktieren Sie uns gerne.
        </p>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Telefon</p>
                <a href="tel:+4930123456789" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +49 (0)30 123 456 789
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">E-Mail</p>
                <a href="mailto:info@visare-augen.de" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@visare-augen.de
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-6 p-4 bg-card rounded-xl border border-border">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Keine medizinischen Notfälle über dieses Formular. Bei Notfällen wählen Sie bitte 112.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-card rounded-2xl p-8 text-center card-elevated">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Nachricht gesendet
                </h3>
                <p className="text-muted-foreground text-sm">
                  Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 card-elevated space-y-4">
                <Input placeholder="Name *" required />
                <Input placeholder="Telefon" type="tel" />
                <Input placeholder="E-Mail *" type="email" required />
                <Textarea placeholder="Nachricht *" rows={4} required />

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="dsgvo"
                    checked={dsgvo}
                    onCheckedChange={(v) => setDsgvo(v === true)}
                    className="mt-1"
                  />
                  <label htmlFor="dsgvo" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    Ich habe die{" "}
                    <a href="#datenschutz" className="underline hover:text-primary">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <Button type="submit" className="w-full py-5 text-base font-semibold" disabled={!dsgvo}>
                  Nachricht senden
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktSection;
