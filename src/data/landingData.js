// HERO
import dream1 from "../assets/dream1.jpg";
import dream2 from "../assets/dream2.jpeg";
import dream3 from "../assets/dream3.jpg";
export const HERO_TABS = ["BUY", "RENT", "COMMERCIAL", "PLOT / LAND"];

export const PROPERTY_TYPE_OPTIONS = ["Residential", "Villa", "Studio"];
export const CATEGORY_OPTIONS = ["Apartment", "Villa", "Studio"];
export const BUDGET_OPTIONS = ["₦ 20M - ₦ 80M", "Below ₦ 20M", "Above ₦ 80M"];

// DREAM HOME
export const DREAM_HOME_CARDS = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment in Ikeyi Phase I",
    location: "Ikeyi, Lagos",
    price: "₦ 45M",
    image: dream1,
    badgesTop: ["PROTRA Verified", "Fly the Sea", "New construction"],
  },
  {
    id: 2,
    title: "Skyline View Apartment in Ikeyi Phase I",
    location: "Ikeyi, Lagos",
    price: "₦ 48M",
    image: dream2,
    badgesTop: ["PROTRA Verified","City View", "New construction"],
  },
  {
    id: 3,
    title: "Premium 3BHK Apartment in Ikeyi Phase I",
    location: "Ikeyi, Lagos",
    price: "₦ 52M",
    image: dream3,
    badgesTop: ["PROTRA Verified","Fly the Sea", "High rise"],
  },
];

// src/data/landingData.js

export const TOP_LOCATIONS = [
  {
    id: "ikoyi",
    name: "Ikoyi",
    type: "Hotspot",
    desc: "High demand zone",
    image: dream1,
    propertyTitle: "3BHK Premium Villa",
    propertyLocation: "Victoria Island",
    price: "₦ 55M",
    badge: "Ikoyi",
    positionClass: "top-[38%] left-[60%]",
  },
  {
    id: "lekki",
    name: "Lekki",
    type: "Hotspot",
    desc: "Luxury area",
    image: dream1,
    propertyTitle: "Modern Waterfront Apartment",
    propertyLocation: "Lekki Phase I",
    price: "₦ 40M",
    badge: "Lekki",
    positionClass: "top-[30%] left-[30%]",
  },
  {
    id: "victoria-island",
    name: "Victoria Island",
    type: "Hotspot",
    desc: "Business hub",
    image: dream1,
    propertyTitle: "Skyline View Condo",
    propertyLocation: "Victoria Island",
    price: "₦ 60M",
    badge: "VI",
    positionClass: "top-[50%] left-[45%]",
  },
  {
    id: "ajah",
    name: "Ajah",
    type: "Hotspot",
    desc: "Growing area",
    image: dream1,
    propertyTitle: "Family Friendly Duplex",
    propertyLocation: "Ajah",
    price: "₦ 25M",
    badge: "Ajah",
    positionClass: "top-[65%] left-[70%]",
  },

  // 🔥 NEW
  {
    id: "yaba",
    name: "Yaba",
    type: "Hotspot",
    desc: "Tech hub & colleges",
    image: dream1,
    propertyTitle: "Urban Tech Studio Apartment",
    propertyLocation: "Yaba, Lagos",
    price: "₦ 30M",
    badge: "Yaba",
    positionClass: "top-[42%] left-[25%]",
  },
  {
    id: "surulere",
    name: "Surulere",
    type: "Hotspot",
    desc: "Prime central area",
    image: dream1,
    propertyTitle: "Comfort Family Apartment",
    propertyLocation: "Surulere",
    price: "₦ 28M",
    badge: "Surulere",
    positionClass: "top-[58%] left-[40%]",
  },
];



export const POPULAR_CITIES = [
  {
    city: "Lagos",
    properties: "327 properties",
    image:
      dream1,
  },
  {
    city: "Abuja",
    properties: "279 properties",
    image:dream1,
  },
  {
    city: "Port Harcourt",
    properties: "147 properties",
    image:
      dream1,
  },
  {
    city: "Ibadan",
    properties: "121 properties",
    image:
      dream1,
  },
];

export const SERVICES = [
  {
    title: "Property Verification",
    description:
      "PROTIVA Agents verify documents ensure your property is genuine and dispute-free.",
      image:dream1,
  },
  {
    title: "Legal & Documentation",
    description:
      "We help review titles, deeds, and agreements so you can buy with complete confidence.",
      image:dream1,
  },
  {
    title: "Renovation & Handover",
    description:
      "Basic fixes to full upgrades PROTIVA partners ensure your new home is move-in ready.",
      image:dream1,
  },
  {
    title: "CCTV Renovation Monitoring",
    description:
      "Track your renovation progress from anywhere in the world. With live CCTV coverage",
      image:dream1,
  },
];

