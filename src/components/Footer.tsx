import { locations } from "@/data/locationsData";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Franchise", href: "#franchise" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/lassiwassi", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/lassiwassi", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/lassiwassi", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal/80 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lassi Wassi Logo" className="h-[60px] w-auto drop-shadow-md" />
              <h3 className="text-2xl font-extrabold text-gradient">Lassi Wassi</h3>
            </div>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Pune's favourite café chain. Fresh shawarmas, thick lassis, bold burgers & vibes that hit different.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-charcoal mb-4">Outlets</h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-charcoal mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@lassiwassi.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> hello@lassiwassi.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <div className="flex gap-3 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal/10 pt-6 text-center text-sm text-charcoal/60">
          © {new Date().getFullYear()} Lassi Wassi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
