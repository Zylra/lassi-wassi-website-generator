import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { TrendingUp, Store, Handshake } from "lucide-react";

const perks = [
  { icon: TrendingUp, text: "Fast-growing brand with 5+ outlets" },
  { icon: Store, text: "Proven business model with full support" },
  { icon: Handshake, text: "End-to-end training & marketing" },
];

export default function FranchiseSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="franchise"
      className="py-24 bg-gradient-to-br from-charcoal via-deep-brown to-charcoal text-primary-foreground relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center section-reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Franchise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Own a <span className="text-gradient">Lassi Wassi</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Be part of Pune's fastest-growing café brand. We provide the recipe, the brand, and the
            support — you bring the passion. Let's grow together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {perks.map((perk) => (
              <div key={perk.text} className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-5 py-3 border border-primary-foreground/10">
                <perk.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-primary-foreground/80">{perk.text}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="text-lg px-10 py-6 animate-pulse-glow" asChild>
            <a
              href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Franchise
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
