// Project data, reference-driven, outcome-first case studies.
// Each case study keeps 3–4 key sections to stay scannable.

export type Metric = { value: string; label: string };
export type ProcessArtifact = { title: string; type: string; media: string | string[]; alt: string | string[]; caption: string };

export type SectionBlock =
  | { kind: "text"; label: string; heading: string; body: string[] }
  | {
      kind: "decisions";
      label: string;
      heading: string;
      body: string[];
      items: { title: string; body: string }[];
    }
  | {
      kind: "insights";
      label: string;
      heading: string;
      body: string[];
      items: { stat: string; body: string }[];
    }
  | {
      kind: "outcome";
      label: string;
      heading: string;
      body: string[];
      items: Metric[];
    };

export type Project = {
  slug: string;
  index: string;
  company: string;
  domain: string[];
  year: string;
  title: string; // card headline
  cardSummary: string;
  cover: string;
  coverDark?: boolean;
  locked?: boolean;
  lockedNote?: string;

  // Case study detail
  eyebrow: string;
  heroTitle: string;
  heroEmphasis: string;
  lead: string;
  stats: Metric[];
  meta: { label: string; value: string }[];
  sections: SectionBlock[];
  processArtifacts?: ProcessArtifact[];
  quote?: { text: string; attr: string };
};

