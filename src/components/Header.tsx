import { useState } from "react";
import { Phone, Menu, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Ärztin", href: "#aerztin" },
    { label: "Team", href: "#team" },
    { label: "Sprechzeiten", href: "#sprechzeiten" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Eye className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <span className="font-display text-lg md:text-xl font-semibold text-foreground">
              Visare
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="tel:+4930123456789"
              className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Anrufen</span>
            </a>
            <Button size="sm" onClick={() => setModalOpen(true)} className="text-sm font-medium">
              Termin buchen
            </Button>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-foreground py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4930123456789"
                className="flex items-center gap-2 text-base font-medium text-muted-foreground py-2"
              >
                <Phone className="h-4 w-4" />
                Anrufen
              </a>
            </nav>
          </div>
        )}
      </header>
      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
