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
    slug: "when-is-the-right-time-to-sell-your-business",
    title: "When Is the Right Time to Sell Your Business? Five Signs to Watch",
    metaTitle: "When Should You Sell Your Business? 5 Signs to Watch | AKNA Capital",
    metaDescription:
      "Selling too early leaves value on the table. Selling too late means running the business through decline. Here are five signals that suggest it may genuinely be time.",
    excerpt: "There is no perfect calendar date to sell a business. But there are real signals, in the numbers and in your own life, worth paying attention to before you decide.",
    category: "M&A Advisory",
    readTime: "6 min read",
    date: "August 3, 2026",
    isoDate: "2026-08-03",
    author: DESK,
    content: `
## There Is No Perfect Date on a Calendar

Promoters often wait for a single obvious moment to decide it's time to sell. That moment rarely arrives cleanly. What usually exists instead is a combination of signals, some in the business and some in your own life, that together point toward a sale being the right next step. Here are five worth paying attention to.

## 1. Growth Has Plateaued Despite Your Best Efforts

If revenue and margins have flattened for two or three consecutive years despite genuine effort, a new owner with fresh capital, a different network, or complementary capabilities may be able to unlock growth that your current structure cannot.

## 2. You Are the Business

If the company cannot function for more than a few weeks without you personally, that is not just a risk for you today. It is also a valuation problem. Buyers pay less for a business overly dependent on one person, and eventually you will not be able or willing to keep filling that role.

## 3. A Competitor or Larger Player Has Approached You

An inbound approach from a strategic buyer often means the market sees value you may be underpricing internally. It is worth exploring properly, ideally alongside a broader process rather than a single negotiation, since one interested buyer rarely produces your best possible terms.

## 4. Your Personal Financial Goals Have Changed

Sometimes the business itself is healthy, but your own life has shifted. Retirement, a change in risk appetite, a desire to diversify wealth beyond one concentrated asset, or simply wanting to build something new are all legitimate reasons, and none of them require the business to be struggling first.

## 5. The Industry Itself Is Consolidating

When an industry starts consolidating around a handful of larger players, being acquired on your own terms while you still have leverage is usually a better outcome than competing against much larger, well capitalized rivals a few years later.

## Readiness Still Matters More Than Timing

Even when one or more of these signals is present, jumping straight into buyer conversations without preparation usually leaves value on the table. A rushed process with only one buyer at the table rarely produces the outcome a properly run, competitive process does.

## Where to Start

If any of this sounds familiar, our [Sell-side M&A Advisory](/services/sell-side-ma-advisory) team can help you assess readiness, benchmark a realistic valuation, and run a confidential process across multiple buyers rather than a single negotiation. You can also get a first, illustrative sense of value using our [Business Valuation Estimator](/market-tools/business-valuation-estimator).

This article is for general awareness. Every business and every promoter's circumstances are different, and any decision to sell should be made after a proper readiness and valuation assessment.
`,
  },
  {
    slug: "due-diligence-checklist-before-buying-a-business",
    title: "Due Diligence Checklist Before You Buy a Business in India",
    metaTitle: "Business Acquisition Due Diligence Checklist India | AKNA Capital",
    metaDescription:
      "Buying a business without proper due diligence is how acquirers inherit problems they never priced in. Here is what a genuinely thorough diligence process actually covers.",
    excerpt: "The seller's pitch deck shows you the business at its best. Due diligence is where you find out what it actually looks like underneath.",
    category: "M&A Advisory",
    readTime: "6 min read",
    date: "August 3, 2026",
    isoDate: "2026-08-03",
    author: DESK,
    content: `
## The Pitch Deck Is Not the Business

Every seller presents their business in its best possible light. Due diligence exists to find out what the business actually looks like once you get past the pitch deck, and to price in whatever you find before you sign, not after.

## Financial Diligence

- **Revenue quality.** Is revenue recurring and diversified across customers, or concentrated in one or two accounts that could walk away after a change in ownership?
- **Normalized earnings.** Are there one time gains, owner perks routed through the business, or unusual expenses that need adjusting to see the true underlying profitability?
- **Working capital.** How much cash is genuinely tied up in receivables and inventory, and how quickly does it actually convert back to cash?

## Legal Diligence

- **Contracts.** Do key customer and supplier contracts survive a change of ownership, or do they include clauses that let the other party exit if control changes?
- **Litigation and disputes.** Are there pending or threatened legal matters that could become your liability the day the deal closes?
- **Compliance history.** Has the business consistently met its regulatory, tax, and labor law obligations, or are there gaps that could surface later as penalties?

## Operational Diligence

- **Key person dependency.** Does the business run on documented processes, or does critical knowledge live only in the owner's head?
- **Customer concentration.** What percentage of revenue comes from the top three to five customers, and how has that concentration trended over time?
- **Technology and assets.** Are the systems, equipment, and infrastructure the business relies on genuinely fit for the next several years, or do they need significant near term investment?

## Tax Diligence

Past tax filings, any ongoing assessments, and how clean the company's tax history actually is deserve their own dedicated review, since undisclosed tax liabilities are one of the more common ways acquirers get an unpleasant surprise after closing.

## The Real Value of Diligence Is Negotiating Leverage

Diligence is not just a box ticking exercise before signing. Genuine findings, whether a customer concentration risk or a working capital gap, are also legitimate grounds to renegotiate price or structure before you commit, not just information to note and move past.

## Where This Fits

Coordinating exactly this kind of diligence, alongside independent valuation and negotiation support, is the core of what [Buy-side M&A Advisory](/services/buy-side-ma-advisory) at AKNA Capital does for acquirers. If you are still forming a view on what a target might be worth before diligence even begins, our [Business Valuation Estimator](/market-tools/business-valuation-estimator) is a reasonable starting reference point.

This checklist is illustrative and not exhaustive. Every acquisition requires diligence scoped to the specific business, sector, and deal structure involved.
`,
  },
  {
    slug: "how-to-backtest-a-trading-strategy-before-going-live",
    title: "How to Backtest a Trading Strategy Before You Go Live",
    metaTitle: "How to Backtest a Trading Strategy in India | AKNA Capital",
    metaDescription:
      "Running a strategy live without backtesting it first is how traders discover its flaws with real money on the line. Here is what a proper backtest actually involves.",
    excerpt: "A strategy that sounds good in your head can behave very differently once it meets real historical data. Backtesting is how you find that out before capital is at risk.",
    category: "Algo-Trading",
    readTime: "5 min read",
    date: "August 2, 2026",
    isoDate: "2026-08-02",
    author: AKSHAT,
    content: `
## Why Backtesting Comes Before Everything Else

Before any rule based strategy runs with real capital, it needs to be tested against historical data to see how it would actually have performed. Skipping this step means discovering a strategy's flaws with real money on the line instead of on a spreadsheet.

## What a Proper Backtest Actually Checks

- **Performance across market regimes.** Does the strategy hold up in trending markets, sideways markets, and sharp corrections, or does it only work in the exact conditions it was designed around?
- **Drawdowns, not just returns.** A strategy that returns well on paper but experiences a 40 percent drawdown along the way may not be one you can actually stick with when it happens live.
- **Realistic costs.** Brokerage, slippage, and taxes all eat into returns. A backtest that ignores them will overstate performance versus what you would actually receive.
- **Sample size.** Testing a strategy against six months of calm markets tells you very little. A longer history that includes at least one genuine downturn is far more informative.

## The Overfitting Trap

It is possible to tune a strategy's parameters so precisely that it performs beautifully on historical data purely because it has been fitted to that exact data, not because the underlying logic is sound. This is called overfitting, and it is one of the most common reasons a strategy that backtests brilliantly fails once it goes live on new data it has never seen.

## Forward Testing Before Full Capital

Between backtesting and committing full capital, running the strategy on a small allocation or in a simulated environment for a period gives you a check against overfitting, since the strategy is now being tested on data it was never tuned against.

## Backtesting Does Not Remove Risk

Even a properly backtested, forward tested strategy carries real market risk once it runs live. Backtesting reduces the chance of an obvious, avoidable flaw. It does not guarantee future performance, since markets can behave in ways no historical period fully captured.

## Where We Help

If you already trade with a defined set of rules and want them properly backtested before being converted into an automated strategy, that is exactly what [Algo-Trading](/services/algo-trading) at AKNA Capital is built around, using the same in-house Quant Engine that powers our equity research.

Algo-trading automates execution but does not eliminate market risk. Backtested or simulated performance does not guarantee future results.
`,
  },
  {
    slug: "what-to-do-with-your-portfolio-when-the-market-crashes",
    title: "What Should You Do With Your Portfolio When the Market Crashes?",
    metaTitle: "What to Do When the Stock Market Crashes | AKNA Capital",
    metaDescription:
      "Market crashes trigger the same instinct in almost every investor: sell now, think later. Here is a calmer, more useful framework for what to actually do.",
    excerpt: "The instinct in a crash is to sell first and think later. Here is a calmer framework for deciding what your portfolio actually needs from you right now.",
    category: "Wealth Planning",
    readTime: "5 min read",
    date: "August 2, 2026",
    isoDate: "2026-08-02",
    author: PRAJVI,
    content: `
## The Instinct Almost Everyone Has

When markets fall sharply, the instinct is nearly universal: sell now, figure out the rest later. It is also usually the wrong instinct, because it converts a temporary paper loss into a permanent, realized one at exactly the worst possible time.

## Start by Separating Money by Time Horizon

The single most useful question during a crash is not "what should I do with my portfolio" as a whole, but "which parts of my portfolio actually need this money soon."

- **Money needed within the next one to two years** should not have been heavily exposed to equities in the first place, and if it was, that is a planning conversation for after the immediate volatility passes.
- **Money with a genuine five year or longer horizon** has time to recover, and history shows equity markets have generally done so from past downturns, though this is not a guarantee about any future decline.

## Resist Checking Your Portfolio Daily

Watching a falling portfolio daily amplifies anxiety without giving you any new decision useful information. If your allocation was appropriate for your goals before the crash, it is very likely still appropriate during it.

## A Crash Can Be an Opportunity, Not Just a Threat

For money with a genuinely long horizon, a market fall can be a chance to invest at lower valuations, whether through a lumpsum deployment or by continuing a SIP through the downturn rather than pausing it. Pausing a SIP specifically during a fall means missing exactly the period when you are buying units at a discount.

## What Is Actually Worth Reviewing

- Whether your original asset allocation still matches your risk appetite, not just your return expectations
- Whether any individual stock or fund in your portfolio has fundamental, business level problems, as opposed to simply moving down with the broader market
- Whether you have an emergency fund separate from your investments, so a crash never forces you to sell equities at a low point purely to cover near term expenses

## Where a Plan Helps

Having a portfolio built around your specific goals and time horizon in the first place is what makes a crash easier to sit through calmly. This is a core part of how [AKNA Private Wealth](/services/akna-private-wealth) is structured, and our [Research and Ranking](/services/research-ranking) recommendations always come with the reasoning behind them, so you can judge whether a fall is a business problem or simply a market wide one.

All investments in securities markets are subject to market risk. Past market recoveries do not guarantee future outcomes.
`,
  },
  {
    slug: "how-much-life-insurance-cover-do-you-actually-need",
    title: "How Much Life Insurance Cover Do You Actually Need?",
    metaTitle: "How Much Term Insurance Cover Do You Need in India | AKNA Capital",
    metaDescription:
      "A flat multiple of your salary is not a real answer. Here is a more grounded way to calculate the term insurance cover your family would actually need.",
    excerpt: "'Ten times your salary' is not really an answer. Here is a more grounded way to work out the term cover your family would actually need.",
    category: "Insurance",
    readTime: "5 min read",
    date: "August 1, 2026",
    isoDate: "2026-08-01",
    author: DESK,
    content: `
## Why "Ten Times Your Salary" Falls Short

A common rule of thumb says your term cover should be roughly ten times your annual income. It is easy to remember, but it ignores your actual liabilities, dependents, and existing assets, all of which matter far more than a flat multiple of salary.

## Start With What Your Family Would Actually Need to Replace

Term insurance exists to replace your financial contribution to your family if you are no longer around to provide it. That means the real calculation starts with what your family would need, not a percentage of what you currently earn.

## The Building Blocks of a Real Number

- **Outstanding loans.** Home loans, car loans, or any other debt that would otherwise fall on your family to repay.
- **Years of dependent expenses.** How many years your spouse, children, or parents would need financial support, multiplied by your family's realistic annual expenses.
- **Future goals.** Children's education and marriage costs, adjusted for inflation between now and when those goals actually arrive.
- **Existing assets.** Savings, investments, and any existing cover that would already be available to your family, which reduces how much additional cover you need.

## A Simple Way to Frame the Math

Add up outstanding loans, the future cost of your children's education and other major goals, and enough of a corpus to replace your income for the years your family would need support. Then subtract your existing liquid assets and any current cover. What remains is a far more realistic term cover target than a flat multiple of salary.

## Cover Needs Change Over Time

Your ideal cover is not static. It typically peaks in your thirties and forties, when loans and dependent years are both at their highest, and can be reviewed downward later as loans get repaid and your investment corpus grows. It is worth revisiting every few years, not setting once and forgetting.

## A Note on Timing

Premiums are generally lower the younger and healthier you are when you buy, so delaying a cover decision usually costs more later, not less.

## Where to Get This Right

Working through this calculation properly, rather than defaulting to a rule of thumb, is exactly what [Insurance](/services/insurance) at AKNA Capital helps with, alongside an honest, unbiased comparison of plans across insurers.

Insurance is subject to the terms and conditions of the respective insurer. Please read the policy document carefully before purchase.
`,
  },
  {
    slug: "nps-vs-ppf-vs-elss-which-tax-saving-investment-fits-you",
    title: "NPS vs PPF vs ELSS: Which Tax Saving Investment Actually Fits You?",
    metaTitle: "NPS vs PPF vs ELSS: Best Tax Saving Investment | AKNA Capital",
    metaDescription:
      "All three save tax under the old regime, but they lock up your money very differently and suit different goals. Here is how to actually choose between them.",
    excerpt: "NPS, PPF, and ELSS all save tax, but they lock up your money for very different lengths of time and suit very different goals. Here is how to actually choose.",
    category: "Wealth Planning",
    readTime: "6 min read",
    date: "August 1, 2026",
    isoDate: "2026-08-01",
    author: DESK,
    content: `
## Three Popular Options, Three Different Purposes

NPS, PPF, and ELSS are three of the most commonly discussed tax saving options under the old tax regime in India. They get compared constantly, but they are built for genuinely different purposes, and the right one for you depends less on which offers the best return and more on what you actually need the money to do.

## Public Provident Fund

- **Lock in period:** 15 years, with limited partial withdrawal allowed after year seven.
- **Returns:** Government set and revised periodically, considered safe rather than high growth.
- **Best suited for:** Investors who want a guaranteed, government backed option as one part of a long term, safety focused allocation, not their entire retirement plan.

## National Pension System

- **Lock in period:** Until retirement age, with partial withdrawal allowed only for specific circumstances.
- **Returns:** Market linked, since your contribution is invested across equity, corporate debt, and government securities based on your chosen allocation.
- **Best suited for:** Investors specifically building a retirement corpus who are comfortable with a long lock in and some market linked volatility along the way.

## Equity Linked Savings Scheme

- **Lock in period:** Three years, the shortest of the three by a wide margin.
- **Returns:** Fully market linked, since ELSS funds invest predominantly in equities.
- **Best suited for:** Investors who want tax saving with meaningfully higher return potential and are comfortable with equity market volatility over just a three year window.

## The Real Decision Factor Is Your Time Horizon and Purpose

Rather than asking which of the three has historically returned the most, a more useful question is what the money is actually for. Retirement specific savings suit NPS. A safe, guaranteed component of a long term plan suits PPF. Tax saving with equity exposure and comparatively faster access suits ELSS. Many investors reasonably use a combination of all three rather than picking just one.

## Where This Fits Into a Broader Plan

Tax saving decisions work best when they are made as part of your overall goal based investment plan, not in isolation every March. This is exactly the kind of coordination [Mutual Fund Investing](/services/mutual-fund-investing) and, for larger portfolios, [AKNA Private Wealth](/services/akna-private-wealth) are built around.

This article is for general understanding of tax saving instruments and is not personalized tax advice. Please consult a tax professional for guidance specific to your situation, and note that tax rules are subject to change.
`,
  },
  {
    slug: "how-our-in-house-quant-engine-actually-picks-stocks",
    title: "How an In House Quant Engine Actually Picks Stocks",
    metaTitle: "How Quant Models Screen and Pick Stocks | AKNA Capital",
    metaDescription:
      "Quant investing sounds like a black box from the outside. Here is a plain-English walkthrough of what a quant engine is actually doing when it screens stocks.",
    excerpt: "Quant investing has a reputation for being an opaque black box. Here is a plain-English look at what a quant engine is actually doing under the hood.",
    category: "Market Education",
    readTime: "6 min read",
    date: "July 31, 2026",
    isoDate: "2026-07-31",
    author: AKSHAT,
    content: `
## Quant Sounds More Mysterious Than It Is

The word quantitative tends to make investing sound like an opaque black box available only to hedge funds. In practice, quant investing is simply the systematic, data driven application of rules that a skilled analyst might apply manually, but done consistently across hundreds or thousands of stocks instead of a handful.

## What a Quant Engine Actually Screens For

- **Fundamental factors.** Revenue growth, profit margins, debt levels, and return ratios, applied consistently across the entire universe of stocks rather than one company at a time.
- **Technical factors.** Price trend, momentum, and volume patterns, which flag whether a fundamentally interesting stock is also seeing genuine market participation.
- **Quantitative factors.** Statistical relationships and patterns in the data itself, built and tested against historical performance rather than a single analyst's intuition.

## Why Screening at Scale Actually Matters

No individual analyst can manually evaluate every listed company against a consistent set of criteria every single day. A quant engine can, which means opportunities that might otherwise be missed simply because nobody got around to looking at that particular stock this month are far less likely to slip through.

## The Analyst Still Has the Final Say

A quant engine narrows thousands of stocks down to a manageable, ranked shortlist. It does not replace human judgment. Our research team reviews that shortlist, applies context the model cannot fully capture, sector dynamics, management quality, recent developments, and only then does a recommendation reach you.

## What Quant Models Are Not Good At

Quant models are built on historical data and defined rules. They can miss genuinely new situations that do not resemble anything in their training history, and they have no opinion on qualitative factors like management integrity or an emerging competitive threat that has not yet shown up in the numbers. This is exactly why the analyst review layer on top of the model matters.

## Where This Shows Up in Our Work

Our in-house Quant Engine, built on 30 plus algorithms, underpins both [Research and Ranking](/services/research-ranking) and [Algo-Trading](/services/algo-trading), screening the market systematically before our research team applies its own judgment on top.

Quantitative models are a tool for identifying opportunities, not a guarantee of returns. All investments in securities markets are subject to market risk.
`,
  },
  {
    slug: "common-mistakes-first-time-investors-make-in-the-stock-market",
    title: "Common Mistakes First Time Investors Make in the Stock Market",
    metaTitle: "Common Beginner Mistakes in Stock Market Investing | AKNA Capital",
    metaDescription:
      "Most losses new investors take are not from a single bad stock pick. They come from a handful of repeated, avoidable behavioral mistakes. Here they are.",
    excerpt: "Most of the damage new investors take does not come from one bad stock pick. It comes from a handful of repeated, entirely avoidable behavioral mistakes.",
    category: "Market Education",
    readTime: "6 min read",
    date: "July 31, 2026",
    isoDate: "2026-07-31",
    author: PRAJVI,
    content: `
## The Damage Is Usually Behavioral, Not Analytical

New investors often assume that losing money in the stock market comes down to picking the wrong stock. In practice, a handful of repeated behavioral mistakes cause far more damage over time than any single poor pick ever could.

## Investing Without a Clear Goal

Buying stocks because "everyone is talking about it" rather than because it fits a specific financial goal and time horizon leads to a portfolio that is really just a collection of unrelated bets, with no coherent plan behind any of it.

## Chasing Past Performance

A stock or fund that has already run up significantly is not automatically a good investment going forward. Buying purely because something has already performed well is one of the most common ways new investors end up buying near a peak.

## No Diversification, or the Wrong Kind

Owning twenty stocks that all move together because they sit in the same sector is not real diversification, even though it feels like it based on the count alone. Genuine diversification spreads risk across sectors, market capitalizations, and sometimes asset classes.

## Panic Selling During Normal Volatility

Markets fall regularly as a completely normal part of investing. Selling in a panic during an ordinary correction, only to buy back in later at a higher price, is one of the most reliable ways to convert a temporary paper loss into a permanent, realized one.

## Ignoring Fees and Taxes

Frequent trading racks up brokerage costs and short term capital gains tax that quietly erode returns, even when the underlying stock picks were reasonable ones.

## Not Reviewing the Portfolio at All

The opposite mistake is just as common. Setting up a portfolio once and never reviewing it means holding onto underperforming stocks or fully outdated goals for years without noticing.

## The Fix Is Usually Structure, Not Smarter Stock Picks

Most of these mistakes are solved less by finding better individual stocks and more by having a structured process: a clear goal, a diversified plan, and periodic, unemotional review.

## Where to Build This Properly

If you are early in your investing journey and want to build genuine understanding rather than simply following recommendations, our [Stockmarket Workshop](/services/stockmarket-workshop) teaches the fundamental, technical, and quantitative frameworks our own research team actually uses. If you would rather start from research backed recommendations, [Research and Ranking](/services/research-ranking) is built for exactly that.

All investments in securities markets are subject to market risk. Past mistakes are common and avoidable with a more structured approach, but no approach eliminates risk entirely.
`,
  },
  {
    slug: "large-cap-vs-mid-cap-vs-small-cap-stocks-explained",
    title: "Large Cap vs Mid Cap vs Small Cap Stocks: What Is the Real Difference?",
    metaTitle: "Large Cap vs Mid Cap vs Small Cap Stocks Explained | AKNA Capital",
    metaDescription:
      "Market capitalization tells you a company's size, but the real differences that matter to investors are risk, liquidity, and growth potential. Here is how they compare.",
    excerpt: "Market cap tells you a company's size. What actually matters to your portfolio is how differently large, mid, and small cap stocks behave in terms of risk and growth.",
    category: "Market Education",
    readTime: "5 min read",
    date: "July 30, 2026",
    isoDate: "2026-07-30",
    author: SMIT,
    content: `
## Market Capitalization Is Just a Starting Point

Market capitalization, a company's share price multiplied by its total number of shares, is how stocks get grouped into large cap, mid cap, and small cap categories. But the size label itself is less important than the real differences in risk, liquidity, and growth potential that tend to come with it.

## Large Cap Stocks

These are typically the most established, well known companies in the market. They generally offer more stability and liquidity, along with a longer track record to evaluate, but their sheer size also means dramatic growth is usually harder to come by compared to smaller companies.

## Mid Cap Stocks

Mid cap companies sit between the stability of large caps and the higher growth potential of small caps. They often still have meaningful room to grow market share or expand into new markets, while generally carrying a more established track record and more predictable earnings than small caps.

## Small Cap Stocks

Small cap companies carry the highest growth potential of the three categories, since a relatively modest amount of new business can move their overall numbers significantly. That same characteristic also makes them the most volatile and often the least liquid, meaning prices can swing sharply and buying or selling in size can itself move the price.

## Why This Matters for Portfolio Construction

Concentrating a portfolio entirely in small caps chases growth but takes on outsized volatility and liquidity risk, especially during a market downturn when smaller stocks often fall harder and recover more slowly. Concentrating entirely in large caps sacrifices growth potential for stability. Most well constructed portfolios deliberately blend all three, weighted according to the investor's own risk appetite and time horizon.

## Time Horizon Changes the Right Mix

A longer investment horizon generally allows for a larger allocation to mid and small cap stocks, since there is more time to ride out their higher volatility. A shorter horizon typically calls for a larger large cap allocation, prioritizing stability over maximum growth potential.

## Where This Fits Into Our Research

Our [Research and Ranking](/services/research-ranking) recommendations are ranked with market capitalization and sector context included, precisely so you understand not just what to buy, but where it fits within a properly diversified portfolio.

All investments in securities markets are subject to market risk, and smaller companies in particular can experience significant price volatility.
`,
  },
  {
    slug: "how-to-build-an-emergency-fund-before-you-start-investing",
    title: "How to Build an Emergency Fund Before You Start Investing",
    metaTitle: "How to Build an Emergency Fund in India | AKNA Capital",
    metaDescription:
      "Investing before you have an emergency fund often means selling investments at the worst possible time when an unplanned expense hits. Here is how to size and build one first.",
    excerpt: "Without an emergency fund, an unplanned expense forces you to sell investments at the worst possible time. Here is how much you actually need, and where to keep it.",
    category: "Wealth Planning",
    readTime: "5 min read",
    date: "July 30, 2026",
    isoDate: "2026-07-30",
    author: DESK,
    content: `
## The Step That Often Gets Skipped

It is tempting to jump straight into SIPs and stock picks, but skipping an emergency fund means an unplanned expense, a medical bill, a sudden job loss, an urgent repair, will likely force you to sell investments at exactly the wrong time, possibly at a loss, purely to raise cash quickly.

## How Much Is Actually Enough

A commonly used range is three to six months of essential monthly expenses, though the right number depends on your specific situation.

- **Salaried with stable income:** Closer to three to four months of expenses is often reasonable.
- **Variable income, self employed, or the sole earner in your household:** Six months or more is generally more appropriate, given the higher uncertainty around when the next paycheck actually arrives.
- **Existing dependents or health conditions requiring ongoing care:** Consider building toward the higher end of the range, or beyond it.

## What Counts as an Essential Expense

Rent or loan EMIs, groceries, utilities, insurance premiums, and other genuinely non negotiable monthly costs. Discretionary spending, dining out, entertainment, and vacations, does not need to be part of this calculation, since those are expenses you could pause if needed.

## Where to Actually Keep It

An emergency fund needs to be liquid and stable, not invested for growth. A high interest savings account, a sweep in fixed deposit, or a liquid mutual fund are all reasonable choices. What matters most is that the money is accessible within a day or two without any risk of a market linked loss right when you need it.

## Build It Before, Not Alongside, Aggressive Investing

It is generally more sound to build a full emergency fund before committing meaningfully to equity investing, or at minimum to build both in parallel with a clear priority on the emergency fund. Without it, market volatility and personal financial shocks can end up hitting you at the exact same time.

## Where This Fits Into a Broader Plan

Sizing an emergency fund correctly, alongside a genuine investment plan mapped to your actual goals, is part of what [AKNA Private Wealth](/services/akna-private-wealth) and [Mutual Fund Investing](/services/mutual-fund-investing) at AKNA Capital help you get right from the start.

This article is for general educational purposes. The right emergency fund size depends on your specific income stability, dependents, and existing obligations.
`,
  },
  {
    slug: "what-is-a-demat-account-and-how-to-open-one-in-india",
    title: "What Is a Demat Account and How Do You Open One in India?",
    metaTitle: "What Is a Demat Account? How to Open One in India | AKNA Capital",
    metaDescription:
      "You cannot buy or sell shares in India without a demat account. Here is what it actually does, what documents you need, and what to check before choosing a provider.",
    excerpt: "You cannot legally hold or trade shares in India without a demat account. Here is what it actually does and how to open one without overcomplicating it.",
    category: "Equity Research",
    readTime: "5 min read",
    date: "July 29, 2026",
    isoDate: "2026-07-29",
    author: SMIT,
    content: `
## What a Demat Account Actually Does

A demat, or dematerialized, account holds your shares and other securities in electronic form, the same way a bank account holds your money digitally rather than as physical cash. You cannot legally buy or hold shares listed on an Indian stock exchange without one.

## Demat Account vs Trading Account

These two are related but do different jobs. A trading account is what you use to place buy and sell orders on the exchange. A demat account is where the shares you have bought actually get held once the trade settles. Most brokers today open both together as a linked pair.

## Documents You Typically Need

- **PAN card**, which is mandatory for any securities market transaction in India
- **Proof of identity and address**, such as an Aadhaar card, passport, or voter ID
- **A canceled cheque or recent bank statement**, to link your bank account for payments and payouts
- **A passport sized photograph and signature**, for KYC verification

Most brokers now complete this entire process online, with video based KYC, so opening an account typically takes well under an hour of actual effort.

## What to Actually Check Before Choosing a Provider

- **Brokerage and account maintenance charges**, which vary meaningfully between providers and add up over time
- **Platform reliability**, since a platform that lags or crashes during volatile markets is a real cost, not just an inconvenience
- **Customer support quality**, particularly for anything involving fund transfers or account issues
- **Research and tool access**, if you want more than a bare bones order placement screen

## A Demat Account Is a Tool, Not a Strategy

Opening a demat account is simply the administrative first step. It does not tell you what to buy, when to buy it, or how much of your surplus should go into equities in the first place. That decision still needs a proper research process behind it.

## Where to Go From Here

Once your account is open, our [Research and Ranking](/services/research-ranking) service gives you ranked, research backed stock recommendations to actually act on, rather than starting from a blank screen. If you would rather build the skill to evaluate stocks yourself first, our [Stockmarket Workshop](/services/stockmarket-workshop) is a good starting point.

This article is for general educational purposes and does not endorse any specific broker or platform. All investments in securities markets are subject to market risk.
`,
  },
  {
    slug: "old-tax-regime-vs-new-tax-regime-which-should-you-choose",
    title: "Old Tax Regime vs New Tax Regime: Which Should You Choose?",
    metaTitle: "Old vs New Tax Regime in India: Which Saves You More | AKNA Capital",
    metaDescription:
      "The right regime depends entirely on how many deductions you actually use, not which one sounds simpler. Here is a practical way to decide between them.",
    excerpt: "There is no universally correct regime. The right one for you depends almost entirely on how many deductions and exemptions you actually use.",
    category: "Wealth Planning",
    readTime: "6 min read",
    date: "July 29, 2026",
    isoDate: "2026-07-29",
    author: DESK,
    content: `
## There Is No Universally Correct Answer

Every tax season brings the same question: old regime or new regime. The honest answer is that neither is universally better. The right choice depends almost entirely on how many deductions and exemptions you actually claim today.

## What the Old Regime Offers

The old regime allows a wide range of deductions and exemptions, including under sections such as 80C for instruments like ELSS, PPF, and life insurance premiums, 80D for health insurance, HRA for salaried employees paying rent, and the home loan interest deduction, among others. It generally rewards investors who are already actively using these instruments.

## What the New Regime Offers

The new regime offers lower slab rates but removes most of the deductions and exemptions available under the old regime. It tends to suit taxpayers who do not have significant 80C investments, do not pay meaningful rent or home loan interest, or simply prefer a simpler filing process without tracking multiple deduction categories.

## A Practical Way to Decide

- **List out every deduction you would realistically claim** under the old regime this year, including 80C, 80D, HRA, and home loan interest if applicable.
- **Estimate your tax liability under both regimes** using your actual income and that deduction total, not a generic example.
- **Compare the two numbers directly.** If your total deductions are substantial, the old regime often works out lower. If they are minimal, the new regime's lower slab rates often win.

## It Is Not a Permanent, One Time Decision

Salaried individuals can generally choose between the two regimes each financial year based on what suits them that year, since your deduction usage can change as your investments, loans, and life circumstances change. It is worth re running this comparison annually rather than assuming last year's choice still holds.

## Where This Fits Into a Broader Plan

Whether the old regime makes sense for you often comes down to whether you are already investing in 80C eligible instruments like ELSS as part of a genuine financial plan, not purely as a tax move. This is exactly the kind of decision [Mutual Fund Investing](/services/mutual-fund-investing) at AKNA Capital can help you think through as part of your broader goals.

This article is for general educational purposes and is not personalized tax advice. Tax rules and slab rates are subject to change; please consult a tax professional or chartered accountant for guidance specific to your income and situation.
`,
  },
  {
    slug: "how-much-should-you-invest-every-month-based-on-your-income",
    title: "How Much Should You Actually Invest Every Month Based on Your Income?",
    metaTitle: "How Much to Invest Monthly Based on Your Salary | AKNA Capital",
    metaDescription:
      "There is no single correct percentage that works for everyone. Here is a practical framework for deciding how much of your income should go into a SIP each month.",
    excerpt: "There is no single magic percentage of income everyone should invest. Here is a more useful framework for arriving at your own number.",
    category: "Mutual Funds",
    readTime: "5 min read",
    date: "July 28, 2026",
    isoDate: "2026-07-28",
    author: AKSHAT,
    content: `
## Why a Flat Percentage Rarely Works

Generic advice often suggests investing a fixed percentage of income, commonly somewhere around 20 percent. It is a reasonable starting reference point, but your actual number depends heavily on your expenses, existing obligations, and how far away your goals actually are.

## Start With What Is Already Committed

Before deciding an investment amount, account for essential expenses, any existing loan EMIs, and your emergency fund contribution if it is not yet fully built. What remains after these is your genuine investable surplus, not your entire take home income.

## Work Backward From Your Goals, Not Forward From a Percentage

A more reliable approach than picking a flat percentage is working backward from your specific goals. If you know the future cost of a goal, your time horizon, and an assumed rate of return, you can calculate the actual monthly SIP required to reach it, rather than guessing at a round number and hoping it is enough.

Our [SIP Calculator](/market-tools/sip-calculator) and [Education Calculator](/market-tools/education-calculator) let you run this calculation directly for retirement, a child's education, or any other specific goal.

## A Reasonable Starting Range If You Are Unsure

If you do not yet have specific goals mapped out and just want a sensible starting point, investing somewhere between 15 and 30 percent of your take home income is a commonly used range, adjusted up if your goals are ambitious or your horizon is short, and down if you are also aggressively paying off debt or building your emergency fund.

## Increase It as Your Income Grows

A SIP amount fixed once and never revisited quietly loses ground to inflation and to your own rising income over time. Increasing your monthly investment each time your income rises, even by a modest percentage, compounds meaningfully over a long horizon. Our [SIP Step Up Calculator](/market-tools/sip-step-up-calculator) shows exactly how much difference this makes.

## The Real Risk Is Not Investing Too Little Early, It Is Never Reviewing the Number

The specific starting figure matters less than actually starting and then reviewing it periodically. A modest SIP that grows with your income over a decade typically outperforms a larger one that gets set once and forgotten.

## Where to Get This Right for Your Situation

Mapping an actual investment amount to your specific goals, rather than guessing at a round number, is what [Mutual Fund Investing](/services/mutual-fund-investing) at AKNA Capital is built around.

Mutual fund investments are subject to market risk. Please read all scheme related documents carefully before investing.
`,
  },
  {
    slug: "best-investment-options-in-india-for-beginners",
    title: "Best Investment Options in India for Beginners",
    metaTitle: "Best Investment Options for Beginners in India | AKNA Capital",
    metaDescription:
      "Starting to invest can feel overwhelming with so many options available. Here is a clear, practical overview of where most beginners in India should actually start.",
    excerpt: "With so many investment options available, it is easy for a beginner to freeze before starting at all. Here is a clear, practical starting point.",
    category: "Wealth Planning",
    readTime: "6 min read",
    date: "July 28, 2026",
    isoDate: "2026-07-28",
    author: DESK,
    content: `
## The Real Risk Is Not Starting at All

With mutual funds, direct stocks, PPF, NPS, fixed deposits, and gold all competing for attention, it is easy for a first time investor to freeze from overwhelm rather than actually start. The specific instrument you begin with matters far less than simply beginning with a plan.

## Mutual Funds Through a SIP

For most beginners, a Systematic Investment Plan into mutual funds is one of the more accessible starting points. It allows you to start with a modest monthly amount, benefits from professional fund management, and builds the habit of disciplined, automated investing from day one.

## Direct Equity

Investing directly in individual stocks offers higher potential returns but requires genuine research, either your own or research backed guidance, along with the temperament to sit through individual stock volatility, which is typically higher than a diversified mutual fund.

## Public Provident Fund

A safe, government backed option suited to a portion of your portfolio where capital protection matters more than growth, though its 15 year lock in means it should not be your only savings vehicle.

## National Pension System

Specifically built for retirement savings, combining market linked growth with tax benefits, appropriate for money you genuinely will not need before retirement age.

## Fixed Deposits

Useful for near term goals or as part of your emergency fund, offering predictable, guaranteed returns, though typically lower than what equity markets have historically delivered over long periods.

## Gold

Often used as a small portfolio diversifier rather than a primary investment, since it tends to behave differently from equities during periods of market stress.

## A Practical Starting Sequence

1. **Build your emergency fund first**, in a liquid, low risk instrument.
2. **Start a SIP into mutual funds** mapped to a specific goal and time horizon, even if the amount is modest to begin with.
3. **Layer in direct equity or additional instruments** as your knowledge, surplus, and comfort with volatility grow.

## Where to Start This Conversation

If you are unsure where to begin, [Mutual Fund Investing](/services/mutual-fund-investing) is often the most accessible entry point at AKNA Capital, and our [Stockmarket Workshop](/services/stockmarket-workshop) is there if you want to build direct equity understanding alongside it.

All investments in securities markets, and mutual funds in particular, are subject to market risk. Please read all scheme related documents carefully before investing.
`,
  },
  {
    slug: "how-to-choose-the-right-sebi-registered-research-analyst",
    title: "How to Choose the Right SEBI Registered Research Analyst in India",
    metaTitle: "How to Choose a SEBI Registered Research Analyst | AKNA Capital",
    metaDescription:
      "Not every source of stock recommendations is regulated or accountable. Here is what to actually check before trusting a research analyst with your investment decisions.",
    excerpt: "Not every voice giving out stock tips is regulated or accountable for what they recommend. Here is what to actually verify before you trust one with your money.",
    category: "Equity Research",
    readTime: "5 min read",
    date: "July 27, 2026",
    isoDate: "2026-07-27",
    author: DESK,
    content: `
## Not Every Source of Stock Advice Is Regulated

Stock recommendations circulate constantly, on social media, in forwarded messages, and through unregistered "advisors" with no formal accountability. A SEBI Registered Research Analyst operates under a genuinely different, regulated standard, and knowing what to check helps you tell the difference.

## Verify the SEBI Registration Directly

Every legitimate Research Analyst has a SEBI registration number, and this can be verified directly on SEBI's official website rather than simply taking a claim at face value. This single check filters out a significant amount of unregistered, unaccountable advice.

## Check Their Actual Process, Not Just Their Track Record

A track record alone can be selectively presented. What matters more is whether the analyst can explain their actual process: what research goes into a recommendation, what data and models are used, and what would change their view on a stock. A research led process that you can understand and evaluate is worth more than an unverifiable list of past winners.

## Understand How They Are Compensated

A research analyst's fee structure should be transparent and should not depend on you executing a specific number of trades, which can create an incentive to recommend excessive trading rather than what is actually in your interest.

## Look for Genuine Risk Disclosure

Legitimate research consistently discloses that all investments in securities markets are subject to market risk, and never guarantees returns. Any source promising guaranteed or unusually high returns with no mention of risk is a significant warning sign, regardless of how confident it sounds.

## Ask What Happens After the Recommendation

A one time stock tip with no follow up is very different from an ongoing research relationship that includes entry and exit guidance and regular portfolio review. The latter is a far more genuine research service than the former.

## What This Looks Like at AKNA Capital

AKNA Capital is a SEBI Registered Research Analyst, registration INH000023515, and our [Research and Ranking](/services/research-ranking) service is built around exactly this kind of transparent, explainable, in-house Quant Engine backed process, with entry and exit guidance and regular portfolio reviews rather than one off tips.

All investments in securities markets are subject to market risk. Past performance of any recommendation does not guarantee future results.
`,
  },
  {
    slug: "how-much-is-my-business-worth-valuation-guide",
    title: "How Much Is My Business Worth? A Plain-English Guide to Business Valuation",
    metaTitle: "How to Value a Business in India: A Plain-English Guide | AKNA Capital",
    metaDescription:
      "Business valuation doesn't have to be a black box. Here's how the EBITDA multiple method actually works, and why the same business can be worth very different amounts depending on who's asking.",
    excerpt: "Every promoter eventually asks this question, and the honest answer is: it depends on who's asking, and why. Here's how valuation actually works, in plain English.",
    category: "M&A Advisory",
    readTime: "6 min read",
    date: "July 26, 2026",
    isoDate: "2026-07-26",
    author: DESK,
    content: `
## The Question Every Promoter Eventually Asks

"What is my business actually worth?" It sounds like it should have one clean answer. It doesn't. The same business can be worth meaningfully different amounts depending on whether you're valuing it for a bank loan, a sale to a competitor, a private equity round, or an IPO. What changes isn't the business, it's who's asking, and why.

## The Method Most People Start With: EBITDA Multiples

The most common starting point, and the one behind our own [Business Valuation Estimator](/market-tools/business-valuation-estimator), is the EBITDA multiple method:

1. **Calculate EBITDA** — earnings before interest, taxes, depreciation, and amortization. This strips out financing and accounting choices to show the business's core operating profit.
2. **Apply an industry multiple** — buyers and investors pay a multiple of EBITDA based on what similar companies in your sector have recently sold for or trade at.
3. **Arrive at Enterprise Value** — EBITDA × multiple = a rough value for the whole business, debt and all.
4. **Subtract net debt** to get Equity Value — what's actually left for the shareholders once debt is paid off.

## Why the "Multiple" Moves So Much

A restaurant chain and a software company with identical EBITDA can have wildly different multiples. Recurring revenue, customer concentration, growth rate, and how replaceable the founder is in day-to-day operations all move the multiple, sometimes by 2-3x in either direction. This is exactly why a generic "industry average multiple" you find online is a starting reference point, not a number to take to a negotiation.

## What This Method Doesn't Capture

EBITDA multiples give you a fast, defensible starting estimate, but they don't account for:

- **Working capital quality** — how much cash is actually tied up in receivables and inventory
- **Customer concentration** — a business dependent on two clients for 60% of revenue is riskier than one with a broad base, even at identical EBITDA
- **One-off items** — a bumper year from a single large contract can inflate EBITDA in a way that won't repeat

## When a Rough Estimate Is Enough, and When It Isn't

A quick EBITDA-multiple estimate is genuinely useful for an early "is this even worth exploring" conversation, whether that's about selling, raising a pre-IPO round, or being approached by an acquirer. It is not a substitute for a proper valuation once you're actually negotiating with a real counterparty, at which point comparable transactions, discounted cash flow analysis, and diligence findings all need to come into the picture.

## Where to Go From Here

If you're exploring a full or partial exit, our [Sell-side M&A Advisory](/services/sell-side-ma-advisory) team benchmarks valuation against real comparable transactions before any buyer conversation starts. If you're on the other side of the table considering an acquisition, [Buy-side M&A Advisory](/services/buy-side-ma-advisory) does the same work to make sure you don't overpay. And if a listing is the eventual goal rather than a sale, [Pre-IPO Advisory](/services/pre-ipo-advisory) is where that conversation should start, 12 to 24 months out.

This article is for general understanding and is not a substitute for a professional valuation. Actual transaction value depends on diligence findings, negotiation, and market conditions at the time of a deal.
`,
  },
  {
    slug: "sme-ipo-vs-main-board-ipo-which-fits",
    title: "SME IPO vs Main-Board IPO: Which Listing Route Fits Your Company?",
    metaTitle: "SME IPO vs Main-Board IPO in India: Key Differences | AKNA Capital",
    metaDescription:
      "SME IPO on BSE SME/NSE Emerge or a Main-Board IPO on BSE/NSE? Here's how eligibility, cost, and investor base actually differ, and how to decide which is right for your company.",
    excerpt: "Both routes get you listed and give you access to public capital. But they differ enough in eligibility, cost, and investor base that picking the wrong one can cost you a year of preparation.",
    category: "IPO Advisory",
    readTime: "6 min read",
    date: "July 21, 2026",
    isoDate: "2026-07-21",
    author: DESK,
    content: `
## Two Doors to the Same Room

Both an SME IPO and a Main-Board IPO get a company listed on a public stock exchange and give it access to public capital. But the doors look quite different: eligibility criteria, minimum issue size, compliance intensity, and the investor base you'll actually attract vary enough that choosing the wrong one can cost a year of misdirected preparation.

## What Separates the Two Routes

- **Eligibility.** Main-Board IPOs (BSE/NSE) carry higher thresholds on net worth, net tangible assets, and profitability track record. SME IPOs (BSE SME/NSE Emerge) have lighter eligibility criteria, designed specifically for smaller, growing companies.
- **Typical issue size.** SME IPOs commonly range from roughly ₹50-500 crore; Main-Board issues typically start well above that.
- **Compliance intensity.** Main-Board listings carry heavier ongoing disclosure and governance requirements. SME listings are lighter, though not light, a SEBI registered merchant banker is mandatory either way.
- **Investor base and liquidity.** Main-Board stocks generally see broader institutional participation and daily liquidity. SME stocks trade in a narrower band, with a market-maker mechanism to support liquidity, and a higher minimum application (lot) size that limits retail participation.
- **Migration.** SEBI provides a defined path for SME-listed companies to migrate to the Main-Board once they meet the relevant eligibility criteria at that time.

## A Framework, Not a Rule of Thumb

Rather than picking by revenue size alone, the honest decision framework weighs:

1. **Where you sit against Main-Board eligibility today**, not where you'll be in two years
2. **How much governance and reporting overhead your team can realistically absorb** in year one of being listed
3. **Whether your investor base is likely to be retail-heavy or institutional**, which affects how much a narrower SME liquidity profile will actually matter to you
4. **Your medium-term plan**, since an SME listing followed by a planned Main-Board migration is a legitimate, common strategy, not a consolation prize

## Where the Real Delays Come From

Regardless of platform, the two most common sources of delay are the same: governance and financial-track-record gaps discovered late, and slow-moving responses to SEBI and exchange queries during the DRHP review. Both are avoidable with enough runway before filing.

## Getting the Sequencing Right

If you're 12 to 24 months out and still closing governance or cap table gaps, that groundwork belongs in [Pre-IPO Advisory](/services/pre-ipo-advisory) before an SME-vs-Main-Board decision is even finalized. Once you're ready to select a merchant banker and start the DRHP process on either platform, that's where [IPO and SME IPO Advisory](/services/ipo-and-sme-ipo-advisory) takes over, from platform decision through to listing day.

AKNA Capital is not a SEBI registered merchant banker and does not replace one; a SEBI registered merchant banker remains mandatory as lead manager for either listing route.
`,
  },
  {
    slug: "buy-side-vs-sell-side-ma-why-one-advisor-rarely-works-for-both",
    title: "Buy-Side vs Sell-Side M&A: Why the Same Advisor Rarely Works for Both",
    metaTitle: "Buy-Side vs Sell-Side M&A Advisory Explained | AKNA Capital",
    metaDescription:
      "Buy-side and sell-side M&A advisory represent opposite sides of the same negotiation. Here's why the incentives genuinely conflict, and what each side should actually expect from their advisor.",
    excerpt: "A buyer wants to pay less. A seller wants to get more. The same advisor representing both sides in one deal has a structural conflict, not just an appearance of one.",
    category: "M&A Advisory",
    readTime: "5 min read",
    date: "July 16, 2026",
    isoDate: "2026-07-16",
    author: DESK,
    content: `
## Opposite Sides of the Same Table

In any acquisition, a buyer wants to pay as little as reasonably possible for a business that performs well after close. A seller wants to get as much as reasonably possible, with terms that protect them post-signing. These aren't just different priorities, they're structurally opposed. That's why buy-side and sell-side M&A advisory are genuinely different jobs, not the same service marketed to two audiences.

## What a Buy-Side Advisor Actually Does

- **Sources and screens targets** against the acquirer's strategic and financial criteria, whether from a known shortlist or a wider search
- **Runs independent valuation** to counter a seller's naturally optimistic starting number
- **Coordinates diligence** across financial, legal, and tax workstreams, and is structurally motivated to flag deal-breakers rather than paper over them
- **Negotiates deal structure**, including earn-outs and consideration mix, to protect the buyer after the deal closes, not just at signing

See [Buy-side M&A Advisory](/services/buy-side-ma-advisory) for the full detail of how this runs end to end.

## What a Sell-Side Advisor Actually Does

- **Assesses sale readiness** the way a buyer would, surfacing issues before they show up as a due-diligence surprise
- **Benchmarks valuation** against comparable transactions, so the promoter has a realistic number before any buyer conversation starts
- **Runs a confidential, competitive process** across multiple buyers in parallel, rather than negotiating with whoever approached first
- **Manages the process** so the promoter isn't distracted from running the business while a sale is underway

See [Sell-side M&A Advisory](/services/sell-side-ma-advisory) for how this process is structured from readiness through closing.

## Why "Full-Service" Can Quietly Cost You

An advisor who represents both buyers and sellers across the market isn't automatically compromised on any single deal, but the incentive to close a transaction, any transaction, can outweigh the incentive to walk away from a bad one for whichever side they happen to represent that time. The cleanest structure is an advisor working exclusively for your side of the specific deal in front of you.

## A Quick Way to Tell Which You Need

If you're actively looking to grow through acquisition, or have already found a target and need independent valuation and negotiation support, that's a buy-side mandate. If you're the one being approached, or are proactively considering a full or partial exit, that's sell-side. The two rarely overlap within the same transaction.

## Not Sure Which Side You're On?

Some situations are genuinely ambiguous, a merger of equals, a partial stake sale with continued involvement, or a competitor's inbound approach that may or may not be worth taking further. Our [Services](/services) page groups both mandates alongside our Pre-IPO and IPO advisory work if you're weighing multiple paths at once, or you can [talk to an advisor](/contact) directly about your specific situation.
`,
  },
  {
    slug: "what-ipo-ready-actually-means-12-24-months-out",
    title: "12 to 24 Months Before Your IPO: What 'IPO Ready' Actually Means",
    metaTitle: "What Does 'IPO Ready' Actually Mean? A Founder's Checklist | AKNA Capital",
    metaDescription:
      "Being profitable isn't the same as being IPO-ready. Here's what exchanges, investors, and merchant bankers actually look for in the 12-24 months before a listing.",
    excerpt: "Profitable companies get rejected by the IPO process all the time, not because the business is weak, but because governance, cap table, and reporting weren't ready. Here's what 'ready' actually means.",
    category: "IPO Advisory",
    readTime: "6 min read",
    date: "July 11, 2026",
    isoDate: "2026-07-11",
    author: SMIT,
    content: `
## Profitable Is Not the Same as Ready

A profitable, well-run private company can still be months or years away from being IPO-ready, because exchanges, merchant bankers, and investors scrutinize a different set of things than a promoter typically tracks day to day. Revenue and margins matter, but they're only part of the picture.

## The Four Areas That Actually Get Scrutinized

- **Board composition and governance.** Does the board include the independent directors and committee structures a listed company is expected to have, or is it still run informally by the founding family?
- **Related-party transactions.** Every arrangement between the company and a promoter, director, or an entity they control needs to be documented and priced at arm's length. Undocumented related-party dealings are one of the most common reasons DRHP filings stall.
- **Cap table integrity.** Every fundraising round, ESOP grant, and share transfer needs to reconcile cleanly against actual board resolutions and filings. A messy cap table surfaces as a red flag the moment due diligence starts.
- **Financial track record.** Exchanges expect a specific length of audited financial history. If your reporting discipline has been inconsistent, that history needs to be rebuilt well before a filing, not patched together under time pressure.

## Why 12 to 24 Months, Specifically

Each of these areas takes real time to fix properly. Restructuring a board, unwinding related-party arrangements, and cleaning up a cap table are not weekend projects, and rebuilding an audited financial track record literally cannot be rushed; it requires actual audited years to pass. Starting this work 12 to 24 months before a target listing date gives enough runway to fix things deliberately instead of scrambling once a merchant banker's due diligence has already flagged them.

## The Honest Route Question

Not every company that could technically list should. Part of genuine IPO readiness work is an honest comparison of an IPO against a strategic sale or continued private fundraising, based on your actual governance readiness, growth plans, and what the promoters want out of the outcome. Some companies get their books in order for an IPO and end up better positioned for a well-run [Sell-side M&A Advisory](/services/sell-side-ma-advisory) process instead, and that's a legitimate outcome of the same groundwork.

## Where This Fits

This exact readiness work, the governance restructuring, cap table clean-up, and financial track record planning, is what [Pre-IPO Advisory](/services/pre-ipo-advisory) is built around. Once that groundwork is done and you're ready to select a merchant banker and file, [IPO and SME IPO Advisory](/services/ipo-and-sme-ipo-advisory) picks up from exactly where readiness work leaves off.

This article is a general educational overview. Specific eligibility criteria, disclosure requirements, and timelines are governed by SEBI's ICDR regulations in force at the time of filing.
`,
  },
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

