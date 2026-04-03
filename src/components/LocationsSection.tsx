import { useScrollReveal } from "@/hooks/useScrollReveal";
import { locations } from "@/data/locationsData";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationsSection() {
  const ref = useScrollReveal();

  return (
    <section id="locations" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 section-reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="text-gradient">Outlets</span>
          </h2>
          <p className="text-muted-foreground text-lg">5 locations across Pune — and growing!</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 section-reveal">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{loc.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{loc.address}</p>
              <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-1" />
                  Get Directions
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-lg section-reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d121058.93187486!2d73.7567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLassi+Wassi+Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lassi Wassi Pune locations"
          />
        </div>
      </div>
    </section>
  );
}
