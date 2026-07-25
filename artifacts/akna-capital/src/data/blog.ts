export interface BlogAuthor {
  name: string;
  title: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: BlogAuthor;
  content: string;
}

const SMIT: BlogAuthor = { name: "Smit Ruparel", title: "Head of Fundamental Research" };
const AKSHAT: BlogAuthor = { name: "Akshat Nahata", title: "Quant & Technical Research" };
const PRAJVI: BlogAuthor = { name: "CA Prajvi Nahata", title: "Equity Research & Multibagger Hunting" };
const DESK: BlogAuthor = { name: "AKNA Capital Research Desk", title: "AKNA Capital Research Team" };

// Ordered newest first — blogPosts[0] is the featured article on /blog.
export const blogPosts: BlogPost[] = [
  {
    slug: "sip-vs-lumpsum-volatile-market",
    title: "SIP vs Lumpsum: Which Should You Choose in a Volatile Market?",
    metaTitle: "SIP vs Lumpsum Investing in a Volatile Market | AKNA Capital",
    metaDescription:
      "When markets are choppy, should you invest as a lumpsum or stagger it through a SIP? Here's how to actually think about the choice.",
    excerpt: "Volatility makes this question louder every time markets swing. The honest answer depends less on the market and more on what money you're investing and when you need it.",
    category: "Mutual Funds",
    readTime: "5 min read",
    date: "July 8, 2026",
    isoDate: "2026-07-08",
    author: PRAJVI,
    content: `
## Why This Question Keeps Coming Back

Every time markets fall sharply or run up fast, the same question resurfaces: should you invest your surplus all at once, or spread it out through a SIP? Volatility makes the decision feel urgent, but the honest answer has less to do with where the market is right now and more to do with the money itself.

## What Lumpsum Investing Actually Assumes

Investing a lumpsum assumes you are comfortable with the entire amount being exposed to the market's short term moves from day one. If the market falls 10% the week after you invest, your entire corpus feels that fall, not just a fraction of it.

This isn't automatically wrong. If your money already has a long time horizon, and you were simply holding it in a savings account waiting for "the right time," a lumpsum invested today has historically outperformed money held back waiting for a dip that may or may not come.

## What a SIP Actually Buys You

A SIP does not remove market risk. What it removes is **decision fatigue and timing risk on a single date**. By spreading the investment across months, you buy at multiple price points instead of one, which softens the impact if the market falls shortly after you start.

The trade-off: if the market simply goes up steadily from the day you start, a SIP means part of your money stayed uninvested and missed out on those early gains compared to a lumpsum.

## A More Useful Way to Frame It

- **Fresh surplus with no urgency** (a bonus, an inheritance, a sale of property): SIP-ing it in over 6 to 12 months is a reasonable way to reduce single-date timing risk.
- **Money you were always going to invest anyway** (freed up from a matured FD, for instance): investing it as a lumpsum tends to make more sense, since delaying it is itself a market-timing decision.
- **Ongoing monthly savings** (from your salary): this is naturally a SIP, there's no lumpsum alternative to weigh against.

Our [Lumpsum + SIP Calculator](/market-tools/lumpsum-sip-calculator) lets you model a blended approach: investing part of your surplus as a lumpsum and staggering the rest, which is often the more realistic answer than picking one extreme.

## Where We Can Help

If you have a lump sum sitting idle and are unsure how to deploy it, that's exactly the kind of decision [Mutual Fund Investing](/businesses/mutual-fund-investing) at AKNA Capital is built around: matching the approach to your specific goal and time horizon, not a blanket rule.

Mutual fund investments are subject to market risk. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
`,
  },
  {
    slug: "diversification-beyond-buying-more-stocks",
    title: "Diversification Isn't Just Buying More Stocks",
    metaTitle: "What Real Portfolio Diversification Looks Like | AKNA Capital",
    metaDescription:
      "Owning 30 stocks isn't automatically diversified if they all move together. Here's what diversification actually needs to account for.",
    excerpt: "Owning more stocks feels like diversification. It often isn't, if those stocks all rise and fall together. Here's what actually reduces risk.",
    category: "Wealth Planning",
    readTime: "5 min read",
    date: "June 10, 2026",
    isoDate: "2026-06-10",
    author: PRAJVI,
    content: `
## The Comforting Illusion of Owning "A Lot" of Stocks

A portfolio of 25 or 30 stocks feels diversified simply by virtue of the count. But diversification isn't about how many positions you hold, it's about how independently those positions move from each other. Thirty stocks in the same sector, reacting to the same triggers, behave a lot like one large position.

## What Actually Needs to Be Diversified

- **Across sectors.** Banking, IT, pharma, consumption, and manufacturing don't all react the same way to interest rate changes, currency moves, or global demand shifts.
- **Across market capitalisation.** Large caps, mid caps, and small caps carry different risk and liquidity profiles, especially during a sharp correction.
- **Across asset classes.** Equity, mutual funds, and in some cases gold or debt instruments respond differently to the same macro event.
- **Across time horizons.** Money you need in 2 years should not sit in the same kind of instrument as money you won't touch for 15.

## The Concentration Trap

It's common to end up overweight in a sector without realizing it, especially when several individually reasonable stock picks happen to all be in, say, IT services or private banks. The portfolio looks diversified by stock count while being quietly concentrated by exposure.

## Diversification Isn't Free, Either

Over-diversifying has its own cost: spreading a portfolio across 60 or 70 small positions can dilute returns so much that even your best ideas barely move the needle. The goal isn't maximum spread, it's **deliberate** spread, where each position is there because it adds something the others don't.

## How This Plays Out at AKNA Capital

This is a core part of how [AKNA Private Wealth](/businesses/akna-private-wealth) is structured for larger portfolios: coordinating equity, mutual funds, and other assets so that the overall exposure is intentional, not an accident of which individual stock ideas happened to look good that quarter. It's also why our [Research and Ranking](/businesses/research-ranking) recommendations are ranked with sector and market cap context, not handed out as isolated stock tips.

All investments in securities markets are subject to market risk. Diversification reduces certain risks but does not eliminate the possibility of loss.
`,
  },
  {
    slug: "technical-analysis-101-reading-price-action",
    title: "Technical Analysis 101: Reading Price Action Without the Hype",
    metaTitle: "Technical Analysis Basics for Beginners | AKNA Capital",
    metaDescription:
      "Technical analysis gets a reputation for chart magic and trading signals. Here's a grounded, hype-free introduction to what it's actually useful for.",
    excerpt: "Technical analysis has a reputation problem: too many chart patterns promising certainty. Here's what it's actually good for, and what it isn't.",
    category: "Market Education",
    readTime: "6 min read",
    date: "May 15, 2026",
    isoDate: "2026-05-15",
    author: AKSHAT,
    content: `
## Technical Analysis Has an Image Problem

Search for technical analysis online and you'll find no shortage of chart patterns promising to predict the next big move with certainty. That reputation does the actual discipline a disservice. Used properly, technical analysis is not about prediction, it's about reading what the market is currently doing, not what it might do next week.

## What Price Action Actually Tells You

A stock's price and volume reflect the combined decisions of every buyer and seller in the market at that moment. Technical analysis studies that behavior directly, instead of trying to infer it from a company's financial statements.

- **Trend.** Is the stock in a sustained uptrend, downtrend, or moving sideways in a range?
- **Support and resistance.** Price levels where buying or selling pressure has repeatedly shown up in the past.
- **Volume.** Is a price move backed by strong participation, or happening on unusually thin volume?
- **Momentum.** Is the pace of a move accelerating or slowing down, which often shows up before the price direction itself changes.

## What It Is Not Good At

Technical analysis has no opinion on whether a company's business is fundamentally sound. It cannot tell you if a company is carrying too much debt or if its earnings are about to disappoint. That's precisely why it works best alongside fundamental analysis, not as a replacement for it.

It also isn't a certainty machine. Patterns fail. Support levels break. Any framework that promises a "sure shot" signal is overselling what technical analysis can actually deliver.

## Where Technical Analysis Genuinely Helps

- **Timing entries and exits** for a stock you already believe in fundamentally.
- **Setting stop losses** based on where a trend would actually be considered broken, rather than an arbitrary percentage.
- **Spotting when a fundamentally weak trend is nonetheless attracting strong buying**, which is worth investigating rather than ignoring.

## Building This Skill Properly

This is exactly the gap our [Stockmarket Workshop](/businesses/stockmarket-workshop) is built to close: teaching technical analysis as one tool among several, alongside fundamental and quantitative approaches, rather than as a standalone shortcut to "beating the market."

Technical analysis is a tool for interpreting market behavior, not a guarantee of future price movement. All trading and investing in securities markets carries risk.
`,
  },
  {
    slug: "how-much-to-save-for-retirement-india",
    title: "How Much Should You Actually Save for Retirement in India?",
    metaTitle: "How Much Do You Need to Retire in India? | AKNA Capital",
    metaDescription:
      "Retirement corpus targets floating around online rarely account for inflation over 20-30 years. Here's a more grounded way to estimate your number.",
    excerpt: "Generic retirement corpus targets rarely account for how much inflation compounds over 20 or 30 years. Here's a more grounded way to estimate your number.",
    category: "Wealth Planning",
    readTime: "6 min read",
    date: "April 20, 2026",
    isoDate: "2026-04-20",
    author: DESK,
    content: `
## The Problem With Generic Retirement Numbers

"You need 5 crore to retire" is the kind of claim that spreads easily online because it sounds concrete. It also rarely holds up, because it ignores the two variables that matter most: your actual monthly expenses today, and how much those expenses will have grown by the time you retire, 20 or 30 years from now.

## Start With Today's Expense, Not a Round Number

The starting point isn't a target corpus, it's your current monthly household expense. Everything else builds from there:

- **Years to retirement.** The gap between your current age and the age you plan to retire.
- **Inflation.** What that same monthly expense will cost by the time you retire, not what it costs today.
- **Years in retirement.** How long the corpus needs to last, based on a reasonable life expectancy assumption.
- **Post-retirement return.** What your corpus can reasonably earn once you're drawing down from it, typically a more conservative mix than during your working years.

## Why the Corpus Number Often Surprises People

Inflation compounding over two or three decades produces numbers that feel unintuitive. A monthly expense of ₹50,000 today, compounded at even a modest 6% inflation over 30 years, becomes roughly ₹2.87 lakh a month by the time you retire. That reframes the entire retirement conversation: the target isn't about today's lifestyle, it's about maintaining that lifestyle at tomorrow's prices.

## The Real Risk Isn't Running Out of Money on Day One

Retirement corpus planning often focuses entirely on the number needed at retirement and stops there. The bigger risk is usually what happens in the 20+ years after that: if the corpus is invested too conservatively, inflation quietly erodes it; if invested too aggressively, market volatility right when you need to draw down can do real damage.

## Estimating Your Own Number

Rather than anchoring to a number you saw online, run your own current expense, timeline, and assumptions through our [Retirement Calculator](/market-tools/retirement-calculator) to see both the corpus required and the monthly SIP needed to get there from where you stand today.

## Where a Plan Comes Together

For larger, more complex retirement planning, particularly where a diversified mix of equity, mutual funds, and other assets needs to be coordinated over a long horizon, this is exactly what [AKNA Private Wealth](/businesses/akna-private-wealth) is built around.

This article provides an illustrative framework, not personalized financial advice. All investments in securities markets are subject to market risk, and actual outcomes will depend on real market conditions over your specific time horizon.
`,
  },
  {
    slug: "what-is-algo-trading-is-it-right-for-you",
    title: "What Is Algo-Trading and Is It Right for You?",
    metaTitle: "What Is Algo-Trading? A Practical Introduction | AKNA Capital",
    metaDescription:
      "Algo-trading automates execution of a trading strategy you already trust. Here's what it actually involves, and who it makes sense for.",
    excerpt: "Algo-trading isn't a shortcut to a strategy you don't have. It's a way to execute a strategy you already trust, consistently, without hesitation or fatigue.",
    category: "Algo-Trading",
    readTime: "5 min read",
    date: "March 3, 2026",
    isoDate: "2026-03-03",
    author: AKSHAT,
    content: `
## Algo-Trading Doesn't Give You a Strategy

The most common misconception about algo-trading is that it hands you a profitable strategy out of the box. It doesn't. Algo-trading automates the **execution** of a strategy: a defined set of rules for when to enter, add to, or exit a position. If you don't already have rules worth automating, algo-trading has nothing to work with.

## What Actually Gets Automated

- **Entry and exit rules.** Conditions based on price, indicators, or other signals that trigger a trade, checked continuously instead of manually.
- **Position sizing.** How much capital a given signal deploys, applied consistently every time instead of varying by mood or conviction on a given day.
- **Risk management.** Stop losses and exit conditions that trigger automatically, without the hesitation that often creeps in when a human is watching a live loss.

## Why Automate a Strategy You Already Trade Manually

The honest case for algo-trading isn't that it's smarter than you, it's that it's more consistent than you. A rule you'd apply 95% of the time manually gets applied 100% of the time when automated. The 5% of exceptions, usually made under stress or fatigue, are often where manual trading underperforms its own backtested rules.

## Backtesting Comes Before Automating

Before any strategy runs live, it should be tested against historical data to see how it would have performed, including through periods of high volatility. Backtesting doesn't guarantee future performance, but it does surface obvious flaws, like a strategy that only works in trending markets and falls apart in sideways ones, before real capital is on the line.

## Who This Is Actually For

Algo-trading tends to make sense for traders who already have a defined, rules based approach and want consistent execution, not for someone hoping automation will substitute for not having a strategy at all. If you're still developing your approach, our [Stockmarket Workshop](/businesses/stockmarket-workshop) is a more useful starting point than jumping straight to automation.

## Getting Started

If you already trade with a set of rules you trust, [Algo-Trading](/businesses/algo-trading) at AKNA Capital helps convert that logic into a backtested, automated strategy built on our in-house Quant Engine.

Algo-trading automates execution but does not eliminate market risk. Backtested or past performance does not guarantee future results.
`,
  },
  {
    slug: "enhanced-sip-vs-regular-sip",
    title: "Why a Regular SIP Might Not Be Enough: The Case for Enhanced SIP",
    metaTitle: "Enhanced SIP vs Regular SIP: What's the Difference? | AKNA Capital",
    metaDescription:
      "A regular SIP invests a fixed amount into a fixed fund every month. Here's how an algorithm assisted enhanced SIP approach differs, and when it might make sense.",
    excerpt: "A regular SIP is simple, but simple isn't always the same as optimal. Here's what an enhanced, algorithm assisted SIP actually changes.",
    category: "Mutual Funds",
    readTime: "5 min read",
    date: "January 12, 2026",
    isoDate: "2026-01-12",
    author: AKSHAT,
    content: `
## The Appeal of a Regular SIP

A Systematic Investment Plan, or SIP, is one of the most common ways Indian investors enter mutual funds. You pick a fund, set a fixed monthly amount, and let it run. It is simple, automatic, and removes the temptation to time the market.

That simplicity is exactly why SIPs have become so popular. But simplicity has a cost: once set up, most SIPs run untouched for years, regardless of how the fund performs relative to its category or how your own goals change.

## Where a Regular SIP Can Fall Short

- **No review mechanism.** Most investors set up a SIP once and forget it, even if the fund starts consistently underperforming its peers.
- **No goal mapping.** A SIP amount is often picked based on what feels affordable that month, not backed into a specific goal and time horizon.
- **No rebalancing.** As markets move, your asset allocation can drift significantly from where it started, without anyone flagging it.

## What Enhanced SIP Changes

Enhanced SIP keeps the core idea of a SIP, automated, disciplined monthly investing, and adds a layer of active review on top:

- **Algorithm assisted fund selection.** Instead of picking a fund once, our models continuously screen fund categories and relative performance.
- **Periodic rebalancing.** Your fund mix is reviewed and adjusted as market conditions and your goals evolve, rather than left static.
- **Goal based structuring.** Each SIP is mapped to a specific goal, whether that's a child's education, a home, or retirement, with a corresponding time horizon.

## Is This Right for You?

If you already have a SIP running and haven't reviewed it in the last year, that alone is worth a conversation. Enhanced SIP is not about chasing the newest fund; it's about making sure your mutual fund investing doesn't run on autopilot indefinitely.

You can start by estimating how your current SIP is tracking with our [SIP Calculator](/market-tools/sip-calculator), and see what a step up in contribution could do with the [SIP Step Up Calculator](/market-tools/sip-step-up-calculator). For a full review of your existing SIPs, [Mutual Fund Investing](/businesses/mutual-fund-investing) at AKNA Capital is where that conversation starts.

Mutual fund investments are subject to market risk. Please read all scheme related documents carefully before investing. Past performance of any fund or strategy is not indicative of future returns.
`,
  },
  {
    slug: "term-insurance-vs-investment-cum-insurance",
    title: "Term Insurance vs Investment-cum-Insurance: What Actually Protects Your Family",
    metaTitle: "Term Insurance vs Investment-cum-Insurance | AKNA Capital",
    metaDescription:
      "Investment-cum-insurance plans bundle protection and returns into one product. Here's why separating the two often serves your family better.",
    excerpt: "Bundling insurance and investment into one product sounds efficient. In practice, it often means you get less protection and lower returns than if you'd kept them separate.",
    category: "Insurance",
    readTime: "4 min read",
    date: "December 18, 2025",
    isoDate: "2025-12-18",
    author: DESK,
    content: `
## Two Different Jobs

Insurance and investing solve two different problems. Insurance protects your family's financial future in case something happens to you. Investing grows your wealth over time, assuming you're around to see it grow. Products that combine both, like endowment plans or ULIPs, try to do both jobs at once.

## Why Bundling Often Underperforms

- **Lower cover for the same premium.** A pure term plan gives you significantly higher life cover per rupee of premium than an investment-cum-insurance plan, because none of your premium is being diverted into an investment component.
- **Lower investment returns.** The investment portion of a bundled plan usually carries higher charges and lower flexibility than investing that same amount directly into mutual funds or equities.
- **Harder to compare.** Because the product mixes protection and returns, it becomes difficult to tell whether you're getting good value on either side.

## The Case for Keeping Them Separate

Buying a pure term insurance plan for protection, and investing separately through mutual funds, equities, or other instruments for growth, generally gives you:

- **Higher life cover** for the same monthly outflow
- **More transparency** on what you're paying for insurance versus what you're investing
- **More flexibility** to change your investment approach without affecting your insurance cover

## What This Means Practically

If you currently hold an investment-cum-insurance policy, it's worth having it reviewed, not necessarily to cancel it, but to understand exactly what cover and what returns it's actually giving you, compared to a separated approach. That review is part of what [Insurance](/businesses/insurance) at AKNA Capital helps with.

Insurance is subject to the terms and conditions of the respective insurer. Please read the policy document carefully before purchase. This article is for educational purposes and is not a recommendation to surrender any existing policy without professional advice.
`,
  },
  {
    slug: "fundamental-analysis-beyond-the-price-chart",
    title: "How to Read a Stock Beyond the Price Chart: A Beginner's Guide to Fundamental Analysis",
    metaTitle: "Fundamental Analysis for Beginners | AKNA Capital",
    metaDescription:
      "The stock price tells you what happened. Fundamental analysis tells you why it might keep happening, or stop. Here's a beginner-friendly starting point.",
    excerpt: "A rising chart tells you a stock has gone up. It doesn't tell you whether the business behind it deserves that price. Here's where to start looking.",
    category: "Equity Research",
    readTime: "6 min read",
    date: "November 5, 2025",
    isoDate: "2025-11-05",
    author: SMIT,
    content: `
## The Chart Shows the Past, Not the Business

It's easy to look at a stock chart and feel like you understand the stock. But a price chart only shows you what other people have paid for the stock, not whether the underlying business is actually healthy. That's where fundamental analysis comes in.

## Start With the Business, Not the Stock

Before opening a balance sheet, ask a simpler question: what does this company actually do, and how does it make money? If you can't explain a company's core business in two sentences, that's worth noticing before you buy the stock.

## A Few Numbers Worth Understanding

- **Revenue growth.** Is the company's top line growing, shrinking, or flat over the last several years, not just the last quarter?
- **Profit margins.** Is the company keeping a healthy share of revenue as profit, and is that share improving or eroding?
- **Debt levels.** How much debt does the company carry relative to its earnings, and can it comfortably service that debt?
- **Return ratios.** Metrics like Return on Equity (RoE) show how efficiently a company uses shareholder money to generate profit.

## Context Matters More Than a Single Number

No single number tells the full story. A high debt level might be completely normal for a capital-intensive infrastructure company and a red flag for a software company. This is why fundamental analysis is comparative: against the company's own history, and against its industry peers.

## Where Quantitative Models Fit In

This is also exactly where an in-house Quant Engine adds value: screening hundreds of stocks against these fundamentals consistently, at a scale no individual investor can realistically do by hand, before a research analyst reviews the shortlist.

## A Starting Checklist

| Area | Question to Ask |
|---|---|
| Business | Can I explain what this company does in two sentences? |
| Growth | Is revenue growing consistently, not just in one good year? |
| Profitability | Are margins stable or improving? |
| Debt | Is debt manageable relative to earnings? |

Fundamental analysis reduces guesswork, but it does not eliminate risk. If you'd rather start from ranked, already-researched recommendations than build this analysis from scratch yourself, that's exactly what [Research and Ranking](/businesses/research-ranking) delivers. All investments in securities markets are subject to market risk, and past fundamentals do not guarantee future stock performance.
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
