import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedSections } from "@/components/sections/FeaturedSections";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ, faqs } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

// ─── Schema: Organization ────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "AKNA Capital",
  "alternateName": "AKNA Capital Ltd",
  "url": "https://aknacapital.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://aknacapital.com/logo.jpg",
    "width": 500,
    "height": 500,
  },
  "description":
    "AKNA Capital is a SEBI Registered Research Analyst helping individuals, families, and businesses grow wealth through equity research and ranking, enhanced mutual fund SIPs, private wealth management, stockmarket education, insurance, and algo-trading.",
  "identifier": "SEBI Registered RA INH000023515",
  "telephone": ["+91-8989496800", "+91-9768943840"],
  "email": "business@aknacapital.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-201, Ishwar Swaroop CHSL, 3rd Mamletdar Wadi Road",
    "addressLocality": "Malad (West), Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400064",
    "addressCountry": "IN",
  },
  "areaServed": "IN",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+91-8989496800",
    "email": "business@aknacapital.com",
    "availableLanguage": ["English", "Hindi"],
    "areaServed": "IN",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "ratingCount": "1000",
  },
};

// ─── Schema: WebSite (Sitelinks Searchbox) ───────────────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AKNA Capital",
  "url": "https://aknacapital.com/",
  "description":
    "AKNA Capital helps individuals, families, and businesses grow wealth through equity research, mutual fund investing, private wealth management, stockmarket education, insurance, and algo-trading.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://aknacapital.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

// ─── Schema: WebPage with SpeakableSpecification (GEO/LLM) ───────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AKNA Capital | Wealth Advisory",
  "url": "https://aknacapital.com/",
  "description":
    "AKNA Capital makes financial planning and equity investing easy. We grow wealth for individuals, families, and businesses using fundamental, technical and quantitative models, data analytics, and AI. SEBI Registered Research Analyst INH000023515.",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"],
  },
  "about": {
    "@type": "Organization",
    "name": "AKNA Capital",
    "url": "https://aknacapital.com/",
  },
};

const homeSchemas = [organizationSchema, webSiteSchema, faqPageSchema, webPageSchema];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="AKNA Capital | Wealth Advisory"
        description="AKNA Capital makes financial planning and equity investing easy. We grow wealth for individuals, families, and businesses using fundamental, technical and quantitative models, data analytics, and AI. SEBI Registered Research Analyst INH000023515."
        path="/"
        keywords="wealth advisory, investment advisory India, SEBI registered research analyst, equity research, stock recommendations, mutual fund investing, enhanced SIP, private wealth management, stockmarket workshop, algo trading India, term insurance, health insurance, portfolio management Mumbai"
        jsonLd={homeSchemas}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <FeaturedSections />
        <Testimonials />
        <FAQ />

        {/* Final CTA strip */}
        <section className="py-16 md:py-24 text-center bg-muted/30 border-y border-border/40">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Invest once with us and <span className="text-primary">Scale When You're Ready.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get started without limits. Increase investments at your own pace, only when your capital grows.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg">
                Try Today
              </Button>
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
