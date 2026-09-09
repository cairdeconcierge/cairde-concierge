import { AboutPage, ServicesPage,Pricing } from "../Route";

export const navLinks = [
  {
    title: "About Us",
    router: AboutPage,
  },
  {
    title: "Services",
    router: ServicesPage,
  },
  {
    title: "Corporate Elder Support",
    router: "/corporate-eldercare",
  },
  {
    title:"Pricing",
    router:Pricing
  },
  {
   title:"Blog",
   router:"/Blog"
  }
];

export const SIGNS = [
  "Withdrawing or Spending less time with others",
  "Struggling to manage daily household chores",
  "Leaning more on family for routine daily help",
  "Forgetting key appointments or daily commitments",
  "Finding travel or running errands increasingly difficult",
  "wanting to stay at home, but needing a helping hand",
];


export const STEPS = [
  {
    title: "Free Consultation",
    body: "We begin with a no-obligation, in-depth assessment of your loved one's needs, preferences, and daily routines to understand how we can best support them.",
  },
  {
    title: "Personalised Support Plan",
    body: "Based on our assessment, we craft a customised support plan tailored specifically to your family's requirements, ensuring comprehensive and compassionate support.",
  },
  {
    title: "Dedicated Support Specialist Match",
    body: "We carefully match your loved one with a compassionate, experienced team member whose skills and personality align with their needs and preferences.",
  },
  {
    title: "Ongoing Support & Updates",
    body: "Our commitment doesn't end there. We provide continuous oversight, regular check-ins, and open communication to ensure the support plan evolves with your loved one's needs.",
  },
];

export const Offer = [
  {
    title:"Lifestyle Assistance",
    text:"Preserving routine, comfort, and independence at home."
  },
  {
    title:"Companionship & Social Engagement",
    text:"Bringing joy, connection, and meaningful conversation into every day."
  },
  {
    title:"Personalised Support Plans",
    text:"Flexible support that evolves with your family's needs."
  },
  {
    title:"Accompaniment & Companionship",
    text:"Preserving routine, comfort, and independence at home."
  },
  {
    title:"Transport & Errands Support",
    text:"Keeping seniors connected to their community, routines, and appointments."
  },
  {
    title:"Care Coordination Services",
    text:"Streamlining the details so you can focus on being a family."
  },
  {
    title:"Administrative & Virtual Support",
    text:"Remote digital support and appointment coordination for families near and far."
  }
]


export const PACKAGES = [
  {
    hours: "2 hours / week",
    title: "The Essential Check-In",
    description:
      "Perfect for independent older adults who just need a helping hand with weekly logistics.",
    included: [
      "Weekly grocery shopping",
      "Post office or pharmacy errands",
      "Library trips",
      "Light administrative form-filling",
    ],
    standard: "€45/hr · €360/month",
    price: "€90/week · €360/month",
    // note: "After 60% tax relief",
    featured: false,
  },
  {
    hours: "6 hours / week",
    title: "The Independence Package",
    description:
      "A balanced blend of practical household support and meaningful social connection.",
    included: [
      "Companionship & social companionship",
      "Hospital or GP accompaniment",
      "Light meal preparation",
      "Local neighbourhood walks",
    ],
    standard: "€40/hr · €640/month",
    price: "€160/week · €640/month",
    // note: "After 60% tax relief",
    featured: true,
  },
  {
    hours: "8 hours / week",
    title: "The Premium Peace of Mind Package",
    description:
      "Comprehensive, high-level lifestyle coordination for busy families wanting total reassurance.",
    included: [
      "Multiple social and community outings",
      "Hospital Appointment, including Medical Card support",
      "Light home tidying",
      "Fresh meal preparation and assembly several times a week",
    ],
    standard: "€35/hr · €1,120/month",
    price: "€280/week · €1,120/month",
    // note: "After 60% tax relief",
    featured: false,
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-it",
    question: "What exactly is Cairde Concierge?",
    answer:
      "We are a non-medical companionship and lifestyle management service for older adults in Dublin and surrounding areas. Think of us as a trusted personal assistant, coordinator, and friendly local neighbour all rolled into one. We handle everything from errands and hospital chaperoning to everyday admin and life logistics.",
  },
  {
    id: "medical-care",
    question: "Do you provide medical or personal care?",
    answer:
      "No. To maintain a strict, clear focus, we provide exclusively non-medical concierge and companion services. We do not assist with medication administration, bathing, dressing, or physical transfers. If your loved one requires clinical or medical assistance, we can help you coordinate with local registered home care providers.",
  },
  {
    id: "coverage-area",
    question: "How do your packages work?",
    answer:
      "We offer three simple monthly packages, plus specialised one-off projects and add-on services, so you can choose the level of support that fits your family:\n• The Essential Check-In (2 hours/week) perfect for independent seniors who just need a hand with weekly logistics\n• The Independence Package (6 hours/week, most popular) a blend of practical support and social connection\n• The Premium Peace of Mind Package (8 hours/week) comprehensive lifestyle coordination for families wanting full reassurance\nWe also offer Specialised One-Off Projects & Add-On Services targeted, fixed-price project packages designed to solve specific, stressful household challenges for your loved ones.",
  },
  {
    id: "transport",
    question: "Do you provide transportation?",
    answer:
      "We do not drive clients in our personal vehicle, nor do we drive clients' personal vehicles. However, we act as an expert travel companion we travel comfortably using Dublin's public transport, or we can coordinate, book, and accompany your loved one in local taxis (paid for by the client).",
  },
  {
    id: "tax-relief",
    question: "Are you insured and vetted?",
    answer:
      "Yes. We are Garda vetted and carry Public Liability Insurance covering the non-medical services we provide. Copies of our vetting and insurance documentation are available on request and can be reviewed during your initial consultation.",
  },
  {
    id: "cancel",
    question: "Can we change or cancel our package?",
    answer:
      "Yes. Packages bill on a recurring monthly schedule for consistency, but you can upgrade, downgrade, or cancel at any time with 30 days' written notice.",
  },
];


