import { PieChart } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "mutual-fund-investing",
  pillarLabel: "Mutual Fund Investing",
  metaTitle: "Mutual Fund Investing | Enhanced SIP | AKNA Capital",
  metaDescription:
    "Stop your normal SIP and start an enhanced SIP with our algorithms. Algorithm assisted mutual fund investing built around your goals.",
  keywords:
    "enhanced SIP, mutual fund investing India, SIP algorithm, best mutual funds India, goal based mutual fund investing",
  icon: PieChart,
  h1: "Mutual Fund Investing",
  heroSubheading: "Stop Your Normal SIP. Start an Enhanced SIP.",
  heroParagraph:
    "A regular SIP invests a fixed amount into a fixed fund every month, regardless of what is happening in the market. Our enhanced SIP uses our algorithms to guide fund selection and rebalancing over time, so your mutual fund investing stays active instead of static.",
  secondaryHeading: "Built Around Your Goal, Not a Fixed Amount",
  secondaryParagraph:
    "Whether you are investing for a child's education, a home, or retirement, we map your mutual fund investments to that specific goal and time horizon, and review the plan as things change.",
  plainEnglish:
    "In simple terms: a normal SIP invests the same amount in the same fund every month, no matter what. Our enhanced SIP still runs automatically each month, but our algorithms and team review and adjust the fund mix over time, tied to a specific goal like your child's education or retirement, so it isn't left running unattended for years.",
  notForYou: {
    items: [
      "You're purely looking for direct stock recommendations rather than mutual fund investing — see our Research and Ranking instead.",
      "You want a completely hands-off, never-reviewed investment with no ongoing engagement.",
    ],
  },
  trustHeading: "How Enhanced SIP Works",
  trustParagraph: "A more active approach to mutual fund investing.",
  bullets: [
    { title: "Algorithm assisted fund selection", description: "our models screen fund categories and performance instead of picking a fund once and leaving it." },
    { title: "Periodic rebalancing", description: "your fund mix is reviewed and adjusted as market conditions and your goals evolve." },
    { title: "Goal based investing", description: "every SIP is mapped to a specific financial goal and horizon." },
    { title: "Ongoing fund review", description: "we track fund performance so you are not left holding an underperforming fund by default." },
  ],
  differentHeading: "Why This Is Different From a Regular SIP",
  differentParagraph:
    "A regular SIP is simple but passive. Enhanced SIP keeps the simplicity of automated monthly investing while adding an active layer of algorithm driven review on top, so your mutual fund portfolio is not left on autopilot indefinitely. Mutual fund investments are subject to market risk; please read all scheme related documents carefully.",
  faqs: [
    {
      q: "What is an enhanced SIP?",
      a: "It is a systematic investment plan where fund selection and rebalancing are guided by our algorithms and reviewed by our team, instead of a fixed amount going into a fixed fund indefinitely without review.",
    },
    {
      q: "Is this suitable for beginners?",
      a: "Yes. Mutual Fund Investing is designed to be one of the more accessible ways to start, whether you are new to investing or already run SIPs elsewhere.",
    },
    {
      q: "Can I switch from my existing SIPs?",
      a: "Yes. We can review your existing mutual fund SIPs and suggest how they fit, or don't fit, your goals before recommending changes.",
    },
    {
      q: "Are mutual fund returns guaranteed?",
      a: "No. Mutual fund investments are subject to market risk. Our role is to bring a more structured, reviewed approach to your mutual fund investing, not to promise a specific return.",
    },
    {
      q: "How do I get started?",
      a: "Share your goals and current investments through our contact form, and we'll walk you through how enhanced SIP would apply to your situation.",
    },
    {
      q: "How much can I start an enhanced SIP with?",
      a: "Enhanced SIP is built to work at typical retail SIP amounts, so you can start small and increase contributions over time as your goal and income grow.",
    },
    {
      q: "Do I lose control over which funds I'm invested in?",
      a: "No. We recommend and review the fund mix with you; you retain visibility and control over where your money is invested, it's not a black-box allocation.",
    },
    {
      q: "How is rebalancing decided?",
      a: "Rebalancing is guided by our algorithm's read on fund category performance and market conditions, reviewed by our team, and only actioned after checking it still fits your original goal and horizon.",
    },
  ],
  relatedServices: [
    { label: "Research and Ranking", href: "/services/research-ranking" },
    { label: "AKNA Private Wealth", href: "/services/akna-private-wealth" },
    { label: "Insurance", href: "/services/insurance" },
  ],
};

export default function MutualFundInvesting() {
  return <ServiceDetailPage config={config} />;
}
