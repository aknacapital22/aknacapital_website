import { Link } from "wouter";
import { Phone, Mail, MapPin, ShieldCheck, BadgeCheck, Linkedin, Youtube, MessageCircle } from "lucide-react";

const WA_NUMBER = "918989496800";
const WA_MESSAGE = encodeURIComponent(
  "Hi AKNA Capital, I'd like to know more about your services. Can we set up a quick call?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const logoUrl = "/logo.jpg";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Column 1 — Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Career", href: "/about#team" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-background/70 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-background/70 hover:text-primary transition-colors text-sm">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/market-tools" className="text-background/70 hover:text-primary transition-colors text-sm">Market Tools</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/50 mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Research and Ranking", href: "/services/research-ranking" },
                { label: "Mutual Fund Investing", href: "/services/mutual-fund-investing" },
                { label: "AKNA Private Wealth", href: "/services/akna-private-wealth" },
                { label: "Stockmarket Workshop", href: "/services/stockmarket-workshop" },
                { label: "Insurance", href: "/services/insurance" },
                { label: "Algo-Trading", href: "/services/algo-trading" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Logo */}
          <div>
            <img
              src={logoUrl}
              alt="AKNA Capital"
              className="h-12 w-12 rounded-lg object-cover mb-6"
            />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm leading-relaxed">
                  A-201, Ishwar Swaroop CHSL, 3rd Mamletdar Wadi Road, Malad (West), Mumbai – 400064
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918989496800" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +91-8989496800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919768943840" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +91-9768943840
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:business@aknacapital.com" className="text-background/70 hover:text-primary transition-colors text-sm break-all">
                  business@aknacapital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm">
                  WhatsApp +91-8989496800
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm leading-relaxed">
                  SEBI Registered RA – INH000023515
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm leading-relaxed">
                  AMFI Registered (ARN-331845)
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="AKNA Capital on X (Twitter)"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="AKNA Capital on LinkedIn"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="AKNA Capital on YouTube"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/40 text-center">
          <p>© {currentYear} AKNA Capital Ltd. All rights reserved.</p>
          <p>SEBI Registered RA · INH000023515 · AMFI Registered · ARN-331845 · Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