export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/Aboutus" },
      { label: "Services", href: "/Services" },
      { label: "Packages", href: "/Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Blog", href: "/Blog" }],
  },
 {
  title: "Get in touch",
  links: [
    { label: "Contact", href: "/Request-consultation" },
    { label: "+353 87 003 3223", href: "tel:+353870033223" },
  ],
},
{
  title: "Legal",
  links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
},
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "tiktok" | "facebook";
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/patience_tobin?igsi=MWpxMmJ1cnZnaDlwaw==",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cairde_concierge?_r=1&_t=ZN-99Msn0DAH47",
    icon: "tiktok",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19ZbJew96Y/",
    icon: "facebook",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt_text: string;
  link: string;
};

export const services: Service[] = [
  {
    id: "lifestyle-assistance",
    title: "Lifestyle Assistance",
    description: "Preserving routine, comfort, and independence at home.",
    image: "/images/image-1.jpg",
    alt_text: "A carer and an older woman chatting in a bright sitting room",
    link: "/MoreServices",
  },
  {
    id: "companionship",
    title: "Companionship & Social Engagement",
    description:
      "Bringing joy, connection, and meaningful conversation into every day.",
    image: "/images/social-engagement.jpg",
    alt_text: "Two women talking together on a garden terrace",
    link: "/MoreServices",
  },
  {
    id: "support-plans",
    title: "Personalised Support Plans",
    description: "Flexible support that evolves with your family's needs.",
    image: "/images/image-3.jpg",
    alt_text: "A carer reviewing a plan with an older woman at home",
    link: "/MoreServices",
  },
  {
    id: "accompaniment",
    title: "Accompaniment & Companionship",
    description:
      "Preserving routine, comfort, and independence at home.",
    image: "/images/accompaniment.jpg",
    alt_text: "A carer walking beside an older woman outdoors",
    link: "/MoreServices",
  },
  {
    id: "transport",
    title: "Transport & Errands Support",
    description:
      "Keeping seniors connected to their community, routines, and appointments.",
    image: "/images/image-6.jpg",
    alt_text: "A carer helping an older woman into a car",
    link: "/MoreServices",
  },
  {
    id: "care-coordination",
    title: "Care Coordination Services",
    description:
      "Streamlining the details so you can focus on being a family.",
    image: "/images/image-7.jpg",
    alt_text: "A carer taking notes beside an older woman",
    link: "/MoreServices",
  },
  {
    id: "admin-virtual",
    title: "Administrative & Virtual Support",
    description:
      "Remote digital support and appointment coordination for families near and far.",
    image: "/images/image-8.jpg",
    alt_text:
      "A carer helping an older woman with paperwork at a bookshelf",
    link: "/MoreServices",
  },
];

