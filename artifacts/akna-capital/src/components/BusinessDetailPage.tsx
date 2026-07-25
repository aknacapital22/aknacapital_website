import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, LucideIcon } from "lucide-react";

export interface BusinessBullet {
  title: string;
  description: string;
  href?: string;
}

export interface BusinessFaq {
  q: string;
  a: string;
}

export interface BusinessDetailConfig {
  slug: string;
  pillarLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  icon: LucideIcon;
  h1: string;
  heroSubheading: string;
  heroParagraph: string;
  secondaryHeading: string;
  secondaryParagraph: string;
  trustHeading: string;
  trustParagraph: string;
  bullets: BusinessBullet[];
  differentHeading: string;
  differentParagraph: string;
  faqs: BusinessFaq[];
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl border transition-colors duration-200 ${
        open ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-foreground leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function BusinessDetailPage({ config }: { config: BusinessDetailConfig }) {
  const Icon = config.icon;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    description: config.metaDescription,
    provider: { "@type": "Organization", name: "AKNA Capital", url: "https://www.aknacapital.com/" },
    areaServed: "IN",
    serviceType: config.h1,
    url: `https://www.aknacapital.com/businesses/${config.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aknacapital.com/" },
      { "@type": "ListItem", position: 2, name: "Businesses", item: "https://www.aknacapital.com/businesses/research-ranking" },
      { "@type": "ListItem", position: 3, name: config.h1, item: `https://www.aknacapital.com/businesses/${config.slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        path={`/businesses/${config.slug}`}
        keywords={config.keywords}
        jsonLd={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center">
              <Breadcrumbs items={[{ label: "Businesses" }, { label: config.h1 }]} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
              >
                <Icon className="w-4 h-4" />
                {config.pillarLabel}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
                {config.h1}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-5">
                {config.heroSubheading}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                {config.heroParagraph}
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                  Talk to an Advisor
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Secondary section */}
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {config.secondaryHeading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {config.secondaryParagraph}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust section with bullets */}
        <section className="py-14 md:py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {config.trustHeading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {config.trustParagraph}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-3 p-5 rounded-2xl bg-card border border-border/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    {bullet.href ? (
                      <Link href={bullet.href} className="font-semibold text-primary hover:underline">
                        {bullet.title}.
                      </Link>
                    ) : (
                      <span className="font-semibold text-foreground">{bullet.title}.</span>
                    )}{" "}
                    {bullet.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why different */}
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {config.differentHeading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {config.differentParagraph}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Common Questions
              </h2>
            </motion.div>
            <div className="space-y-3">
              {config.faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
              Have something in mind? Let's talk.
            </h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                Talk to an Advisor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
