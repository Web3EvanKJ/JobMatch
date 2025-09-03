export interface Talent {
  id: string;
  name: string;
  url: string;
  headline: string; // short summary like "Software Architect | Full-Stack Web3/Web2 Dev"
  bio: string; // longer description / about section
  location: string;
  languages: string[];
  tags: string[]; // skills / expertise
  activeStatus: string; // e.g., "Active 3 hours ago"
  joined: string; // "August 2025"
  experience: {
    period: string;
    title: string;
    company: string;
  }[];
  preferences: {
    acceptsCrypto: boolean;
    acceptsFiat: boolean;
    openToRelocation: boolean;
    openToFulltime: boolean;
    openToParttime: boolean;
    remote: boolean;
  };
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  funFact?: string; // like the "Tell us a joke?" part
}

export const talents: Talent[] = [
  {
    id: "1",
    name: "John Doe",
    url: "/assets/talents/john-doe.jpg",
    headline:
      "Software Architect | Full-Stack Web3/Web2 Dev | 6x Azure Certified | Multi-Cloud Evangelist",
    bio: "A seasoned Software Architect transitioning into Web3 with 11+ years of experience across Healthcare, Logistics, Banking, and Ecommerce...",
    location: "Pune, India",
    languages: ["English", "Hindi"],
    tags: [
      "Solidity",
      "Web3.js",
      "TypeScript",
      ".NET 8",
      "Java",
      "Angular",
      "GraphQL",
      "Terraform",
      "Smart Contracts",
    ],
    activeStatus: "Active 3 hours ago",
    joined: "August 2025",
    experience: [
      {
        period: "2014 – 2025",
        title: "Software Architect",
        company: "Various Clients",
      },
    ],
    preferences: {
      acceptsCrypto: true,
      acceptsFiat: true,
      openToRelocation: true,
      openToFulltime: true,
      openToParttime: true,
      remote: true,
    },
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    funFact:
      "Tried building a decentralized AI-powered voting dApp on Azure… it ghosted me like a flaky Web3 node. 😅",
  },
  {
    id: "2",
    name: "Alice Johnson",
    url: "/assets/talents/alice-johnson.jpg",
    headline: "Blockchain Engineer | Ethereum & L2 Scaling Specialist",
    bio: "Alice is a blockchain engineer with 6+ years of experience in Ethereum smart contracts, zk-rollups, and scaling solutions...",
    location: "Berlin, Germany",
    languages: ["English", "German"],
    tags: ["Solidity", "Hardhat", "zk-SNARKs", "Rollups", "DeFi", "Rust"],
    activeStatus: "Active 1 day ago",
    joined: "July 2024",
    experience: [
      {
        period: "2018 – 2025",
        title: "Blockchain Engineer",
        company: "L2 Labs",
      },
    ],
    preferences: {
      acceptsCrypto: true,
      acceptsFiat: false,
      openToRelocation: false,
      openToFulltime: true,
      openToParttime: false,
      remote: true,
    },
    social: { github: "https://github.com/alicechain" },
    funFact:
      "I debug Solidity contracts faster than I debug my cooking recipes.",
  },
  {
    id: "3",
    name: "David Kim",
    url: "/assets/talents/david-kim.jpg",
    headline: "Frontend Developer | React, Next.js, Web3 dApps",
    bio: "David is a frontend developer passionate about user experiences in DeFi apps. Specialized in React, wagmi, and wallet integrations.",
    location: "Seoul, South Korea",
    languages: ["Korean", "English"],
    tags: ["React", "Next.js", "TailwindCSS", "Wagmi", "Ethers.js"],
    activeStatus: "Active 2 hours ago",
    joined: "March 2025",
    experience: [
      { period: "2020 – 2025", title: "Frontend Engineer", company: "DeFiHub" },
    ],
    preferences: {
      acceptsCrypto: true,
      acceptsFiat: true,
      openToRelocation: false,
      openToFulltime: true,
      openToParttime: true,
      remote: true,
    },
    social: { linkedin: "https://linkedin.com/in/davidkim" },
    funFact:
      "I once built a DeFi UI clone in 24 hours for a hackathon and won 🎉.",
  },
  {
    id: "4",
    name: "Maria Lopez",
    url: "/assets/talents/maria-lopez.jpeg",
    headline: "Product Designer | UX for Fintech & Web3",
    bio: "Maria is a UX designer focusing on intuitive fintech and blockchain products. Believes design is the bridge between humans and tech.",
    location: "Madrid, Spain",
    languages: ["Spanish", "English"],
    tags: ["Figma", "UI/UX", "Design Systems", "Crypto UX", "User Research"],
    activeStatus: "Active 5 hours ago",
    joined: "May 2023",
    experience: [
      {
        period: "2019 – 2025",
        title: "Senior Product Designer",
        company: "NeoBank",
      },
    ],
    preferences: {
      acceptsCrypto: false,
      acceptsFiat: true,
      openToRelocation: true,
      openToFulltime: true,
      openToParttime: false,
      remote: true,
    },
    funFact: "I once designed a DAO dashboard theme inspired by Pokémon cards.",
  },
  {
    id: "5",
    name: "Ethan Brown",
    url: "/assets/talents/ethan-brown.jpeg",
    headline: "Smart Contract Auditor | Security Researcher",
    bio: "Ethan is a security researcher specializing in Solidity audits, gas optimizations, and DeFi protocol security.",
    location: "Toronto, Canada",
    languages: ["English", "French"],
    tags: ["Solidity", "Slither", "Foundry", "Audit", "DeFi Security"],
    activeStatus: "Active 12 minutes ago",
    joined: "January 2024",
    experience: [
      {
        period: "2021 – 2025",
        title: "Smart Contract Auditor",
        company: "AuditX",
      },
    ],
    preferences: {
      acceptsCrypto: true,
      acceptsFiat: true,
      openToRelocation: false,
      openToFulltime: true,
      openToParttime: true,
      remote: true,
    },
    funFact:
      "I found a $5M bug in a DeFi protocol during a weekend audit spree.",
  },
];
