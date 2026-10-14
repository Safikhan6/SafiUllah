// ============================================================
// ALL WEBSITE CONTENT LIVES HERE. Edit text only in this file.
// Search for "TODO" to find everything you still need to fill in.
// ============================================================
import type { IconName } from "@/components/Icons";

export const site = {
  name: "Safi Ullah",
  shortName: "Safiullah",
  role: "Full-Stack Web Developer",
  // Set NEXT_PUBLIC_SITE_URL in your hosting settings after you buy a domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // TODO: replace both placeholders with your own details.
  // While a value starts with "YOUR_", that contact option stays inactive.
  contact: {
    email: "YOUR_EMAIL_ADDRESS",
    whatsapp: "YOUR_WHATSAPP_NUMBER", // digits only with country code, e.g. 923001234567
  },

  positioning:
    "I help startups and businesses build complete web applications and digital products that improve their online presence, streamline their work, and help them grow.",

  hero: {
    eyebrow: "Full-Stack Web Developer",
    before: "I build web applications that help businesses ",
    highlight: "grow",
    after: ".",
    primaryCta: "Start a Project",
    secondaryCta: "View My Work",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
  ],

  clients: [
    { title: "Startup founders", text: "Turning a product idea into something real." },
    { title: "Small & medium businesses", text: "A stronger online presence and smoother daily work." },
    { title: "Established businesses", text: "Modernising and extending existing digital products." },
  ],

  servicesIntro: {
    title: "What I can build for your business",
    text: "Tell me the problem you want to solve. I will recommend the service and the next step that fit your situation.",
  },

  services: [
    {
      icon: "code" as IconName,
      title: "Custom Web Applications",
      get: "A web application designed around how your business actually works, replacing manual steps and disconnected tools.",
      value: "Less manual work and fewer mistakes, so your team can focus on the business.",
      useful: "Your daily process does not fit off-the-shelf software.",
    },
    {
      icon: "layers" as IconName,
      title: "SaaS Product Development",
      get: "Your product idea turned into a working platform with accounts, dashboards and the features your users need.",
      value: "A real product you can put in front of users, built so it can keep growing.",
      useful: "You have a product idea and need it built properly.",
    },
    {
      icon: "globe" as IconName,
      title: "Business & Professional Websites",
      get: "A clear, professional website that presents your services, work and reviews in one place.",
      value: "Visitors understand what you do and feel confident getting in touch.",
      useful: "Your online presence looks outdated, or you do not have a website yet.",
    },
    {
      icon: "cart" as IconName,
      title: "E-commerce Development",
      get: "An online store with a smooth buying journey and an easy way for you to manage products and orders.",
      value: "A simple way to sell online without a complicated back office.",
      useful: "You want to start selling online, or outgrow your current store.",
    },
    {
      icon: "layout" as IconName,
      title: "UI/UX & Product Prototyping",
      get: "Screens and a clickable prototype of your idea before full development begins.",
      value: "You test decisions early, which avoids expensive changes later.",
      useful: "Your idea is still taking shape, or you need to show it to others.",
    },
    {
      icon: "cloud" as IconName,
      title: "Deployment & Technical Support",
      get: "Your website or application launched safely on the web, with help available afterwards.",
      value: "A smooth go-live and someone to turn to when something needs fixing or improving.",
      useful: "You have a project that needs to go live, or needs ongoing care.",
    },
  ],

  workIntro: {
    title: "Selected work",
    text: "One real, live project today. Demo projects are clearly marked until I add more real client work.",
  },

  // Only real information. Nothing invented.
  projects: [
    {
      slug: "acme-softs",
      title: "Acme Softs",
      status: "live" as "live" | "demo",
      type: "Professional business website",
      url: "https://www.acmesofts.com/",
      domain: "www.acmesofts.com",
      // Optional: save a real screenshot as public/projects/acme-softs.png
      // then set image: "/projects/acme-softs.png"
      image: "",
      summary:
        "A complete professional website that presents the client's services, work and reviews online.",
    },
    {
      slug: "demo-saas",
      title: "SaaS Business Management Platform",
      status: "demo" as "live" | "demo",
      type: "Demo project",
      url: "",
      domain: "",
      image: "",
      summary: "A demo product to show how I approach SaaS platforms. Details coming soon.",
    },
    {
      slug: "demo-ecommerce",
      title: "E-commerce Web Application",
      status: "demo" as "live" | "demo",
      type: "Demo project",
      url: "",
      domain: "",
      image: "",
      summary: "A demo store to show how I approach e-commerce applications. Details coming soon.",
    },
  ],

  caseStudy: {
    heading: "Acme Softs case study",
    snapshot: [
      { label: "Project", value: "Acme Softs" },
      { label: "Type", value: "Professional business website" },
      { label: "Status", value: "Live" },
      { label: "My role", value: "Website development" },
    ],
    blocks: [
      {
        label: "Client need",
        text: "The client needed a professional website to present their services, work, reviews and online presence.",
      },
      {
        label: "Challenge",
        text: "The client had business information and ideas, but no clearly defined website structure or design.",
      },
      {
        label: "My role",
        text: "I handled the website development and converted the client's requirements and ideas into the final website.",
      },
      {
        label: "What I built",
        text: "A complete professional business website with the required content and online presentation, including online content such as Fiverr reviews.",
      },
      {
        label: "Result",
        text: "The website was successfully deployed and the client was happy with the result.",
      },
    ],
    note: "SEO optimization is planned as a separate stage.",
    cta: "Visit Live Website",
  },

  // No fake reviews. Add real ones only with the client's permission.
  // Example: { name: "Client Name", role: "Company", text: "..." }
  reviews: [] as { name: string; role: string; text: string }[],

  about: {
    title: "A developer who starts with your business",
    // TODO: replace with your finalized About text.
    paragraphs: [
      "I'm Safi Ullah, a full-stack web developer. I help startups and businesses build complete web applications and digital products that improve their online presence, streamline their work, and help them grow.",
      "I start by understanding your business, then plan, prototype and build module by module, so you always know what is being built and why.",
    ],
    facts: [
      { label: "Role", value: "Full-Stack Web Developer" },
      { label: "Works with", value: "Startups, small & medium businesses, established businesses" },
      { label: "Focus", value: "Web applications, SaaS, business websites, e-commerce" },
      { label: "Approach", value: "Audit first, then plan, prototype, build and support" },
    ],
  },

  processIntro: {
    title: "A clear process, from first call to launch",
    text: "You always know what happens next, what you will see, and when you will be asked for feedback.",
    promises: [
      "I understand your business before I write code",
      "I audit what you already have",
      "I recommend the next step",
      "We agree scope and structure upfront",
      "I build module by module",
      "We review each completed part together",
      "I deploy and support the final product",
    ],
  },

  process: [
    { step: "Business & Product Audit", text: "I start by understanding your business, your users and your current website or product, so we solve the right problem." },
    { step: "Planning & Proposal", text: "I recommend the next step, then we agree scope, structure and a clear proposal before building starts." },
    { step: "Prototype / Demo", text: "You see and test the idea early, so changes are cheap and decisions are confident." },
    { step: "Module Development", text: "I build feature by feature, so you see steady progress instead of waiting for one big delivery." },
    { step: "Testing & Review", text: "Each completed module is reviewed with you and fixed before we move on." },
    { step: "Deployment & Support", text: "Your product goes live safely, and I stay available to help after launch." },
  ],

  contactSection: {
    title: "Start a project",
    text: "Tell me what you want to build. The more you share, the more useful my first reply will be.",
    include: [
      "What you want to build",
      "Your business or product",
      "Your main requirements",
      "The service you need",
      "Timeline or budget, if you have one",
    ],
  },

  // Hidden until you verify the exact certificate names.
  showCredentials: false,
  credentials: [
    "Google IT (Coursera)", // TODO: exact name
    "GitHub certification", // TODO: exact name
    "UI/UX certification", // TODO: exact name
    "Google AI certification", // TODO: exact name
  ],
};

export const isSet = (v: string) => v.trim() !== "" && !v.startsWith("YOUR_");
