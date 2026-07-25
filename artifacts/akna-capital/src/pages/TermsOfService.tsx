import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const termsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://aknacapital.com/terms-of-service" },
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Terms & Conditions | AKNA Capital"
        description="AKNA Capital's terms and conditions. The rules for working with us and using our website."
        path="/terms-of-service"
        jsonLd={termsSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 border-b border-border/40 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
            >
              Terms &amp; <span className="text-primary">Conditions</span>
            </motion.h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10 text-muted-foreground leading-relaxed"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Overview</h2>
                <p>
                  These terms apply when you use the AKNA Capital website (aknacapital.com) or engage us for research, advisory, or educational services. By using our site or working with us, you agree to these terms. If something here doesn't make sense, just call us and we'll explain it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Regulatory Status</h2>
                <p>
                  AKNA Capital operates as a SEBI Registered Research Analyst, registration number INH000023515. Our research and recommendation services are offered strictly within the scope permitted under our registration. This website does not constitute investment advice tailored to any individual's specific financial situation unless delivered through a formal client engagement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Investment Risk Disclosure</h2>
                <p>
                  Investments in securities markets, including equities, mutual funds, and algorithmic trading strategies, are subject to market risk. Past performance of any stock, fund, or strategy is not indicative of future results. AKNA Capital does not guarantee any specific return, and you should read all offer and scheme related documents carefully before investing. Please invest based on your own risk appetite after seeking appropriate professional advice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Our Services</h2>
                <p>
                  AKNA Capital provides equity research and ranking, mutual fund investment guidance, private wealth management, stockmarket education, insurance guidance, and algo-trading support. The specific scope and terms of any advisory or subscription engagement are agreed upon separately before onboarding.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Using This Website</h2>
                <p>You're welcome to use this website to learn about our services and contact us. You agree not to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Use the site for any unlawful purpose</li>
                  <li>Attempt to access systems or data you're not authorized to access</li>
                  <li>Copy, scrape, or reproduce our research or content without permission</li>
                  <li>Use our contact form to send spam or unsolicited promotions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
                <p>
                  Everything on this website, including text, design, logo, and research content, belongs to AKNA Capital. You may not copy, redistribute, or resell our research or recommendations without our written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Confidentiality</h2>
                <p>
                  We take client confidentiality seriously. Information you share with us about your finances or goals is treated as confidential and is not shared with third parties without your permission, except where required by law or regulation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Payments and Subscriptions</h2>
                <p>
                  Fees for research subscriptions or advisory engagements are agreed upon before onboarding. Please review the specific terms shared with you at the time of subscription regarding renewal, cancellation, and refunds.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Limitation of Liability</h2>
                <p>
                  We bring genuine research discipline to every recommendation, but we cannot and do not guarantee investment outcomes. AKNA Capital's liability for any claim arising from our services is limited to the amount paid for the specific subscription or service in question, to the extent permitted by applicable law and SEBI regulations. We are not liable for indirect, incidental, or consequential losses arising from market movements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">10. Termination</h2>
                <p>
                  Either party can end a subscription or advisory engagement with reasonable notice, as specified in your subscription terms. Prepaid amounts for undelivered service periods will be handled in line with those terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">11. Governing Law</h2>
                <p>
                  These terms are governed by the laws of India. Any disputes will be resolved in the courts of Mumbai, Maharashtra, India, subject to applicable SEBI dispute resolution mechanisms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">12. Changes</h2>
                <p>
                  We may update these terms occasionally. The date at the top of this page reflects the latest version. Continuing to use our website or services after an update means you accept the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">13. Contact</h2>
                <p>
                  Questions about these terms? Call us at{" "}
                  <a href="tel:+918989496800" className="text-primary hover:underline">+91-8989496800</a> or{" "}
                  <a href="tel:+919768943840" className="text-primary hover:underline">+91-9768943840</a>, or email{" "}
                  <a href="mailto:aknacapital@gmail.com" className="text-primary hover:underline">aknacapital@gmail.com</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
