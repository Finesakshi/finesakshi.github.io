// Updated portfolio configuration based on Sakshi Chaudhary's Product Management resume and cover letter

import emoji from "react-easy-emoji";
import IU_logo from "./assets/images/IU_logo.png";
import school from "./assets/images/school.jpg";

const illustration = {
  animated: true,
};

const greeting = {
  username: "Sakshi Chaudhary",
  title: "Hi all, I'm Sakshi 👋",
  subTitle: emoji(
    "A results-driven Product Manager with 3+ years of experience in B2B SaaS, strategy, experimentation, and full product lifecycle ownership. Passionate about building customer-centric digital products that drive business value and delight users. 🚀"
  ),
  resumeLink: "https://drive.google.com/drive/folders/18Z2EjozJsjy1OQeT0vLaCkhOFY0AYgsM?usp=sharing",
  repoLink: "#",
  displayGreeting: true,
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/fabsakshi",
  gmail: "ch.sakshiasb@gmail.com",
  display: true,
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Product Manager | Strategy | Analytics | Experimentation",
  skills: [
    emoji("⚡ Translate customer insights & business needs into product roadmaps, PRDs, and actionable backlogs"),
    emoji("⚡ Drive end-to-end product lifecycle: discovery → MVP → launch → iteration → scale"),
    emoji("⚡ Lead A/B testing, experimentation, funnel analysis & KPI-driven decisions (Optimizely, GA, Firebase)"),
    emoji("⚡ Partner cross-functionally with engineering, design, sales, operations, and marketing to execute product vision"),
    emoji("⚡ Conduct competitive research, price benchmarking, customer journey mapping & market opportunity analysis"),
  ],

  softwareSkills: [
    { skillName: "Product Strategy", fontAwesomeClassname: "fas fa-lightbulb" },
    { skillName: "Agile / Scrum", fontAwesomeClassname: "fas fa-sync" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Figma", fontAwesomeClassname: "fas fa-pencil-ruler" },
    { skillName: "JIRA", fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Confluence", fontAwesomeClassname: "fas fa-file-alt" },
    { skillName: "Google Analytics", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "A/B Testing", fontAwesomeClassname: "fas fa-flask" },
    { skillName: "Wireframing", fontAwesomeClassname: "fas fa-drafting-compass" },
    { skillName: "Backlog Mgmt.", fontAwesomeClassname: "fas fa-tasks" }
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IU International University of Applied Sciences, Berlin, Germany",
      logo: IU_logo,
      subHeader: emoji("Masters in International Management (Specialization: Product Management & Strategy)"),
      duration: "April 2024 – September 2025",
      desc: "Specialization in Product Management, Strategy, Product Development, Business Intelligence, and Design Thinking.",
      descBullets: [
        "Studied product development frameworks, market strategies, negotiation, and digital transformation.",
        "Applied design thinking & cross-functional collaboration through industry-led case studies.",
      ],
    },
    {
      schoolName: "Chaudhary Charan Singh University | Asian School of Business, Noida, India",
      logo: school,
      subHeader: "Bachelor of Business Administration",
      duration: "August 2018 – July 2021",
      desc: "Focused on economics, financial management, strategic management, and information technology.",
      descBullets: [
        "Learned principles of business analysis, decision-making, and organizational strategy.",
        "Developed foundation for product thinking through IT and change management coursework.",
      ],
    },
  ],
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Product Manager | B2B SaaS",
      company: "SVAM International Inc.",
      companylogo: "",
      date: "March 2023 – March 2024",
      descBullets: [
        "Accelerated SaaS product delivery timelines by 28% through structured backlog management.",
        "Defined product features, PRDs, acceptance criteria, use cases & API specs for engineering.",
        "Led release planning, product demos, stakeholder management & sprint planning.",
        "Worked cross-functionally with engineering, design, sales, and operations to drive roadmap execution.",
      ],
    },
    {
      role: "Associate Product Manager | B2B SaaS",
      company: "SVAM International Inc.",
      companylogo: "",
      date: "Feb 2022 – March 2023",
      descBullets: [
        "Conducted in-depth market research & competitive analysis opening 11+ new feature opportunities.",
        "Prioritized features based on usability, customer value, and ROI to strengthen growth.",
        "Supported product strategy development, documentation & category expansion initiatives.",
      ],
    },
    {
      role: "Market Research Intern | B2B SaaS",
      company: "SVAM International Inc.",
      companylogo: "",
      date: "Nov 2021 – Feb 2022",
      descBullets: [
        "Converted customer insights & market trends into actionable product requirements.",
        "Developed sales enablement materials (datasheets, presentations) using CMS platforms.",
      ],
    },
    {
      role: "Product Management Intern | B2B Fintech",
      company: "Dion Global Solutions Ltd.",
      companylogo: "",
      date: "June 2019 – August 2020",
      descBullets: [
        "Supported end-to-end feature lifecycle from research → development → go-live.",
        "Managed release communication & product marketing alignment.",
        "Developed a database of 1,000+ financial reports for product decision-making.",
      ],
    },
  ],
};

const bigProjects = {
  title: "Key Product Contributions",
  subtitle: "Impact Across B2B SaaS & Fintech",
  projects: [
    {
      projectName: "SaaS Product Feature Expansion",
      projectDesc: "Identified 11+ new feature opportunities through market analysis, boosting roadmap clarity and reducing product risk.",
      footerLink: [],
    },
    {
      projectName: "Experimentation & Funnel Optimization",
      projectDesc: "Designed and executed A/B tests that improved adoption, engagement, and usability metrics across product modules.",
      footerLink: [],
    },
    {
      projectName: "Financial Data Intelligence Platform",
      projectDesc: "Led data accuracy and reporting workflows for 1,000+ company financial documents used in investment insights.",
      footerLink: [],
    }
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions that showcase my product mindset and leadership.",
  achievementsCards: [
    {
      title: "McKinsey Forward Program",
      subtitle: "Selected for a competitive global program focused on problem-solving, adaptability, communication & leadership.",
      image: "",
      footerLink: [],
    },
    {
      title: "Featured in Zine Magazine",
      subtitle: "Recognized as a versatile team player and 'Alumni of the Month'.",
      image: "",
      footerLink: [],
    },
    {
      title: "AI for Product Management",
      subtitle: "Gained hands-on experience in generative AI, predictive analytics, and LLM-based product workflows.",
      image: "",
      footerLink: [],
    }
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s discuss product, strategy, or your next big idea.",
  number: "+49 155 1020 3327 (Berlin)",
  emailAddress: "ch.sakshiasb@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
};
