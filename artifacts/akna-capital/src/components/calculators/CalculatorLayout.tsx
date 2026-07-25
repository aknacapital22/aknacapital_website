import { motion } from "framer-motion";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

interface CalculatorLayoutProps {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  icon: LucideIcon;
  description: string;
  children: React.ReactNode;
}

export function CalculatorLayout({
  slug,
  title,
  metaTitle,
  metaDescription,
  keywords,
  icon: Icon,
  description,
  children,
}: CalculatorLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    applicationCategory: "FinanceApplication",
    description: metaDescription,
    url: `https://www.aknacapital.com/market-tools/${slug}`,
    provider: { "@type": "Organization", name: "AKNA Capital", url: "https://www.aknacapital.com/" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aknacapital.com/" },
      { "@type": "ListItem", position: 2, name: "Market Tools", item: "https://www.aknacapital.com/market-tools" },
      { "@type": "ListItem", position: 3, name: title, item: `https://www.aknacapital.com/market-tools/${slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO title={metaTitle} description={metaDescription} path={`/market-tools/${slug}`} keywords={keywords} jsonLd={[schema, breadcrumbSchema]} />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-10 md:py-16 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Breadcrumbs items={[{ label: "Market Tools", href: "/market-tools" }, { label: title }]} />
              <Link href="/market-tools" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 no-underline">
                <ArrowLeft className="w-4 h-4" /> Back to Market Tools
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
              </div>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl">{description}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-8">
              {children}
            </motion.div>

            <p className="text-xs text-muted-foreground/70 leading-relaxed mt-10 max-w-2xl">
              This calculator provides an illustrative estimate based on the assumptions you enter. It is not a guarantee of actual returns. All investments in securities markets are subject to market risk; please read all offer documents carefully before investing.
            </p>

            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-foreground">Want a plan built around this number?</p>
                <p className="text-sm text-muted-foreground mt-0.5">Talk to our team about turning this estimate into an actual investment plan.</p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group whitespace-nowrap">
                  Talk to an Advisor
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