export const projects: Project[] = [
  // 01, META (locked / NDA)
  {
    slug: "meta-bidding",
    index: "01",
    company: "Meta",
    domain: ["Monetization", "B2B", "Growth"],
    year: "2025",
    title: "Meta Bidding Ecosystem",
    cardSummary:
      "Led design for Ads Manager's most technically complex monetization area, shipping bidding and budget-scaling experiences that drove measurable advertiser revenue growth.",
    cover:
      "/artifacts/meta-cprg.png",
    coverDark: true,
    locked: false,
    eyebrow: "Meta · Monetization · 2025",
    heroTitle: "Designing the controls",
    heroEmphasis: "advertisers bid with",
    lead: "Led the global rollout of a new Goal-based Bidding product across multiple Ads Manager surfaces, improving advertiser decision-making, campaign scaling behavior, and monetization opportunities for top-tier GBG advertisers.",
    stats: [
      { value: "14K", label: "Campaign adoptions" },
      { value: "+25%", label: "Spend growth" },
      { value: "6x", label: "Long-tenured spend" },
      { value: "50%", label: "Lower switchback rates" },
    ],
    meta: [
      { label: "My role", value: "Senior Product Designer / UX Lead" },
      { label: "Scope", value: "Product Strategy · UX · Ads" },
      { label: "Team", value: "Product · Engineering · Research · Data" },
      { label: "Platform", value: "Meta Ads Manager" },
    ],
    sections: [
      {
        kind: "text",
        label: "01, The problem",
        heading: "Advertisers didn't know when and how to scale",
        body: [
          "Advertisers did not know when and how to scale their campaigns and ended up spending more on their marketing efforts and manual intervention, hence losing out on cost and more conversion opportunities.",
          "The problem was not just a product UI issue — it was a lack of clear decision guidance across campaign workflows that made goal-based bidding feel risky and inefficient.",
        ],
      },
      {
        kind: "insights",
        label: "02, What research revealed",
        heading: "Scaling signals were opaque and inconsistent",
        body: [
          "Research surfaced where advertisers expected clear scaling guidance and where Ads Manager surfaces instead introduced friction, uncertainty, and manual work.",
        ],
        items: [
          {
            stat: "Manual scaling",
            body: "Advertisers relied on manual intervention and obscure signals, which increased cost and reduced conversion potential.",
          },
          {
            stat: "Unclear timing",
            body: "Users did not know when to scale campaigns, causing stalled performance or overspending at the wrong time.",
          },
          {
            stat: "Low confidence",
            body: "Poor guidance and complex controls made top-tier GBG advertisers hesitant to trust the new bidding product.",
          },
        ],
      },
      {
        kind: "decisions",
        label: "03, Key decisions",
        heading: "Surface clear goals and automated scaling support",
        body: [
          "We shifted the product to focus on advertiser goals, clear signals, and automation that made scaling feel predictable rather than risky.",
        ],
        items: [
          {
            title: "Emphasize goal-based outcomes",
            body: "We framed the bidding experience around advertiser objectives instead of manual bid adjustments, reducing cognitive load and increasing adoption.",
          },
          {
            title: "Introduce scalable guidance",
            body: "We added guidance and guardrails to help advertisers understand when to scale budgets and campaigns.",
          },
          {
            title: "Support long-tenured advertisers",
            body: "We built experiences specifically for high-value advertisers with complex campaigns, pairing automation with transparency.",
          },
        ],
      },
      {
        kind: "outcome",
        label: "04, Outcome",
        heading: "A stronger, more confident rollout",
        body: [
          "The rollout delivered measurable adoption and growth across Ads Manager, validating the product’s goal-based approach and the decision support we built.",
        ],
        items: [
          { value: "14K", label: "Campaign adoptions" },
          { value: "+25%", label: "Spend growth" },
          { value: "6x", label: "Spend increase for long-tenured advertisers" },
          { value: "50%", label: "Lower switchback rates" },
        ],
      },
    ],
    processArtifacts: [
      {
        title: "Ads manager automation recommendations",
        type: "Guidance",
        media: "/artifacts/meta-am-table.png",
        alt: "Ads manager automation recommendations",
        caption: "Our model provided actionable insights for advertisers to scale their campaigns effectively.",
      },
      {
        title: "Improvements based on experiment learnings.",
        type: "Iterations",
        media: "/artifacts/meta-autobid.png",
        alt: "Autobid interaction flow and UI for automated bidding",
        caption: "We revisited the designs to make improvements for our next launch. Our new improvements: 1. Recommend a slightly higher budget.  2. Make the budget editable in the guidance.",
      },
    ],
    quote: {
      text: "Her product thinking is genuinely systems-oriented. She connects what is happening at the surface level to broader platform strategy and identifies opportunities that others miss. She is not just designing screens. She thinks about how the full ecosystem fits together and how to move it forward in a way that compounds over time.",
      attr:"— Nikki Jahangiri, Director of Product Design (Meta)",
    },
  },

  // 02, BAKE (full case study)
  {
    slug: "bake-smart-bundles",
    index: "02",
    company: "Bake (CakeDeFi)",
    domain: ["Product & Content Strategy", "Fintech", "Crypto"],
    year: "2024",
    title: "Designing for retention in a down market",
    cardSummary:
      "Led strategy and design for Smart Bundles, a new crypto investment product that drove $200K in revenue and a 4% engagement lift in its first month by simplifying how users allocate assets.",
    cover:
      "/artifacts/bake-smart.mp4",
    eyebrow: "Bake · Fintech · 2024",
    heroTitle: "Designing for retention",
    heroEmphasis: "in a down market",
    lead: "When falling crypto yields threatened to stall Bake's growth, I led the product strategy and design that turned stagnant engagement into a new revenue stream.",
    stats: [
      { value: "$200K", label: "Revenue, first month" },
      { value: "+4%", label: "User engagement" },
      { value: "63%", label: "Positive post-launch" },
      { value: "1 month.", label: "End-to-end sprint" },
    ],
    meta: [
      { label: "My role", value: "Senior Product Designer / UX Lead" },
      { label: "Scope", value: "Strategy, Research, Design, Content" },
      { label: "Team", value: "PM, Engineering, Marketing, Data science" },
      { label: "Platform", value: "iOS, Android, Web" },
    ],
    sections: [
      {
        kind: "text",
        label: "01, The problem",
        heading: "A product at an inflection point",
        body: [
          "Bake (formerly CakeDeFi) built its reputation on high-yield crypto returns. Macroeconomic headwinds compressed those yields, and with them, the core value proposition that drove acquisition and retention.",
          "Leadership needed a strategy to keep existing customers engaged and attract investors who wouldn't stay for yield alone. I owned that strategy from research through launch.",
        ],
      },
      {
        kind: "insights",
        label: "02, What research revealed",
        heading: "The real barrier was cognitive load, not risk",
        body: [
          "I ran contextual interviews and live usability sessions with long-tenured users holding idle funds, alongside a full UX and content audit of the app.",
        ],
        items: [
          {
            stat: "69.6%",
            body: "Struggled with juggling multiple accounts and platforms, not volatility. Cognitive load was the real barrier.",
          },
          {
            stat: "62.5%",
            body: "Cited a lack of trust and security, a gap Bake was well-positioned to close with the right framing.",
          },
          {
            stat: "50%",
            body: "Found crypto apps complex or difficult, even experienced investors. This confirmed the audit findings.",
          },
        ],
      },
      {
        kind: "decisions",
        label: "03, Key decisions",
        heading: "Bundles as the answer to decision paralysis",
        body: [
          "Customers didn't want to manage crypto, they wanted to invest in it. I made two decisions that reframed the product and one that protected trust before launch.",
        ],
        items: [
          {
            title: "Collapse the decision into one tap",
            body: "Smart Bundles replaced asset-by-asset picking with curated, theme-based allocations users could buy into in a single tap and earn compounding yield. Bake does the work; the user owns the outcome.",
          },
          {
            title: "Add an 'Investment Idea' content layer",
            body: "Working with product and marketing, I defined plain-language rationale for each bundle, addressing the trust gap directly so users understood why before committing funds.",
          },
          {
            title: "Flag the 'Gold' framing risk early",
            body: "Usability sessions showed customers didn't register they were buying a token, not physical gold. I pushed leadership for explicit 'Token, not physical gold' framing at every touchpoint, accepted before go-live.",
          },
        ],
      },
      {
        kind: "outcome",
        label: "04, Outcomes",
        heading: "What shipped, what it moved",
        body: [
          "Smart Bundles launched on a compressed timeline and delivered measurable results in month one, validating the research bets and the pivot away from yield-only positioning. I also left the team with a living customer-journey repository so the next decision wouldn't start from zero.",
        ],
        items: [
          { value: "$200K", label: "Additional revenue in the first month, attributed to Smart Bundles" },
          { value: "+4%", label: "Platform-wide engagement lift among existing investors" },
          { value: "63%", label: "Rated the new experience positively, with a clear roadmap for the rest" },
        ],
      },
    ],
    processArtifacts: [
      {
        title: "Smart Bundles decision flow",
        type: "Wireframe",
        media: ["/artifacts/bake-wireframe-1.png", "/artifacts/bake-wireframe-2.png"],
        alt: ["Wireframe showing the Smart Bundles selection and confirmation flow", "Additional wireframe exploring Smart Bundles interactions and alternative flows"],
        caption: "The bundle selection flow reduced asset-by-asset decision making into a guided investment path. Exploring multiple interaction patterns and user pathways.",
      },
      {
        title: "Component designs",
        type: "Design system",
        media: "/artifacts/bake-component.gif",
        alt: "Video showing the Smart Bundles component interactions and states",
        caption: "We created a comprehensive design system to ensure consistency and scalability across all Smart Bundles components.",
      },
      {
        title: "Research & Workshops",
        type: "Insights",
        media: ["/artifacts/research.jpg", "/artifacts/research.png"],
        alt: "Research and workshop notes and findings",
        caption: "Key insights and learnings from my user research and collaborative workshops.",
      },
    ],
    quote: {
      text: "Eileen’s ability to connect and collaborate with both, team members and partners alike assures that design decisions are always informed and never depart from what is possible or desirable.",
      attr:"— Maik Lutze, Chief of Product Design",
    },
  },

  // 03, OCBC
  {
    slug: "ocbc-business-banking",
    index: "03",
    company: "OCBC Bank",
    domain: ["Enterprise", "Banking", "Service Design"],
    year: "2023",
    title: "Regional business banking transformation",
    cardSummary:
      "Led experience strategy and service design for a multi-market business banking transformation, creating a scalable framework across Asia and reducing processing time by 50%.",
    cover:
      "/artifacts/OCBC.gif",
    eyebrow: "OCBC · Business Banking · 2023",
    heroTitle: "Designing a scalable business banking experience",
    heroEmphasis: "across Asia",
    lead: "I led the end-to-end UX and service design strategy for OCBC's next-generation Business Banking platform, creating a scalable experience framework that could support customers across Singapore, Malaysia, Hong Kong, and Greater China.",
    stats: [
      { value: "−50%", label: "Processing time" },
      { value: "+90%", label: "Customer satisfaction" },
      { value: "4", label: "Business markets" },
      { value: "SME & Enterprise", label: "Segments served" },
    ],
    meta: [
      { label: "My role", value: "Senior Product Designer / UX Lead" },
      { label: "Scope", value: "CX Strategy · Service Design · IA · UX" },
      { label: "Markets", value: "Singapore · Malaysia · Hong Kong · Greater China" },
      { label: "Partners", value: "Business · Operations · Compliance · Technology" },
    ],
    sections: [
      {
        kind: "text",
        label: "01, The challenge",
        heading: "Fragmented banking journeys across multiple markets",
        body: [
          "Business customers were navigating slow, fragmented journeys that differed by market. Internal banking processes had evolved independently, creating complexity for customers and operational teams.",
          "The challenge was not simply to redesign screens. It was to create a scalable experience framework that could support regional expansion while balancing local regulatory, operational, and customer requirements.",
        ],
      },
      {
        kind: "insights",
        label: "02, Research & discovery",
        heading: "Understanding the ecosystem behind the customer journey",
        body: [
          "I audited customer and operational touchpoints across account opening, onboarding, payments, approvals, authorization tools, manual forms, and internal workflows.",
          "This helped the team separate visible customer pain points from the backstage process bottlenecks that were creating delays.",
        ],
        items: [
          { stat: "Fragmented workflows", body: "Customers completed single tasks across disconnected systems, forms, and support channels." },
          { stat: "Market inconsistency", body: "Similar customer needs were solved differently across markets, creating operational and design complexity." },
          { stat: "Hidden process costs", body: "Internal teams were spending significant effort supporting exceptions, manual work, and unclear handoffs." },
        ],
      },
      {
        kind: "decisions",
        label: "03, Key decisions",
        heading: "Create a framework, not another set of pages",
        body: [
          "The most important design decision was to treat the platform as a regional service system rather than a collection of isolated banking flows.",
        ],
        items: [
          {
            title: "Standardize the regional customer journey",
            body: "I defined shared navigation, onboarding, payment, and approval patterns so customers could experience a consistent platform across markets.",
          },
          {
            title: "Balance global consistency with local flexibility",
            body: "The framework supported market-specific compliance and operational needs without forcing every market into a rigid one-size-fits-all flow.",
          },
          {
            title: "Align business, operations, and technology teams",
            body: "I facilitated workshops and walkthroughs to help stakeholders make tradeoffs around customer experience, operational feasibility, and long-term scalability.",
          },
        ],
      },
      {
        kind: "outcome",
        label: "04, Outcome",
        heading: "A scalable foundation for regional business banking",
        body: [
          "The work established a unified experience strategy for OCBC Business Banking and gave cross-functional teams a clearer foundation for future product development across Asia.",
        ],
        items: [
          { value: "4.6", label: "Average CSAT score, increase in customer satisfaction" },
          { value: "-50%", label: "Reduction in processing time,engineering effort, reducing time and costs significantly. " },
          { value: "37%", label: "YoY Profit Growth, supported through regional business banking modernization" },
        ],
      },
    ],
    processArtifacts: [
      {
        title: "Customer and operations journey map",
        type: "Service Design",
        media: "/artifacts/OCBC-journey.png",
        alt: "Journey map showing customer and operations touchpoints for business banking",
        caption: "Mapping customer and operational journeys across onboarding, payments, approvals, and account management uncovered where the experience needed to be simplified.",
      },
      {
        title: "Stakeholder alignment workshop",
        type: "Facilitation",
        media: "/artifacts/OCBC-workshops.png",
        alt: "OCBC stakeholder workshop artifact",
        caption: "Cross-functional workshops aligned business, operations, compliance, technology, and design teams around a shared vision for regional business banking.",
      },
      {
        title: "Regional experience framework & Future state vision",
        type: "Strategy & Design framework",
        media: ["/artifacts/OCBC-framework.png", "/artifacts/OCBC-future-state.png"],
        alt: "OCBC regional experience framework artifact",
        caption: "Establishing a scalable regional framework and translating it into future-state business banking concepts that unified onboarding, account management, payments, and approvals across markets.",
      },
    ],
  },

  // 04, STORMS
  {
    slug: "storms-growth",
    index: "04",
    company: "Storms",
    domain: ["Consumer", "Gamification", "Design Systems"],
    year: "2021",
    title: "Designing the future of instant gaming",
    cardSummary:
      "Led research, UX, and design system work for an instant gaming platform, increasing downloads by 12% and boosting engagement by over 500% across multiple markets.",
    cover:
      "/artifacts/storms.gif",
    eyebrow: "Storms · Instant Gaming · 2021",
    heroTitle: "Designing the future",
    heroEmphasis: "of instant gaming",
    lead: "Storms is an instant-gaming platform where games can be played immediately without downloads. I led multi-market research, UX strategy, and product redesign work to reduce friction, deepen engagement, and create a scalable foundation for future growth.",
    stats: [
      { value: "+12%", label: "Downloads" },
      { value: "25X", label: "Engagement time increase" },
      { value: "7X", label: "Session frequency increase" },
      { value: "7", label: "Markets researched" },
    ],
    meta: [
      { label: "My role", value: "Design Lead & Researcher" },
      { label: "Scope", value: "Research · Product Strategy · UX · Design System" },
      { label: "Markets", value: "SEA · India · Nigeria" },
      { label: "Platform", value: "Web · Messaging · Mobile" },
    ],
    sections: [
      {
        kind: "text",
        label: "01, The challenge",
        heading: "Growing engagement beyond the first session",
        body: [
          "Instant games had a strong value proposition: no download, no waiting, and immediate play. But the product experience was not yet tuned to the needs of first-time, low-bandwidth, mobile-first players across very different markets.",
          "The challenge was to move beyond acquisition and create an experience that could turn curiosity into repeat play, stronger engagement, and long-term product growth.",
        ],
      },
      {
        kind: "insights",
        label: "02, Research & discovery",
        heading: "Understanding what makes players come back",
        body: [
          "I led research across Thailand, Indonesia, Malaysia, Singapore, the Philippines, India, and Nigeria, combining customer interviews, usability testing, market analysis, and behavioral data.",
          "The research helped identify where the product needed to reduce friction, create clearer value, and support habit formation.",
        ],
        items: [
          { stat: "Fast first play", body: "Players needed to understand the value and enter a game quickly, especially on mobile and messaging platforms." },
          { stat: "Repeatable engagement", body: "The experience needed clearer loops around discovery, rewards, and progression to encourage return sessions." },
          { stat: "Market flexibility", body: "Different markets had different expectations, but the product needed a shared system to scale design and delivery." },
        ],
      },
      {
        kind: "decisions",
        label: "03, Key decisions",
        heading: "Design for instant value, then build for scale",
        body: [
          "The redesign focused on removing friction to first play while creating reusable patterns that could support future products and markets.",
        ],
        items: [
          {
            title: "Reduce friction to first play",
            body: "I simplified the entry experience and prioritized faster paths into games, making the product feel more immediate and rewarding.",
          },
          {
            title: "Design for repeat sessions",
            body: "I shaped engagement loops around discovery, progression, and rewards so the experience could support habit formation beyond a single visit.",
          },
          {
            title: "Build a scalable design system",
            body: "A shared system gave the team reusable components and interaction patterns, helping future product changes ship faster and more consistently.",
          },
        ],
      },
      {
        kind: "outcome",
        label: "04, Outcome",
        heading: "A stronger foundation for product growth",
        body: [
          "The redesign improved the core product experience while giving the team a stronger design system and clearer product direction for future growth.",
        ],
        items: [
          { value: "+12%", label: "Increase in downloads" },
          { value: "25X", label: "Increase in user engagement" },
          { value: "7X", label: "Rise in session frequency" },
        ],
      },
    ],
    processArtifacts: [
      {
        title: "Business and Product Strategy",
        type: "Strategy",
        media: "/artifacts/storms-strategy.png",
        alt: "Product strategy diagram",
        caption: "We defined the strategy as a seamless gaming platform that caters both user and business needs.",
      },
      {
        title: "Player research and persona mapping",
        type: "Research",
        media: "/artifacts/storms-research.png",
        alt: "Storms player research and persona artifact",
        caption: "Workshops, persona mapping, and Jobs-to-be-Done exercises helped clarify player motivations, behaviors, and expectations across markets.",
      },
      {
        title: "Insight synthesis",
        type: "Data informed decisions",
        media: "/artifacts/storms-insights.png",
        alt: "Storms research synthesis artifact",
        caption: "Customer interviews, usability testing, and behavioral analysis were translated into product recommendations and growth opportunities.",
      },
      {
        title: "Design system foundation",
        type: "Design efficiency",
        media: "/artifacts/storms-design-system.png",
        alt: "Placeholder for Storms design system artifact",
        caption: "I leveraged Google's Material Design to build our design system, creating rapid prototypes and high-fidelity mockups. Documentation in Notion aligned the team, reduced engineering effort, and accelerated delivery.",
      },
      {
        title: "Instant gaming platform",
        type: "Final product experience",
        media: "/artifacts/Storms-screens.mp4",
        alt: "Storms final product screens",
        caption: "Final screens delivered a faster, clearer gaming experience designed around first play, repeat sessions, and long-term engagement.",
      },
    ],
  },
];

