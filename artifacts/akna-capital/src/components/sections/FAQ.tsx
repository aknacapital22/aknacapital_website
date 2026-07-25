import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "What is investment advisory?",
    answer:
      "Investment advisory is professional guidance on where and how to invest your money, based on your goals, time horizon, and risk appetite. As a SEBI Registered Research Analyst, we study companies and markets using fundamental, technical, and quantitative research to arrive at our recommendations.",
  },
  {
    question: "What are the benefits of investment advisors?",
    answer:
      "A good advisor brings structure and research to decisions that are otherwise driven by guesswork or market noise. That includes access to in-depth research, a disciplined process for entering and exiting positions, and an outside perspective when markets get volatile.",
  },
  {
    question: "What should I expect from an investment advisory service?",
    answer:
      "You should expect clear, well-reasoned recommendations, regular portfolio reviews, and honest communication, including about risk. What you should not expect is a guarantee of returns. All investments in securities markets are subject to market risk.",
  },
  {
    question: "Can investment advisory help in retirement planning?",
    answer:
      "Yes. Retirement planning is really a question of matching investments to a long time horizon and a specific goal. Our Mutual Fund Investing and AKNA Private Wealth offerings are both built around long term, goal based investing that fits retirement planning well.",
  },
  {
    question: "Are investment advisory services worth the cost?",
    answer:
      "That depends on how you use them. For most investors, the value comes from avoiding avoidable mistakes: chasing tips, panic selling in a downturn, or leaving a portfolio unreviewed for years. Structured research and regular reviews are usually where the cost pays for itself.",
  },
  {
    question: "What role does an investment advisor play during market volatility?",
    answer:
      "During volatile periods, an advisor's job is to bring perspective: separating a genuine change in a company's fundamentals from short term market noise, and helping you stick to a plan instead of reacting emotionally to every swing.",
  },
  {
    question: "How do I get started with investment advisory?",
    answer:
      "Reach out through our contact form or call us directly. We'll understand your investment surplus, goals, and time horizon, and point you to the right offering, whether that's Research and Ranking, Mutual Fund Investing, or AKNA Private Wealth.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
