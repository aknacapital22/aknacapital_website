import { Gem } from "lucide-react";
import { BusinessDetailPage, BusinessDetailConfig } from "@/components/BusinessDetailPage";

const config: BusinessDetailConfig = {
  slug: "akna-private-wealth",
  pillarLabel: "AKNA Private Wealth",
  metaTitle: "AKNA Private Wealth | HNI Wealth Management | AKNA Capital",
  metaDescription:
    "AKNA Private Wealth is suitable for an investment surplus of 1 Crore and above, built around an 8-10 year investment plan for high net worth individuals and families.",
  keywords:
    "private wealth management India, high net worth investment, HNI wealth advisory, family office India, long term wealth planning",
  icon: Gem,
  h1: "AKNA Private Wealth",
  heroSubheading: "For an Investment Surplus of 1 Crore & Above",
  heroParagraph:
    "AKNA Private Wealth is our dedicated offering for high net worth individuals and families, built around an 8-10 year investment horizon, combining equity, mutual funds, and alternate assets into one coordinated wealth plan.",
  secondaryHeading: "A Dedicated, High Touch Approach",
  secondaryParagraph:
    "At this level, generic advice is not enough. AKNA Private Wealth pairs you with a dedicated approach to your portfolio, built around your specific goals, liabilities, and time horizon, not a one-size-fits-all model.",
  trustHeading: "What AKNA Private Wealth Covers",
  trustParagraph: "A long term, diversified approach to preserving and growing significant capital.",
  bullets: [
    { title: "Dedicated wealth advisory", description: "a tailored plan built around your specific financial situation and goals." },
    { title: "Diversified strategy", description: "equity, mutual funds, and alternate assets working together instead of one concentrated bet." },
    { title: "Long term wealth planning", description: "built around an 8-10 year horizon, including multi-generational and succession goals." },
    { title: "Regular strategy reviews", description: "portfolio check-ins as markets, tax rules, and your family's needs change over time." },
  ],
  differentHeading: "Why AKNA Private Wealth Is Different",
  differentParagraph:
    "This is not a scaled-up version of a retail SIP. AKNA Private Wealth is built specifically for larger portfolios, where diversification, tax efficiency, and long-horizon planning matter more than chasing a single hot recommendation. As with all investments in securities, capital is subject to market risk and returns are never guaranteed.",
  faqs: [
    {
      q: "Who is AKNA Private Wealth for?",
      a: "Individuals and families with an investment surplus of 1 Crore or more, looking at an 8-10 year horizon, who want a coordinated wealth strategy rather than a single product.",
    },
    {
      q: "How is this different from Research and Ranking?",
      a: "Research and Ranking is built around ranked stock recommendations for a 3 Lac to 1 Crore surplus over 5-6 years. AKNA Private Wealth is a broader, more dedicated wealth management approach for larger portfolios and longer horizons.",
    },
    {
      q: "Does this include mutual funds and insurance too?",
      a: "Yes. AKNA Private Wealth is built to coordinate across equity, mutual funds, and other assets, and can bring in insurance planning where it fits your overall picture.",
    },
    {
      q: "How often is my portfolio reviewed?",
      a: "We schedule regular strategy reviews, and reach out proactively when market conditions or your personal circumstances suggest a change may be worth discussing.",
    },
    {
      q: "How do I get started?",
      a: "Reach out through our contact form or call us directly. We'll start with an in-depth conversation about your goals, liabilities, and time horizon before proposing an approach.",
    },
  ],
};

export default function AknaPrivateWealth() {
  return <BusinessDetailPage config={config} />;
}