If you have a lump sum sitting idle and are unsure how to deploy it, that's exactly the kind of decision [Mutual Fund Investing](/services/mutual-fund-investing) at AKNA Capital is built around: matching the approach to your specific goal and time horizon, not a blanket rule.

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

This is a core part of how [AKNA Private Wealth](/services/akna-private-wealth) is structured for larger portfolios: coordinating equity, mutual funds, and other assets so that the overall exposure is intentional, not an accident of which individual stock ideas happened to look good that quarter. It's also why our [Research and Ranking](/services/research-ranking) recommendations are ranked with sector and market cap context, not handed out as isolated stock tips.

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

This is exactly the gap our [Stockmarket Workshop](/services/stockmarket-workshop) is built to close: teaching technical analysis as one tool among several, alongside fundamental and quantitative approaches, rather than as a standalone shortcut to "beating the market."

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

For larger, more complex retirement planning, particularly where a diversified mix of equity, mutual funds, and other assets needs to be coordinated over a long horizon, this is exactly what [AKNA Private Wealth](/services/akna-private-wealth) is built around.

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

Algo-trading tends to make sense for traders who already have a defined, rules based approach and want consistent execution, not for someone hoping automation will substitute for not having a strategy at all. If you're still developing your approach, our [Stockmarket Workshop](/services/stockmarket-workshop) is a more useful starting point than jumping straight to automation.

## Getting Started

If you already trade with a set of rules you trust, [Algo-Trading](/services/algo-trading) at AKNA Capital helps convert that logic into a backtested, automated strategy built on our in-house Quant Engine.

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

You can start by estimating how your current SIP is tracking with our [SIP Calculator](/market-tools/sip-calculator), and see what a step up in contribution could do with the [SIP Step Up Calculator](/market-tools/sip-step-up-calculator). For a full review of your existing SIPs, [Mutual Fund Investing](/services/mutual-fund-investing) at AKNA Capital is where that conversation starts.

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

If you currently hold an investment-cum-insurance policy, it's worth having it reviewed, not necessarily to cancel it, but to understand exactly what cover and what returns it's actually giving you, compared to a separated approach. That review is part of what [Insurance](/services/insurance) at AKNA Capital helps with.

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

Fundamental analysis reduces guesswork, but it does not eliminate risk. If you'd rather start from ranked, already-researched recommendations than build this analysis from scratch yourself, that's exactly what [Research and Ranking](/services/research-ranking) delivers. All investments in securities markets are subject to market risk, and past fundamentals do not guarantee future stock performance.
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