export const aboutIntro = [
  "I design at the intersection of product strategy, customer insight, and business impact. I work best in ambiguous, high-stakes spaces, where the problem isn't yet clearly defined and early decisions shape everything that follows.",
  "My background spans growth, monetization, enterprise platforms, and consumer fintech, with experience leading cross-functional teams and influencing at the executive level.",
];

export const aboutStats: { num: string; label: string }[] = [
  {
    num: "15+",
    label: "Years across fintech, banking, B2B, Digital Marketing and consumer platforms",
  },
  { num: "WORK", label: "Meta · Bake · OCBC · Storms · EPAM" },
  {
    num: "SG / SF",
    label: "Born in Singapore, currently based in Bay Area. Built products across APAC, ANZ, and US markets",
  },
  { num: "MA", label: "Master of Digital Management (Distinction), Hyper Island" },
];

export const contact = {
  email: "eileen.221989@gmail.com",
  linkedin: "https://linkedin.com/in/yueileen",
  adobe: "https://eileenyu.myportfolio.com/",
};


export const recognitionSkills = [
  { label: "Tools", value: "Figma · FigJam · Figma Make · Claude Code · Manus · Jira · Notion · Adobe Creative Cloud" },
  { label: "Skills", value: "Product strategy · Journey mapping · User research · Usability research · Design systems" },
  { label: "Leadership", value: "Cross-functional alignment · Executive storytelling · Ambiguous 0→1 spaces · Mentorship" },
];

export const resumeUrl = "/Eileen_Yu_Resume.pdf";
