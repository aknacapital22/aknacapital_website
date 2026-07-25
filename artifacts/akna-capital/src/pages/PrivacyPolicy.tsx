import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const privacySchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.aknacapital.com/privacy-policy" },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Privacy Policy | AKNA Capital"
        description="AKNA Capital's privacy policy. How we collect, use, and protect your information."
        path="/privacy-policy"
        jsonLd={privacySchemas}
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
              Privacy <span className="text-primary">Policy</span>
            </motion.h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10 text-muted-foreground leading-relaxed"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Who We Are</h2>
                <p>
                  AKNA Capital is a SEBI Registered Research Analyst (registration INH000023515), based in Mumbai, India, helping individuals, families, and businesses with equity research, mutual fund investing, wealth management, insurance guidance, and algo-trading. When you use our website or contact us, you may share personal information with us. This policy explains what we do with it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. What We Collect</h2>
                <p>We collect information you give us directly, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your name, email address, and phone number when you fill out our contact form</li>
                  <li>Details of your investment goals, surplus, or inquiry</li>
                  <li>Information you share with us as part of onboarding for our research and advisory services</li>
                </ul>
                <p className="mt-3">We don't sell your data or collect more than what's needed to serve you as a client.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                <p>We use the information you share to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Respond to your inquiry and understand which of our offerings fits your goals</li>
                  <li>Onboard and service you as a client, including sharing research and recommendations</li>
                  <li>Meet our regulatory record-keeping obligations as a SEBI Registered Research Analyst</li>
                </ul>
                <p className="mt-3">We won't add you to marketing communications beyond what's needed to service your account without your consent.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. How We Store It</h2>
                <p>
                  Contact form submissions and client information are stored securely and accessed only by our core team, in line with our obligations as a SEBI registered intermediary.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Third Parties</h2>
                <p>
                  We don't sell, rent, or share your personal information with third parties for marketing purposes. We may share information with regulators or service providers where required by law or to operate our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
                <p>
                  Our website may use functional browser storage for basic site functionality. We do not use tracking cookies for advertising purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
                <p>You can ask us at any time to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>See what information we hold about you</li>
                  <li>Correct anything that's wrong</li>
                  <li>Delete your data from our records, subject to our regulatory record-keeping obligations</li>
                </ul>
                <p className="mt-3">Call us at <a href="tel:+918989496800" className="text-primary hover:underline">+91-8989496800</a> and we'll help.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
                <p>
                  If we make meaningful changes to this policy, we'll update the date at the top of this page.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Contact</h2>
                <p>
                  Questions about this policy? Call us at{" "}
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
