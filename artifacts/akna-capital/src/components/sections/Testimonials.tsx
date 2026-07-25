import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Prahlad Pawar",
    role: "High Net Worth Individual",
    text: "I am writing this review after 1 year of usage of Research and Ranking services. Initially I was not sure if the stock recommendations were good and I took a small quantity only to avoid any risk, and gradually I kept increasing my position size in new recommendations.",
    stars: 5,
  },
  {
    name: "Kshitij Mishra",
    role: "Trader/Investor",
    text: "I highly recommend R&R if someone wants to get good stock recommendations with perfect research.",
    stars: 5,
  },
  {
    name: "Gaurav Jain",
    role: "Business Owner",
    text: "Their recommendations are the only ones I trust at this point, as they are well researched and so far, all the stocks they've recommended have given me returns.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-24 bg-muted/30 border-y border-border/40 section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Hear From Our <span className="text-primary">Happy Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Their stories, in their words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