export const PACKAGESPRICING = [
  {
    type: "package",
    hours: "2 hours / week",
    title: "The Essential Check-In",
    description:
      "Perfect for independent older adults who just need a helping hand with weekly logistics.",
    included: [
      "Weekly grocery shopping",
      "Post office or pharmacy errands",
      "Library trips",
      "Light administrative form-filling",
    ],
    standard: "€45/hr · €360/month",
    price: "€90/week · €360/month",
    featured: false,
    bookingUrl:
      "https://tidycal.com/cairdeconcierege/30-minute-meeting",
  },

  {
    type: "package",
    hours: "4 hours / week",
    title: "The Independence Package",
    description:
      "A balanced blend of practical household support and meaningful social connection.",
    included: [
      "Consistent social companionship",
      "Hospital or GP accompaniment",
      "Light meal preparation",
      "Local neighbourhood walks",
    ],
    standard: "€40/hr · €640/month",
    price: "€160/week · €640/month",
    featured: true,
    bookingUrl:
      "https://tidycal.com/cairdeconcierege/60-minute-meeting",
  },

  {
    type: "package",
    hours: "8 hours / week",
    title: "The Premium Peace of Mind Package",
    description:
      "Comprehensive, high-level lifestyle coordination for busy families wanting total reassurance.",
    included: [
      "Multiple social and community outings",
      "Accompaniment for hospital or GP appointments",
      "Light home tidying",
      "Fresh meal preparation and assembly several times a week",
    ],
    standard: "€35/hr · €1,120/month",
    price: "€280/week · €1,120/month",
    featured: false,
    bookingUrl:
      "https://tidycal.com/cairdeconcierge/the-premium-peace-of-mind-package-1-120-month",
  },

  {
    type: "trial",
    hours: "Single 2-hour visit",
    title: "Trial Visit",
    description:
      "New to Cairde? Start with a single 2-hour visit, no commitment, just a chance to meet your companion and see if we're the right fit.",
    included: [
      "Meet your companion",
      "Experience our support",
      "No ongoing commitment",
    ],
    standard: "€65/hour",
    price: "€130 total · 2 hours minimum",
    featured: false,
    bookingUrl:
      "https://tidycal.com/cairdeconcierge/trial-visit-not-less-than-2hour-130-total",
  },

  {
    type: "adhoc",
    hours: "4-hour minimum",
    title: "Ad-Hoc Support",
    description:
      "For occasional, non-recurring support, no ongoing commitment, just book the hours you need.",
    included: [
      "Occasional support",
      "Flexible scheduling",
      "No recurring commitment",
    ],
    standard: "€50/hour",
    price: "€200/hour · 4-hour minimum",
    featured: false,
    bookingUrl:
      "https://tidycal.com/cairdeconcierge/ad-hoc-support-4-hours-one-off-200",
  },
];

export const Project = [
  {
    id: "senior-home-safety-audit",
    tag: "Home Safety",
    title: "Senior Home Safety & De-Cluttering Audit",
    subtitle: "A thorough, practical walkthrough for proactive fall prevention.",
    intro:
      "Falls are one of the leading causes of lost independence for older adults. Our home safety audit identifies hidden hazards before they cause an accident.",
    details: [
      {
        label: "The service",
        text: "a meticulous, room-by-room walkthrough of your loved one's home, covering high-risk areas including cluttered walkways, loose rugs, poorly lit staircases, and bathrooms lacking adequate stability support.",
      },
      {
        label: "What you receive",
        text: "a clear written report outlining our safety observations and recommending practical, cost-effective modifications. This is a practical walkthrough, not a substitute for a formal occupational therapy assessment.",
      },
      {
        label: "The seamless add-on",
        text: "if modifications are needed (grab rails, secured carpets, decluttering), we act as your project manager, sourcing, booking, and overseeing trusted, fully insured local tradespeople.",
      },
    ],
    price: "€180 flat fee",
    priceNote: "Report included · installation invoiced separately",
  },
  {
    id: "tech-independence-masterclass",
    tag: "Digital Skills",
    title: "The Tech Independence Masterclass",
    subtitle: "Bridging the digital gap to keep your family connected, safe, and close.",
    intro:
      "Isolation can take a heavy toll on a senior's wellbeing. We help older adults confidently master modern communication tools so they can stay in daily contact with grandchildren and extended family.",
    details: [
      {
        label: "The service",
        text: "a dedicated, gentle, one-on-one digital lifestyle setup, helping select, purchase, and configure senior-friendly technology such as iPads, Amazon Echo Show displays, digital photo frames, or medication reminder apps.",
      },
      {
        label: "What's included",
        text: "full configuration of communication accounts (WhatsApp, FaceTime/Skype, email), plus a bespoke, laminated, large-print 'cheat sheet' card with step-by-step instructions.",
      },
      {
        label: "",
        text: "Two personalised, 1-hour coaching sessions in their home to build confidence at their own pace.",
      },
    ],
    price: "€250 flat fee",
    priceNote: "Hardware/devices not included",
  },
  {
    id: "welcome-home-discharge-package",
    tag: "Hospital Transition",
    title: "The \"Welcome Home\" Hospital Discharge Package",
    subtitle: "A warm, safe, fully prepared home after a hospital stay.",
    intro:
      "Leaving hospital after a medical procedure or extended stay can be an incredibly stressful transition for both the patient and their family. We step in to manage the homecoming, with your written authorisation to liaise with the hospital discharge team.",
    details: [
      {
        label: "Pre-arrival preparation",
        text: "we coordinate a professional deep clean of the home, ensure the heating is on, and safety-check the property.",
      },
      {
        label: "Home essentials",
        text: "we use online grocery services to stock the fridge and pantry with fresh food and essentials.",
      },
      {
        label: "Prescription collection",
        text: "we liaise with the hospital discharge team and collect necessary prescriptions from the local chemist.",
      },
      {
        label: "Seamless arrival",
        text: "we arrange public transport or a taxi (paid for by the client) and are there to personally welcome them at the door, help them unpack, and settle in with a hot cup of tea.",
      },
    ],
    price: "€450 flat fee",
    priceNote: "Hardware/devices not included",
  },
  {
    id: "right-sizing-move-manager",
    tag: "Downsizing",
    title: "The Right-Sizing Move Manager",
    subtitle: "Handling the overwhelming logistics of downsizing, so you can focus on family.",
    intro:
      "Helping a parent downsize from a lifetime family home into a smaller, more manageable apartment or retirement community is emotionally and physically exhausting. We act as your project manager for the move.",
    details: [
      {
        label: "De-cluttering & cataloguing",
        text: "we gently help your parents sort through belongings, cataloguing items to keep, donate, or sell.",
      },
      {
        label: "Sourcing & coordination",
        text: "we obtain quotes from trusted, insured removal companies and manage them on moving day.",
      },
      {
        label: "Sale & donation coordination",
        text: "we coordinate the sale of furniture via premium local platforms and manage charity donations, with clear written terms on how proceeds are handled.",
      },
      {
        label: "New home setup",
        text: "we ensure the new space is fully unpacked, with furniture placed, clothes hung, and tech (TV, Wi-Fi, phone) operational on day one.",
      },
    ],
    price: "From €1,000",
    priceNote: "Final quote depends on scope",
  },
];


