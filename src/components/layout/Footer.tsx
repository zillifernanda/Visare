import { Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container section-padding py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-display text-lg font-semibold">Visare Augenheilkunde</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Moderne Augenheilkunde mit persönlicher Betreuung und präziser Diagnostik in Friedrichshafen.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#ueber-uns" className="hover:text-primary-foreground transition-colors">Über uns</a></li>
              <li><a href="#aerztin" className="hover:text-primary-foreground transition-colors">Ärztin</a></li>
              <li><a href="#team" className="hover:text-primary-foreground transition-colors">Team</a></li>
              <li><a href="#sprechzeiten" className="hover:text-primary-foreground transition-colors">Sprechzeiten</a></li>
              <li><a href="#kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#impressum" className="hover:text-primary-foreground transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Visare Augenheilkunde. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Diese Website ersetzt keine ärztliche Beratung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
