import { TrendingUp } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "research-ranking",
  pillarLabel: "Research and Ranking",
  metaTitle: "Research and Ranking | AKNA Capital",
  metaDescription:
    "Ranked equity research suitable for an investment surplus of 3 Lacs to 1 Crore, over a 5-6 year horizon. Backed by our in-house Quant Engine of 30+ smart algorithms.",
  keywords:
    "equity research India, stock ranking service, SEBI registered research analyst, stock recommendations, research and ranking, fundamental analysis stocks India",
  icon: TrendingUp,
  h1: "Research and Ranking",
  heroSubheading: "For an Investment Surplus of 3 Lacs to 1 Crore",
  heroParagraph:
    "Built for a 5-6 year investment horizon, Research and Ranking gives you ranked stock recommendations backed by fundamental, technical, and quantitative research, so you know exactly why a stock made the list.",
  secondaryHeading: "Research You Can Actually Follow",
  secondaryParagraph:
    "Every recommendation comes with the reasoning behind it: the numbers, the sector context, and the risk. We rank opportunities so you can prioritize where to deploy your surplus first.",
  plainEnglish:
    "In simple terms: you tell us how much you have to invest, and our research team, backed by an in-house algorithm engine, hands you a ranked shortlist of stocks worth considering, along with when to buy, add, or book profits, so you're not picking stocks blind or chasing random tips.",
  notForYou: {
    items: [
      "You have less than roughly 3 Lacs to invest, or are looking for very short-term/intraday trading calls rather than a 5-6 year horizon.",
      "You have an investment surplus above 1 Crore — our AKNA Private Wealth offering is built specifically for that scale.",
      "You want someone to manage your money directly rather than provide research and recommendations you act on yourself.",
    ],
  },
  trustHeading: "What You Get",
  trustParagraph: "A structured research process, not a random stock tip.",
  bullets: [
    { title: "Ranked recommendations", description: "stocks ranked by our research team so you know where to focus first." },
    { title: "In-house Quant Engine", description: "30+ smart algorithms screen the market for opportunities before our analysts review them." },
    { title: "Entry and exit guidance", description: "clear levels for when to enter, add, or book out of a position." },
    { title: "Regular portfolio reviews", description: "check-ins as markets move and your goals evolve." },
  ],
  differentHeading: "Why This Is Different",
  differentParagraph:
    "Most stock tips come with no context. Ours come with the research behind them: what we looked at, why it ranked where it did, and what would change our view. Past performance of any recommendation does not guarantee future results, and all investments in securities are subject to market risk.",
  faqs: [
    {
      q: "Who is Research and Ranking suitable for?",
      a: "Investors with an investment surplus of roughly 3 Lacs to 1 Crore, looking at a 5-6 year horizon, who want research backed stock recommendations rather than managing everything themselves from scratch.",
    },
    {
      q: "How are stocks ranked?",
      a: "Our in-house Quant Engine screens the market using fundamental, technical, and quantitative models. Our research team then reviews the output and ranks opportunities before they reach you.",
    },
    {
      q: "Do you guarantee returns?",
      a: "No. As a SEBI Registered Research Analyst, we do not and cannot guarantee returns. All investments in securities markets are subject to market risk. Our role is to bring structured, data backed research to your decisions.",
    },
    {
      q: "How often will I get updates?",
      a: "You will receive new ranked recommendations along with regular portfolio reviews, so you always know how your existing positions are tracking.",
    },
    {
      q: "How do I get started?",
      a: "Reach out through our contact form or call us directly. We'll understand your investment surplus and goals before onboarding you.",
    },
    {
      q: "Is this the same as a stock tip service?",
      a: "No. A tip service typically gives you a buy call with no context. Research and Ranking gives you the fundamental, technical, and quantitative reasoning behind each recommendation, along with a rank so you know where to focus first.",
    },
    {
      q: "What sectors or market caps do you cover?",
      a: "Our Quant Engine and research team screen across large-cap, mid-cap, and small-cap stocks across sectors, ranking opportunities on fundamentals, technicals, and quantitative signals rather than restricting to one sector or market-cap band.",
    },
    {
      q: "Do I need a demat account with a specific broker?",
      a: "No. Research and Ranking gives you recommendations and guidance; you execute trades through your own existing demat and trading account with any broker.",
    },
  ],
  relatedServices: [
    { label: "Mutual Fund Investing", href: "/services/mutual-fund-investing" },
    { label: "AKNA Private Wealth", href: "/services/akna-private-wealth" },
    { label: "Algo-Trading", href: "/services/algo-trading" },
  ],
};

export default function ResearchRanking() {
  return <ServiceDetailPage config={config} />;
}