export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  image: string;
  alt: string;
  title: string;
  excerpt: string;
  href: string;
  author: string;
  date: string;
  readTime: string;
  metaDescription: string;
  keywords: string[];
  content: BlogSection[];
};

export const Blog: BlogPost[] = [
  {
    id: "fair-deal-scheme-guide",
    slug: "fair-deal-scheme-guide",
    image: "/images/blog.png",
    alt: "Older couple sitting together on a porch",
    title: "How the Fair Deal Scheme Works: A Step-by-Step Guide for Families",
    excerpt:
      "Navigating the Fair Deal Scheme can feel overwhelming. Here is a clear, plain-English guide to help Dublin families understand how the process works from start to finish.",
    href: "/Blog/fair-deal-scheme-guide",
    author: "Cairde Concierge",
    date: "2026-07-14",
    readTime: "8 min read",
    metaDescription:
      "A plain-English guide to Ireland's Nursing Home Support Scheme for families in Dublin  eligibility, how assets are assessed, how to apply, and what Cairde Concierge can do to help.",
    keywords: [
      "Nursing Home Support Scheme Ireland",
      "Nursing Home Support Scheme Dublin",
      "nursing home support scheme",
      "HSE nursing home support",
      "Nursing Home Support Scheme application Ireland",
      "elderly care funding Ireland",
      "senior care Dublin",
    ],
    content: [
      {
        paragraphs: [
          "If your parent or loved one is approaching the point where residential nursing home care may be needed, you have probably heard the term 'Fair Deal Scheme'. The scheme formally called the Nursing Home Support Scheme (NHSS) is a Government programme that helps cover the cost of long-term residential care in Ireland. Yet for most families, the paperwork, financial assessments, and waiting times can feel deeply confusing at a moment that is already emotionally charged.",
          "This guide walks you through each stage of the process in plain English, so you can make informed decisions with confidence.",
        ],
      },
      {
        heading: "What is the Fair Deal Scheme?",
        paragraphs: [
          "The Fair Deal Scheme is an Irish Government initiative administered by the HSE. It was introduced to ensure that no one is denied necessary nursing home care purely because of cost. Under the scheme, the State contributes a significant portion of the cost of approved nursing home care, and the resident contributes a portion based on their means.",
          "Broadly, you contribute 80% of your assessable income (for example, pension income) and 7.5% per year of the value of any assets including property for a maximum of three years. After three years, no further contribution is taken from the principal private residence. The State pays the balance.",
        ],
      },
      {
        heading: "Am I eligible for the Fair Deal Scheme?",
        paragraphs: [
          "To be eligible, the person requiring care must: be ordinarily resident in Ireland, need long-term nursing home care (assessed by an HSE needs assessment), and have a Personal Public Service (PPS) number.",
          "There is no age restriction, but the scheme is primarily used by older adults. A financial assessment and a care needs assessment are both required before approval is granted.",
        ],
      },
      {
        heading: "Step 1 – The Care Needs Assessment",
        paragraphs: [
          "The first formal step is a care needs assessment carried out by an HSE assessor. This assessment looks at your loved one's physical, mental, and social wellbeing to determine whether long-term nursing home care is the most appropriate option.",
          "It is worth knowing that this assessment considers all care options including home support so it is not automatically an endorsement of nursing home placement. If your loved one can remain at home safely with the right support, the assessor will indicate this.",
        ],
      },
      {
        heading: "Step 2 – The Financial Assessment",
        paragraphs: [
          "A financial assessment is carried out simultaneously by the HSE. All income and assets are taken into account. Income includes the State Pension, occupational pension, rental income, and any other regular income. Assets include savings, investments, and property (other than the family home, which is capped at three years' contribution).",
          "Importantly, assets transferred in the five years before the application are still taken into account under what is called the 'look-back' provision. It is advisable to seek independent legal and financial advice before making significant asset transfers.",
        ],
      },
      {
        heading: "Step 3 – Choosing an Approved Nursing Home",
        paragraphs: [
          "Once assessed, you can choose any HSE-approved nursing home public, voluntary, or private that has a place available and has agreed to accept Fair Deal residents. The HSE publishes an up-to-date list of approved providers.",
          "Prices vary between nursing homes. If you choose a home that charges more than the Fair Deal rate for that type of care, the resident (or family) is responsible for the 'top-up' difference. It is worth comparing homes carefully and visiting in person.",
        ],
      },
      {
        heading: "Step 4 – Applying for a Nursing Home Loan (the Ancillary State Support)",
        paragraphs: [
          "If your loved one's main asset is their home and they cannot afford their 7.5% annual property contribution from income, they can apply for an Ancillary State Support (ASS) also known as the 'nursing home loan'. Under this arrangement, the State pays the property contribution on your behalf, and the amount is repaid (with interest) when the property is eventually sold, either during the person's lifetime or from their estate after death.",
          "This means that entering a nursing home does not automatically require selling the family home. The loan is registered as a charge on the property with the Property Registration Authority.",
        ],
      },
      {
        heading: "How Cairde Concierge Can Help",
        paragraphs: [
          "Navigating the Fair Deal process involves gathering a considerable amount of documentation financial statements, property deeds, pension details, and medical records while simultaneously supporting a parent who may be anxious or unwell. This is where our Care Coordination service comes in.",
          "We can sit with you and your loved one to help gather paperwork, liaise with solicitors and financial advisors, assist with HSE correspondence, and support your parent through the transition. We are not a legal or financial service, but we are experienced in coordinating the moving parts so that families feel less overwhelmed.",
          "If your loved one is not yet at the stage of needing residential care, our home support packages can often help them remain comfortably and safely in their own home for longer delaying or avoiding the Fair Deal process entirely.",
        ],
      },
    ],
  },
  {
    id: "signs-parent-needs-support",
    slug: "signs-parent-needs-support",
    image: "/images/blog-2.png",
    alt: "Carer laughing with an older woman at home",
    title: "7 Signs Your Ageing Parent in Dublin May Need Extra Support at Home",
    excerpt:
      "The subtle changes families often notice, and how the right support can make everyday life easier before a crisis point is reached.",
    href: "/Blog/signs-parent-needs-support",
    author: "Cairde Concierge",
    date: "2026-07-28",
    readTime: "6 min read",
    metaDescription:
      "Seven early warning signs that your elderly parent in Dublin may benefit from extra home support and practical steps families can take before a crisis occurs.",
    keywords: [
      "signs elderly parent needs help Dublin",
      "ageing parent support Dublin",
      "elderly home support Ireland",
      "senior care signs Dublin",
      "home help for elderly Dublin",
      "elder care Dublin",
    ],
    content: [
      {
        paragraphs: [
          "It rarely happens overnight. The moment families realise a parent needs more support is usually not a single dramatic event it is a quiet accumulation of small changes noticed across multiple visits. A fridge that is almost empty. A pile of unopened post. A missed appointment. A parent who seems a little less steady on their feet than they were six months ago.",
          "Spotting these signs early gives families time to put the right support in place before a crisis occurs and it allows your parent to remain in their own home, on their own terms, for longer. Here are seven of the most common signals to watch for.",
        ],
      },
      {
        heading: "1. Missing Appointments or Important Tasks",
        paragraphs: [
          "GP appointments, medication reviews, optician visits, and dental check-ups are easy to let slip especially if your parent relies on public transport or is no longer driving. If you notice a pattern of cancelled or forgotten appointments, it may be a sign that the logistics of daily life are becoming harder to manage independently.",
          "Regular accompaniment support can ensure your parent attends every appointment safely and with a familiar, trusted companion by their side.",
        ],
      },
      {
        heading: "2. An Empty Fridge or Skipped Meals",
        paragraphs: [
          "Nutrition is one of the first areas to suffer when an older person is struggling. Getting to the supermarket, carrying heavy bags, and cooking fresh meals becomes genuinely difficult with reduced mobility, low energy, or mild cognitive decline.",
          "Signs to look for include a fridge stocked only with out-of-date condiments, significant weight loss, or a parent who admits to surviving on toast and tea. A weekly grocery shop and light meal preparation can make an immediate and lasting difference to both health and mood.",
        ],
      },
      {
        heading: "3. Unopened Post and Unpaid Bills",
        paragraphs: [
          "A build-up of unopened envelopes especially utility bills, medical correspondence, or bank statements can indicate that the administrative side of life is becoming overwhelming. This is especially common after the loss of a spouse who previously handled household finances.",
          "Left unaddressed, missed bills can lead to disconnected utilities, late payment charges, or in more serious cases financial vulnerability to scams targeting older people.",
        ],
      },
      {
        heading: "4. Forgetting Medication",
        paragraphs: [
          "Medication adherence is critical for managing chronic conditions common in older age heart disease, diabetes, arthritis, and blood pressure conditions. If your parent is forgetting doses, taking double doses, or simply not collecting repeat prescriptions, the health consequences can be serious.",
          "While we do not administer medication (that requires a registered healthcare professional), our team can provide reminders, help collect prescriptions, and flag any concerns to family members.",
        ],
      },
      {
        heading: "5. A Recent Fall or Unsteadiness",
        paragraphs: [
          "Falls are the leading cause of injury-related hospital admission among older adults in Ireland. A single fall even one that causes no immediate injury is a significant warning sign. Many older adults do not tell their family about falls out of a fear of losing independence.",
          "Look for unexplained bruises, a reluctance to walk on certain surfaces, or a parent who is gripping furniture when moving around the house. A home safety walkthrough can identify and address hazards before a fall occurs.",
        ],
      },
      {
        heading: "6. Social Withdrawal and Reduced Activity",
        paragraphs: [
          "Is your parent leaving the house less? Turning down invitations from friends? Stopping hobbies they previously loved? Social isolation and withdrawal are not simply a sad but inevitable part of ageing they are strong predictors of cognitive decline, depression, and physical deterioration.",
          "Regular companionship a familiar face who visits consistently, shares conversation, and accompanies your parent on outings has been shown to have measurable positive effects on both mental and physical health.",
        ],
      },
      {
        heading: "7. The House Feels Different",
        paragraphs: [
          "Trust your instincts. If the home that was always spotless now has unwashed dishes left for days, if there is an unfamiliar smell, or if the garden that was always tended is now overgrown, something has changed in your parent's daily routine.",
          "These environmental signs are often the most striking for adult children visiting from a distance. They point to a reduced capacity to manage the ordinary tasks that make a home feel like home.",
        ],
      },
      {
        heading: "What to Do Next",
        paragraphs: [
          "If you recognise two or more of these signs, it is worth having an honest, gentle conversation with your parent and then exploring the support options available. Many families find that a few hours of practical, compassionate support each week is enough to restore confidence, safety, and quality of life.",
          "At Cairde Concierge, we begin with a free, no-obligation consultation to understand your parent's needs, preferences, and routines. We then match them with a consistent, carefully selected support specialist. There are no long-term contracts just dependable, person-centred support delivered with warmth.",
        ],
      },
    ],
  },
  {
    id: "hidden-cost-of-loneliness",
    slug: "hidden-cost-of-loneliness",
    image: "/images/blog-3.png",
    alt: "Older man sitting alone by a window",
    title: "The Hidden Cost of Loneliness: Why Companionship Matters for Senior Wellbeing",
    excerpt:
      "Why social connection matters as we age, and how regular companionship can support a happier, more connected life for older adults in Dublin.",
    href: "/Blog/hidden-cost-of-loneliness",
    author: "Cairde Concierge",
    date: "2026-08-11",
    readTime: "7 min read",
    metaDescription:
      "Research shows loneliness is as harmful as smoking 15 cigarettes a day. Discover how regular companionship supports the mental and physical health of older adults in Dublin.",
    keywords: [
      "loneliness elderly Ireland",
      "senior companionship Dublin",
      "elderly isolation Dublin",
      "companionship for older adults Ireland",
      "senior mental health Dublin",
      "social isolation elderly Dublin",
      "elder companionship service Dublin",
    ],
    content: [
      {
        paragraphs: [
          "We tend to think of loneliness as an emotional experience something that feels unpleasant but does not fundamentally threaten health in the way that a physical illness does. The science tells a very different story.",
          "According to research published by Brigham Young University, chronic loneliness is associated with a 26% increase in the risk of premature death broadly equivalent to smoking 15 cigarettes a day. For older adults living alone in Dublin, this is not a distant statistic. It is a daily reality for a significant and growing portion of the population.",
        ],
      },
      {
        heading: "The Scale of the Problem in Ireland",
        paragraphs: [
          "Age Action Ireland estimates that over 200,000 older people in Ireland experience loneliness on a regular basis. The problem is particularly acute in urban areas, where high-density living can paradoxically increase isolation neighbours pass each other in hallways without knowing names; communities that once gathered around parish halls and local shops have fragmented.",
          "The pandemic accelerated an existing trend. Older adults who had structured social contact through day centres, community groups, and regular visits from family found those routines severed and for many, they never fully resumed. What was framed as a temporary sacrifice has, for some, become a permanent new reality.",
        ],
      },
      {
        heading: "What Loneliness Does to the Body",
        paragraphs: [
          "The health consequences of chronic social isolation are broad and well-documented. Loneliness is associated with elevated cortisol (the stress hormone), higher blood pressure, disrupted sleep, weakened immune function, and accelerated cognitive decline. A landmark study from Rush University Medical Centre found that socially isolated seniors experienced a rate of cognitive decline approximately 70% faster than their socially engaged peers.",
          "For families watching a parent age from a distance, these statistics are sobering. A parent who seems physically well may be quietly deteriorating in ways that a blood test cannot detect.",
        ],
      },
      {
        heading: "Why Professional Companionship is Different from Family Visits",
        paragraphs: [
          "Adult children and grandchildren are often the most important relationships in an older person's life  and regular family contact genuinely matters. But family visits, however loving, are rarely consistent enough, or long enough, to address the daily texture of loneliness.",
          "Professional companionship fills a specific and irreplaceable gap. A dedicated companion visits on a regular, predictable schedule and that predictability itself has therapeutic value. Knowing that someone is coming on Tuesday morning gives the week structure and gives the older person something to look forward to.",
          "A good companion also brings a quality of unhurried, undistracted attention that busy adult children, managing their own work and family pressures, genuinely struggle to provide. There is no agenda, no anxious undercurrent of worry, no phone to check just full, present engagement.",
        ],
      },
      {
        heading: "The Difference Between Solitude and Loneliness",
        paragraphs: [
          "It is important to note that not all older adults who live alone are lonely, and not all loneliness is resolved by simply adding more social contact. Some people are deeply introverted and genuinely prefer solitude. Loneliness, in a clinical sense, is the gap between the social connection a person wants and the social connection they have.",
          "This is why good companionship begins with listening. At Cairde Concierge, we take time to understand what kind of company each person actually enjoys whether that is a lively conversation over tea, a quiet shared walk in the local park, a trip to a gallery, or simply having someone alongside while they read. We match each client with a companion whose personality and interests are genuinely compatible.",
        ],
      },
      {
        heading: "Small Connections, Large Impact",
        paragraphs: [
          "The research on what helps is encouraging. Consistent, quality social contact even in modest amounts measurably improves subjective wellbeing, reduces anxiety, and helps older adults feel more confident and motivated to manage their own health.",
          "Families who initially contact us because they are worried about a parent's practical needs getting to appointments, managing the shopping often tell us six months later that the companionship aspect has turned out to be the most valuable part. Their parent is happier, more engaged, and more like themselves again.",
          "If you are concerned about an older family member in Dublin, we would be glad to speak with you. Our free consultation is a conversation, not a sales pitch and it starts with understanding what your loved one actually needs and wants.",
        ],
      },
    ],
  },
];


