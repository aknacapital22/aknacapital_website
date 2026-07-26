import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Contact as ContactSection } from "@/components/sections/Contact";

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://aknacapital.com/contact" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AKNA Capital",
    "url": "https://aknacapital.com/contact",
    "description":
      "Contact AKNA Capital for a wealth advisory consultation. We respond within a day.",
    "publisher": {
      "@type": "Organization",
      "name": "AKNA Capital",
      "url": "https://aknacapital.com/",
      "telephone": "+91-8989496800",
      "email": "business@aknacapital.com",
    },
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Contact AKNA Capital | Wealth Advisory"
        description="Talk to our team about your investment goals. We respond within a day. Based in Mumbai. Call +91-8989496800 / +91-9768943840 or email business@aknacapital.com."
        path="/contact"
        keywords="contact AKNA Capital, wealth advisory consultation Mumbai, SEBI registered research analyst contact, investment advisory enquiry"
        jsonLd={contactSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-10 md:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Tell us about your investment goals and we'll get back to you. No pressure, just a real conversation.
            </motion.p>
          </div>
        </section>

        {/* Reuse the comprehensive Contact form section, removing the extra top padding since we have a hero here */}
        <div className="-mt-12">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
