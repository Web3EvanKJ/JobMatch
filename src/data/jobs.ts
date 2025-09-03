export interface Job {
  id: string;
  type: string; // Full-time, Internship, etc.
  title: string;
  company: string;
  location: string;

  companyOverview: string;
  jobSummary: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  url: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    type: "Full-time",
    title: "Business Developer",
    company: "Seer",
    location: "Remote",
    companyOverview:
      "Seer is at the forefront of the prediction market industry, providing a platform for individuals to forecast outcomes across sectors like finance, politics, crypto, and governance.",
    jobSummary:
      "We are seeking a Business Developer to help drive the growth of Seer’s prediction market platform.",
    responsibilities: [
      "Identify potential clients across DAOs, corporations, and government agencies.",
      "Craft tailored proposals for prediction market use cases.",
      "Submit proposals via decision makers, DAO proposals, and grant programs.",
      "Attend industry events to identify prospects and partners.",
    ],
    qualifications: [
      "Bachelor’s or Master’s degree in Business, Economics, or related fields.",
      "Experience in business development or partnerships, ideally in crypto/governance.",
      "Understanding of prediction markets and DAO governance.",
      "Excellent communication and persuasion skills.",
    ],
    benefits: [
      "Work on cutting-edge prediction markets and crypto.",
      "Creative, flexible work environment.",
      "Remote-first company culture.",
      "Competitive salary split between crypto and tokens.",
    ],
    url: "/assets/companies/seer.jpeg",
  },
  {
    id: "2",
    type: "Internship",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Berlin, Germany",
    companyOverview:
      "TechNova builds next-generation SaaS platforms for global clients, focusing on usability, performance, and scalability.",
    jobSummary:
      "We are looking for a frontend developer intern to support our engineering team in building user-friendly web applications.",
    responsibilities: [
      "Assist in developing UI components using React and Tailwind.",
      "Collaborate with designers to turn Figma wireframes into code.",
      "Fix minor bugs and write unit tests for frontend features.",
      "Learn and apply best practices in frontend performance and accessibility.",
    ],
    qualifications: [
      "Basic knowledge of HTML, CSS, and JavaScript.",
      "Familiarity with React or another frontend framework.",
      "Willingness to learn quickly and adapt to feedback.",
      "Good problem-solving and teamwork skills.",
    ],
    benefits: [
      "Hands-on experience in a fast-growing SaaS company.",
      "Mentorship from experienced engineers.",
      "Hybrid/remote work flexibility.",
      "Allowance for learning materials and courses.",
    ],
    url: "/assets/companies/technova.jpeg",
  },
  {
    id: "3",
    type: "Full-time",
    title: "Solidity Engineer",
    company: "BlockForge",
    location: "San Francisco, USA",
    companyOverview:
      "BlockForge is a Web3 infrastructure company building secure smart contract tooling and developer-first platforms.",
    jobSummary:
      "We are hiring a Solidity Engineer to design, audit, and deploy smart contracts powering next-generation dApps.",
    responsibilities: [
      "Develop and maintain Solidity smart contracts.",
      "Collaborate with security auditors to ensure best practices.",
      "Write unit and integration tests with Foundry/Hardhat.",
      "Work closely with product teams to deliver new blockchain features.",
    ],
    qualifications: [
      "2+ years of Solidity experience.",
      "Strong understanding of EVM and gas optimization.",
      "Experience with Foundry or Hardhat testing frameworks.",
      "Background in cryptography or DeFi is a plus.",
    ],
    benefits: [
      "Competitive salary and token equity package.",
      "Opportunity to work with leading Web3 developers.",
      "Flexible working hours and remote-first culture.",
      "Conference and learning budget.",
    ],
    url: "/assets/companies/block-forge.png",
  },
  {
    id: "4",
    type: "Full-time",
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "London, UK",
    companyOverview:
      "PixelCraft is a creative studio designing intuitive and aesthetic digital experiences for startups and enterprises.",
    jobSummary:
      "We are seeking a UI/UX Designer to craft user-friendly and visually appealing interfaces.",
    responsibilities: [
      "Design and prototype web and mobile interfaces.",
      "Conduct user research and usability testing.",
      "Collaborate with engineers to ensure pixel-perfect implementation.",
      "Maintain and evolve design systems.",
    ],
    qualifications: [
      "2+ years of experience in UI/UX design.",
      "Proficiency with Figma or Sketch.",
      "Portfolio showcasing design projects.",
      "Strong communication and collaboration skills.",
    ],
    benefits: [
      "Work on diverse projects with global clients.",
      "Remote-friendly work setup.",
      "Creative and supportive team environment.",
      "Annual design conference allowance.",
    ],
    url: "/assets/companies/pixel-craft.jpeg",
  },
  {
    id: "5",
    type: "Part-time",
    title: "Content Writer (Crypto & DeFi)",
    company: "DeFi Insights",
    location: "Remote",
    companyOverview:
      "DeFi Insights is a media platform focused on simplifying decentralized finance for retail investors and developers.",
    jobSummary:
      "We are looking for a writer to create educational and engaging content around DeFi and blockchain trends.",
    responsibilities: [
      "Research and write articles, blogs, and reports on DeFi topics.",
      "Simplify complex financial concepts for broad audiences.",
      "Collaborate with editors for publishing schedules.",
      "Stay updated on DeFi protocols and innovations.",
    ],
    qualifications: [
      "Strong writing and editing skills.",
      "Understanding of crypto and DeFi ecosystems.",
      "Experience with SEO optimization is a plus.",
      "Ability to meet deadlines consistently.",
    ],
    benefits: [
      "Remote, flexible working hours.",
      "Paid per article with bonuses for performance.",
      "Exposure to leading voices in the DeFi space.",
      "Opportunities for full-time conversion.",
    ],
    url: "/assets/companies/defi-insights.jpeg",
  },
  {
    id: "6",
    type: "Full-time",
    title: "Data Scientist",
    company: "AIxLabs",
    location: "Toronto, Canada",
    companyOverview:
      "AIxLabs is a data-driven AI company building predictive analytics platforms for financial markets.",
    jobSummary:
      "We are seeking a Data Scientist to develop ML models that analyze crypto and traditional financial data.",
    responsibilities: [
      "Build machine learning models for time-series prediction.",
      "Analyze blockchain and market datasets.",
      "Work with engineering teams to deploy models to production.",
      "Communicate insights to business stakeholders.",
    ],
    qualifications: [
      "Master’s degree in Data Science, Statistics, or related field.",
      "Proficiency in Python, TensorFlow, or PyTorch.",
      "Experience with blockchain datasets is a plus.",
      "Strong mathematical and analytical skills.",
    ],
    benefits: [
      "Competitive salary with equity options.",
      "Work with cutting-edge AI and blockchain projects.",
      "Professional development opportunities.",
      "Hybrid work model.",
    ],
    url: "/assets/companies/aix-labs.png",
  },
  {
    id: "7",
    type: "Contract",
    title: "DevOps Engineer",
    company: "ChainOps",
    location: "Singapore",
    companyOverview:
      "ChainOps provides scalable DevOps solutions for blockchain startups and enterprises.",
    jobSummary:
      "We are hiring a DevOps Engineer to manage cloud infrastructure and CI/CD pipelines for decentralized apps.",
    responsibilities: [
      "Manage AWS and Kubernetes infrastructure.",
      "Automate CI/CD workflows for smart contract deployments.",
      "Ensure high availability and system security.",
      "Collaborate with developers to improve deployment processes.",
    ],
    qualifications: [
      "3+ years of DevOps experience.",
      "Knowledge of Docker, Kubernetes, AWS, or GCP.",
      "Experience with Web3 deployments is a plus.",
      "Strong problem-solving skills.",
    ],
    benefits: [
      "Remote-friendly contract role.",
      "Competitive hourly rate.",
      "Chance to work with top Web3 projects.",
      "Flexible working hours.",
    ],
    url: "/assets/companies/chainops.jpeg",
  },
  {
    id: "8",
    type: "Full-time",
    title: "Marketing Lead",
    company: "MetaWave",
    location: "New York, USA",
    companyOverview:
      "MetaWave is building immersive Web3 social platforms, combining AR, VR, and blockchain.",
    jobSummary:
      "We are looking for a Marketing Lead to drive community growth and product adoption.",
    responsibilities: [
      "Develop marketing campaigns across Web3 communities.",
      "Collaborate with influencers and key opinion leaders.",
      "Track campaign analytics and optimize strategies.",
      "Organize online and offline community events.",
    ],
    qualifications: [
      "3+ years of experience in marketing or community growth.",
      "Strong knowledge of crypto, NFTs, and metaverse trends.",
      "Experience running social media campaigns.",
      "Excellent communication skills.",
    ],
    benefits: [
      "Competitive base + token incentives.",
      "Work on the future of Web3 social platforms.",
      "Flexible work schedule.",
      "International team collaboration.",
    ],
    url: "/assets/companies/metawave.png",
  },
  {
    id: "9",
    type: "Full-time",
    title: "Backend Engineer",
    company: "FinTechly",
    location: "Remote",
    companyOverview:
      "FinTechly builds secure APIs and infrastructure for decentralized finance applications.",
    jobSummary:
      "We are hiring a Backend Engineer to design scalable and secure APIs for fintech applications.",
    responsibilities: [
      "Develop REST and GraphQL APIs.",
      "Integrate backend services with blockchain infrastructure.",
      "Ensure security and compliance in financial systems.",
      "Collaborate with frontend and product teams.",
    ],
    qualifications: [
      "Proficiency in Node.js, TypeScript, or Go.",
      "Experience with databases (Postgres, MongoDB).",
      "Familiarity with Web3 integrations is a plus.",
      "Strong understanding of API security.",
    ],
    benefits: [
      "Remote-first working culture.",
      "Salary + equity options.",
      "Work with high-impact DeFi products.",
      "Health and wellness benefits.",
    ],
    url: "/assets/companies/fintechly.jpg",
  },
  {
    id: "10",
    type: "Full-time",
    title: "Product Manager",
    company: "CryptoPay",
    location: "Paris, France",
    companyOverview:
      "CryptoPay is a payments company enabling merchants to accept crypto seamlessly worldwide.",
    jobSummary:
      "We are seeking a Product Manager to lead product strategy and execution for our payment solutions.",
    responsibilities: [
      "Define product roadmap and feature requirements.",
      "Collaborate with engineering and design teams.",
      "Conduct market research and user interviews.",
      "Drive adoption of CryptoPay merchant tools.",
    ],
    qualifications: [
      "3+ years in product management.",
      "Background in fintech or payments industry.",
      "Understanding of crypto payments ecosystem.",
      "Strong leadership and organizational skills.",
    ],
    benefits: [
      "Competitive salary and token options.",
      "Work on a global crypto payment network.",
      "Travel opportunities for conferences.",
      "Supportive team culture.",
    ],
    url: "/assets/companies/crypto-pay.jpeg",
  },
];
