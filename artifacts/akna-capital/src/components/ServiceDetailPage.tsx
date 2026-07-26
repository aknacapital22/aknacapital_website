import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Check, LucideIcon } from "lucide-react";

export interface ServiceBullet {
  title: string;
  description: string;
  href?: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetailConfig {
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
  bullets: ServiceBullet[];
  differentHeading: string;
  differentParagraph: string;
  faqs: ServiceFaq[];
  // Optional richer sections, used by corporate advisory (M&A / IPO) pages.
  whoItsFor?: { heading: string; items: string[] };
  deliverables?: { heading: string; items: ServiceBullet[] };
  approach?: { heading: string; steps: ServiceBullet[] };
  whyChooseUs?: { heading: string; items: string[] };
  ctaLabel?: string;
  // Optional plain-English / clarity sections, added to make services easier
  // to understand for a first-time reader and to target long-tail search queries.
  plainEnglish?: string;
  notForYou?: { heading?: string; items: string[] };
  glossary?: { heading?: string; terms: { term: string; definition: string }[] };
  caseStudy?: { heading: string; scenario: string; approach: string; outcome: string };
  relatedServices?: { label: string; href: string }[];
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

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  const Icon = config.icon;
  const ctaLabel = config.ctaLabel ?? "Talk to an Advisor";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    description: config.metaDescription,
    provider: { "@type": "Organization", name: "AKNA Capital", url: "https://aknacapital.com/" },
    areaServed: "IN",
    serviceType: config.h1,
    url: `https://aknacapital.com/services/${config.slug}`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aknacapital.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://aknacapital.com/services/research-ranking" },
      { "@type": "ListItem", position: 3, name: config.h1, item: `https://aknacapital.com/services/${config.slug}` },
    ],
  };

  const howToSchema = config.approach
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: config.approach.heading,
        description: config.metaDescription,
        step: config.approach.steps.map((step) => ({
          "@type": "HowToStep",
          name: step.title,
          text: step.description,
        })),
      }
    : null;

  const jsonLd = [serviceSchema, faqSchema, breadcrumbSchema, ...(howToSchema ? [howToSchema] : [])];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        path={`/services/${config.slug}`}
        keywords={config.keywords}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center">
              <Breadcrumbs items={[{ label: "Services" }, { label: config.h1 }]} />
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
              {config.plainEnglish && (
                <div className="max-w-2xl mx-auto mb-8 p-5 rounded-2xl bg-primary/5 border border-primary/20 text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    In Plain English
                  </p>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    {config.plainEnglish}
                  </p>
                </div>
              )}
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                  {ctaLabel}
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

        {/* Who it's for — optional */}
        {config.whoItsFor && (
          <section className="py-14 md:py-20 bg-muted/30 border-y border-border/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
              >
                {config.whoItsFor.heading}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {config.whoItsFor.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-3 p-4 rounded-2xl bg-card border border-border/50"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Not for you — optional, sets honest expectations */}
        {config.notForYou && (
          <section className="py-14 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
              >
                {config.notForYou.heading ?? "This Might Not Be for You If"}
              </motion.h2>
              <div className="space-y-3">
                {config.notForYou.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mt-2.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables — optional */}
        {config.deliverables && (
          <section className="py-14 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
              >
                {config.deliverables.heading}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.deliverables.items.map((item, i) => (
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
                      <span className="font-semibold text-foreground">{item.title}.</span>{" "}
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust section with bullets — used by the original 6 retail services */}
        {config.bullets.length > 0 && (
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
        )}

        {/* Approach — optional, numbered steps */}
        {config.approach && (
          <section className="py-14 md:py-20 bg-muted/30 border-y border-border/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
              >
                {config.approach.heading}
              </motion.h2>
              <div className="space-y-4">
                {config.approach.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed pt-0.5">
                      <span className="font-semibold text-foreground">{step.title}.</span>{" "}
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case study — optional, illustrative example */}
        {config.caseStudy && (
          <section className="py-14 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-10 rounded-3xl bg-muted/30 border border-border/50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  {config.caseStudy.heading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Scenario</p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{config.caseStudy.scenario}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Approach</p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{config.caseStudy.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Outcome</p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{config.caseStudy.outcome}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-8 text-center italic">
                  Illustrative example based on typical engagements. Individual results depend on the specifics of each transaction.
                </p>
              </motion.div>
            </div>
          </section>
        )}

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

        {/* Why choose us — optional checklist */}
        {config.whyChooseUs && (
          <section className="py-14 md:py-20 bg-foreground text-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-10 text-center"
              >
                {config.whyChooseUs.heading}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.whyChooseUs.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-background/10 p-4 md:p-5 rounded-2xl"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Glossary — optional, plain-English definitions of jargon used above */}
        {config.glossary && (
          <section className="py-14 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
              >
                {config.glossary.heading ?? "Terms Explained"}
              </motion.h2>
              <dl className="space-y-4">
                {config.glossary.terms.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-4 rounded-2xl bg-card border border-border/50"
                  >
                    <dt className="font-semibold text-foreground mb-1">{item.term}</dt>
                    <dd className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.definition}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Related services — optional, internal linking for SEO and cross-sell */}
        {config.relatedServices && config.relatedServices.length > 0 && (
          <section className="py-10 md:py-14 bg-muted/30 border-y border-border/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-4">
                Related Services
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {config.relatedServices.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
                {ctaLabel}
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
