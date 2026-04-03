import { useScrollReveal } from "@/hooks/useScrollReveal";
import { reviews } from "@/data/reviewsData";
import { Star } from "lucide-react";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 section-reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-5xl font-black text-foreground">3.6</span>
            <div className="text-left">
              <Stars count={4} />
              <p className="text-sm text-muted-foreground">23 reviews on Google</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 section-reveal">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date} · {review.meal}</p>
                </div>
              </div>
              <Stars count={review.rating} />
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