export const Services = [
  {
    id: "lifestyle-assistance",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Lifestyle Assistance",
    link: "/MoreServices",
    points: [
      "Preserving routine, comfort, and independence at home.",
      "We handle errands, grocery shopping, light housework, and daily routines.",
    ],
  },

  {
    id: "companionship-social",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Companionship & Social Engagement",
    link: "/MoreServices",
    points: [
      "Genuine companionship that brightens daily life.",
      "We focus on interactions that help seniors feel valued, connected, and heard.",
    ],
  },

  {
    id: "personalized-support-plan",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Personalized Support Plan",
    link: "/MoreServices",
    points: [
      "No two seniors are alike, and neither are our plans.",
      "We collaborate closely with your family to design a customized roadmap.",
    ],
  },

  {
    id: "accompaniment-chaperone",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Accompaniment & Chaperone",
    link: "/MoreServices",
    points: [
      "Dignified companionship for hospital appointments.",
      "Dignified companionship for outpatient clinics, family gatherings, and community social activities.",
    ],
  },

  {
    id: "transport-errand-support",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Transport & Errand Support",
    link: "/MoreServices",
    points: [
      "True independence relies on freedom of movement.",
      "We provide seamless, door-to-door assistance via public transport or client-paid taxis.",
    ],
  },

  {
    id: "care-coordination",
    icon: "/images/boxicons_handshake-filled.png",
    title: "Care Coordination Services",
    link: "/MoreServices",
    points: [
      "We organize schedules, keep essential lifestyle information documented.",
      "We refer to trusted, licensed care professionals when medical services are needed.",
    ],
  },
];


