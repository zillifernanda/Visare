import { useState, type FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, CalendarDays } from "lucide-react";

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppointmentModal = ({ open, onOpenChange }: AppointmentModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => setSubmitted(false), 300);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            Termin buchen
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-14 w-14 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Anfrage gesendet!
            </h3>
            <p className="text-muted-foreground text-sm">
              Wir melden uns schnellstmöglich bei Ihnen zur Terminbestätigung.
            </p>
            <Button className="mt-6" onClick={() => handleClose(false)}>
              Schließen
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <Input placeholder="Name *" required />
            <Input placeholder="Telefon *" type="tel" required />
            <Input placeholder="E-Mail *" type="email" required />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Datum" type="date" required />
              <Input placeholder="Uhrzeit" type="time" required />
            </div>
            <Textarea placeholder="Anliegen / Kurzbeschreibung" rows={3} />
            <Button type="submit" className="w-full py-5 text-base font-semibold">
              Termin anfragen
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