export const DEVELOPERS = [
  {
    name: "Landmark Africa Group",
    established: "Estd: 1997",
    projects: "Projects: 11+",
    description:
      "Nigeria's top developers with luxury residential and commercial estates. Known for developments Pinnock Beach Estate in Lekki.",

    tabs: ["Pinnock Beach", "Metro Garde.."],
    properties: {
      "Pinnock Beach": [
        { title: "Pinnock Beach Estate", priceRange: "₦ 21M – ₦ 85M" ,image:dream1 },
        { title: "Another Property", priceRange: "₦ 21M – ₦ 85M", image:dream3 },
         { title: "Beach Estate", priceRange: "₦ 21M – ₦ 85M",image:dream2 },
      ],
      "Metro Garde..": [
        { title: "Metro Gardens", priceRange: "₦ 21M – ₦ 85M", image:dream2 },
        { title: "Metro Towers", priceRange: "₦ 21M – ₦ 85M",   image:dream1 },
      ],
    },
  },

  {
    name: "UACN Property Develop...",
    established: "Estd: 1990",
    projects: "Projects: 30+",
    description:
      "Nigeria's top developers with luxury residential and commercial estates. Known for developments Pinnock Beach Estate in Lekki.",

    tabs: ["Landmark Villa..", "Beach Estate"],
    properties: {
      "Landmark Villa..": [
        { title: "Landmark Village", priceRange: "₦ 21M – ₦ 85M" ,image:dream3 },
      ],
      "Beach Estate": [
        { title: "Beach Estate", priceRange: "₦ 21M – ₦ 85M",image:dream2 },
      ],
    },
  },

  {
    name: "Mixta Africa",
    established: "Estd: 1997",
    projects: "Projects: 9+",
    description:
      "Nigeria's top developers with luxury residential and commercial estates. Known for developments Pinnock Beach Estate in Lekki.",

    tabs: ["Pinnock Beach", "Metro Garde.."],
    properties: {
      "Pinnock Beach": [
        { title: "Pinnock Beach Estate", priceRange: "₦ 21M – ₦ 85M", image:dream1 },
      ],
      "Metro Garde..": [
        { title: "Metro Gardens", priceRange: "₦ 21M – ₦ 85M" ,image:dream2 },
      ],
    },
  },
];


export const OTHER_AREAS = [
  {
    area: "Lekki",
    tag: "Luxury Demand Rising",
    price: "Avg price: ₦ 85M",
  },
  {
    area: "Ajah",
    tag: "Affordable & Growing",
    price: "Avg price: ₦ 24M",
  },
  {
    area: "Ikoyi",
    tag: "Popular among young",
    price: "Avg price: ₦ 31M",
  },
];

export const AGENTS = [
  {
    name: "Chioma Okafor",
    role: "Property Advisor | Ikoyi & VI Specialist",
    location: "Lagos Island, Lagos",
    verified: true,
    topRated: true,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kunle Adeyemi",
    role: "Homes Consultant | Diaspora Clients",
    location: "Victoria Island, Lagos",
    verified: true,
    topRated: false,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fatima Suleiman",
    role: "Sales Strategist | Maitama & Asokoro",
    location: "Abuja",
    verified: true,
    topRated: true,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tunde Balogun",
    role: "Commercial Property Advisor",
    location: "Lekki Phase 1, Lagos",
    verified: true,
    topRated: false,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];


// data/landingData.js

export const FAQ_ITEMS = [
  {
    question:
      "What are the best areas to invest in Lagos real estate?",
    answer:
      "Some of the top investment hotspots in Lagos include Ikoyi, Victoria Island, Lekki Phase 1, Ajah, and Ikeja GRA. These locations offer strong rental demand, good infrastructure, and long-term capital appreciation potential.",
  },
  {
    question:
      "What is the difference between Certificate of Occupancy (C of O) and Governor's Consent?",
    answer:
      "A Certificate of Occupancy is issued by the government to the first person or entity to own a property from the state. Governor’s Consent, on the other hand, is required whenever that property is being transferred to another buyer, confirming the governor’s approval for the new transaction.",
  },
  {
    question:
      "What is the minimum down payment required for buying a house in Nigeria?",
    answer:
      "Most developers and mortgage providers typically request a 20–30% down payment. However, some off-plan and developer-financed projects may accept lower initial deposits spread over construction milestones.",
  },
  {
    question:
      "Can diaspora Nigerians legally buy land or property in Nigeria?",
    answer:
      "Yes. Nigerians in the diaspora can legally purchase property in Nigeria using a trusted representative, power of attorney, or by working with reputable developers and verified agents. Proper title verification and due diligence are essential.",
  },
  {
    question:
      "What are the taxes, fees, and legal charges on real estate transactions?",
    answer:
      "Common costs include legal fees, agency fees, consent fees, stamp duties, registration fees, and in some cases development levies and service charges. These can add 10–15% on top of the property price, depending on the location and property type.",
  },
  {
    question:
      "Why is Lagos considered the top investment destination in Nigeria?",
    answer:
      "Lagos is Nigeria’s commercial hub with high population density, strong rental demand, and constant inflow of businesses and residents. This drives property values, rental yields, and long-term capital growth, making it a prime destination for local and diaspora investors.",
  },
];


export const TESTIMONIALS = [
  {
    name: "Amaka O",
    role: "Duplex Buyer, Lekki Phase 1",
    text: "I was nervous about buying property from abroad, but PROTIVA verified every document and even did a video tour for me. They told me about the specific regulations. Filled out all the documents for me. I felt safe and confident throughout the process.",
    date: "Aug 12, 2025",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Yusuf K.",
    role: "Diaspora Buyer, UK → Lagos",
    text: "PROTIVA Insights showed me where property values are rising. I invested and saw good appreciation. Their team made the process stress-free. Filled out all the documents for me. I felt safe and confident throughout the process.",
    date: "July 22, 2025",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  // aage aur testimonials add kar sakta hai same structure se
];

