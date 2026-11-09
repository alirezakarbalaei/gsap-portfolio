const navLinks = [
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "about",
    title: "About ME",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const recentExperiences = [
  {
    role: "Frontend Team-Lead",
    company: "Balam Logistics",
    period: "March 2023 – March 2026 | Full Time",
    points: [
      "Built data-heavy dashboards and operational workflows for logistics ERP",
      "Reduced pressure on business manual workflows by 63% through optimized dashboards and automated processes",
      "Implemented PWAs with real-time updates, push notifications, and live fleet maps (OpenStreetMap + Leaflet)",
      "Streamlined delivery pipeline with Git flow, CI/CD, and release management",
    ],
  },
  {
    role: "Frontend",
    company: "Badbadak",
    period: "March 2022 – March 2023 | Full Time",
    points: [
      "Supported up to +4,000 concurrent players during peak activity",
      "Developed a B2C blockchain game launched on steam and token launched on Uniswap and Binance",
      "Collaborated with cross-functional teams to deliver scalable frontend architecture",
    ],
  },
  {
    role: "Frontend",
    company: "Parax Co",
    period: "March 2019 – March 2022 | Full Time",
    points: [
      "Developed admin panels and CMS for Sarmad Insurance and Saipa operations teams",
      "Optimized complex forms, dashboards, and reporting flows",
    ],
  },
];

const moreExperiences = [
  {
    role: "Frontend",
    company: "Gotimate",
    period: "Oman | Remote | 2020 | Freelance",
    points: [
      "Conducted blockchain network market research to inform strategic development decisions",
    ],
  },
  {
    role: "Frontend",
    company: "Loaningo",
    period: "Oman | Remote | 2020 | Freelance",
    points: [
      "Built frontend for a crypto lending platform, improving user experience and loan management flows",
    ],
  },
  {
    role: "Frontend",
    company: "Viola",
    period: "March 2017 – March 2019 | Full Time",
    points: [
      "Enhanced fintech platform for global payments and virtual cards, optimizing transaction workflows and UX",
      "Developed dedicated WordPress plugins and custom themes tailored to business requirements",
    ],
  },
  {
    role: "Fullstack",
    company: "Nagila",
    period: "March 2018 – March 2019 | Full Time",
    points: [
      "Delivered a full-featured CRM with smooth UI and backend integration for customer management",
    ],
  },
];

const featureLists = [
  "Code that feels intuitive",
  "Interfaces that spark delight",
  "Smooth interactions every time",
  "Thoughtfully crafted experiences",
];

const mindSet = [
  "User emotions at the core",
  "Designs that resonate deeply",
  "Empathy-driven decisions in action",
  "Moments that leave an impact",
];

const contactInfo = {
  heading: "Where to Find Me",
  phone: "+989197289072",
  email: "alirezakarbalaeimorad@gmail.com",
};

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const portFolioData = {
  ballam: [
    {
      id: 1,
      name: "Splahs Screen",
      image: "/images/portfolio/ballam/ballam1.jpg",
      title: "Splash Screen",
      description:
        "Some crucial logic is implemented under the splash screen for the PWA.",
    },
    {
      id: 2,
      name: "Onboarding",
      image: "/images/portfolio/ballam/ballam2.jpg",
      title: "Onboarding",
      description: "Some information about the application.",
    },
    {
      id: 3,
      name: "Login",
      image: "/images/portfolio/ballam/ballam3.jpg",
      title: "Login",
      description: "Login page with OTP.",
    },
    {
      id: 4,
      name: "Auth",
      image: "/images/portfolio/ballam/ballam4.jpg",
      title: "Authentication & Authorizatiopn",
      description:
        "Guide the user through the authentication flow, implemented based on business logic.",
    },
    {
      id: 5,
      name: "Orders",
      image: "/images/portfolio/ballam/ballam5.jpg",
      title: "Driver Orders",
      description:
        "Allow drivers to see orders (Active, Finished, Canceled by Driver) and manage requests based on their needs.",
    },
    {
      id: 6,
      name: "Order Details",
      image: "/images/portfolio/ballam/ballam6.jpg",
      title: "Information about selected order",
      description:
        "The initial data needed for a driver to see and accept an order, completing the process.",
    },
    {
      id: 7,
      name: "Filters",
      image: "/images/portfolio/ballam/ballam7.jpg",
      title: "Cargo Details",
      description:
        "Bottom sheet filter based on newest, oldest, highest weight, lowest weight, and nearest orders.",
    },
    {
      id: 8,
      name: "Advanced orders filter",
      image: "/images/portfolio/ballam/ballam8.jpg",
      title: "Filter orders with concies data",
      description: "Search and filter to find the exact order you want.",
    },
    {
      id: 9,
      name: "Load Information",
      image: "/images/portfolio/ballam/ballam9.jpg",
      title: "Push Notifications",
      description:
        "Load information, contact details of consignee and consignor, and navigation data.",
    },
    {
      id: 10,
      name: "Fleet and Fleet Loader type",
      image: "/images/portfolio/ballam/ballam10.jpg",
      title: "Choose your fleet details",
      description:
        "Choose your fleet specifications to see the related orders that match your vehicle.",
    },
  ],
  pianoJ: [
    {
      id: 1,
      name: "Piano J",
      image: "/images/portfolio/pianoj/pianoj.png",
      title: "Music Notes Store",
      description:
        "Music shop that generate songs and sells the note as a digital product",
    },
  ],
};

export {
  navLinks,
  recentExperiences,
  moreExperiences,
  featureLists,
  mindSet,
  contactInfo,
  socials,
  portFolioData,
};