export const moreServices =[
  {
     id: "lifestyle-assistance",
     image: "/images/image-1.jpg",
     title:"Lifestyle Assistance",
     text:"Daily life should be enjoyed, not managed. We provide personalised, day-to-day support designed to keep seniors living comfortably and confidently in their own homes. Whether it's running errands, grocery shopping, handling light housework, or keeping track of daily routines, we handle the details so your loved one can focus on what brings them joy. Our goal is to make daily life easier while preserving independence, dignity, and quality of life.",
     link:"www.w3school.com"
  },
  {  
     id: "companionship-social",
     image: "/images/social-engagement.jpg",
     title:"Companionship & Social Engagement",
     text:"Meaningful connection is vital to health and happiness. We offer more than just a watchful eye; we provide genuine companionship that brightens daily life. Whether it's sharing a deep conversation, enjoying a favourite hobby, organising a birthday dinner outing, playing a board game, or taking a stroll through the neighbourhood, we focus on creating uplifting interactions that help seniors feel deeply valued, connected, and heard.",
     link:"www.w3school.com"
  },
  {  
     id:"personalised-support-plans",
     image: "/images/image-3.jpg",
     title:"Personalised Support Plans",
     text:"No two seniors are alike, and neither are our support plans. We collaborate closely with you and your loved one to design a customised roadmap that respects their unique preferences, daily routines, and lifestyle. As life changes, we adapt right along with you. From managing daily schedules and coordinating services to keeping long-distance families informed and connecting you with trusted community resources, we handle the logistics so you can focus on being a family.",
     link:"www.w3school.com"
  },
  {  
     id: "accompaniment-companionship",
     image: "/images/accompaniment.jpg",
     title:"Accompaniment & Companionship",
     text:"Dignified companionship for hospital appointments, outpatient clinics, family gatherings, and community social activities.",
     link:"www.w3school.com"
  },
  {
    id: "transport-errands-support",
    image: "/images/image-6.jpg",
    title:"Transport & Errands Support",
    text:"True independence relies on freedom of movement. We ensure seniors never have to miss an appointment or skip an outing. From navigating medical visits to running errands like grocery shopping, prescription collection, post office runs, dry-cleaning collections and light domestic tidying, to enjoying social events, we provide seamless, door-to-door assistance.We do not provide transportation for clients in our own vehicle, nor do we drive clients' personal vehicles. All travel to appointments or social events is done via public transport or taxis, paid for by the client.",
    link:"www.w3school.com"
  },
  {
    id: "care-coordination",
    image: "/images/image-7.jpg",
    title:"Care Coordination Services",
    text:"Navigating the logistics of senior life shouldn't be a source of stress. We provide organised, non-medical support to help seniors and their families manage daily responsibilities, appointments, and external services with ease. As your dedicated point of contact, we keep tasks scheduled, information organised, and communication clear, giving you total clarity without the clinical feel.",
    link:"www.w3school.com"
  },
  {
    id: "administrative-virtual-support",
    image: "/images/image-8.jpg",
    title:"Administrative & Virtual Support",
    text:"At Cairde Concierge, we offer a 100% virtual administration support service to families across Ireland and the diaspora abroad. You don't need to be local to Dublin to use this we handle everything securely online and via phone.",
    link:"www.w3school.com"
  }
]