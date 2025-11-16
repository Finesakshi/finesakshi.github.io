// Updated portfolio configuration based on Sakshi Chaudhary's Product Management resume and cover letter

import emoji from "react-easy-emoji";
import IU_logo from "./assets/images/IU_logo.png";
import school from "./assets/images/school.jpg";

// keep illustration
const illustration = {
  animated: true,
};

// --- GREETING ---
const greeting = {
  username: "Sakshi Chaudhary",
  title: "Hi all, I'm Sakshi 👋",
  subTitle: emoji(
    "A results-driven Product Manager with 3+ years of experience in B2B SaaS, strategy, experimentation, and end-to-end product lifecycle. Passionate about building customer-centric digital products that drive business value. 🚀"
  ),
  resumeLink: "#",
  repoLink: "#",
  displayGreeting: true,
};

// --- SOCIAL MEDIA LINKS ---
const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/fabsakshi",
  gmail: "ch.sakshiasb@gmail.com",
  instagram: "",
  display: true,
};

// --- SKILLS SECTION ---
const skillsSection = {
  title: "What I Do",
  subTitle: "Product Manager | Strategy | Analytics | Experimentation",
  skills: [
    emoji("⚡ Translate customer insights & business needs into roadmaps, PRDs, and actionable backlogs"),
    emoji("⚡ Lead cross-functional execution across engineering, design, marketing & operations"),
    emoji("⚡ Perform A/B testing, funnel analysis & KPI-driven product decisions (Optimizely, GA, Firebase)"),
    emoji("⚡ Conduct market research, competitive benchmarking & opportunity sizing"),
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
  ],
  display: true,
};

// --- EDUCATION ---
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IU International University of Applied Sciences, Berlin",
      logo: IU_logo,
      subHeader: emoji("Masters in International Management (Product Management & Strategy)"),
      duration: "April 2024 – September 2025",
      descBullets: [
        "Specialized in product development, strategy, design thinking & business intelligence.",
      ],
    },
    {
      schoolName: "Chaudhary Charan Singh University | Asian School of Business",
      logo: school,
      subHeader: "Bachelor of Business Administration",
      duration: "2018 – 2021",
      descBullets: [
        "Studied economics, strategic management, IT & financial management.",
      ],
    },
  ],
};

// --- TECH STACK (KEEP BUT MARK DISPLAY FALSE or minimal) ---
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false,
};

// --- WORK EXPERIENCE ---
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Product Manager | B2B SaaS",
      company: "SVAM International Inc.",
      date: "2023 – 2024",
      descBullets: [
        "Accelerated product delivery timelines by 28% through structured backlog prioritization.",
        "Created PRDs, acceptance criteria, API specs, and coordinated release planning.",
      ],
    },
    {
      role: "Associate Product Manager | B2B SaaS",
      company: "SVAM International Inc.",
      date: "2022 – 2023",
      descBullets: [
        "Conducted market & competitor analysis identifying 11+ new feature opportunities.",
      ],
    },
    {
      role: "Market Research Intern",
      company: "SVAM International Inc.",
      date: "2021 – 2022",
      descBullets: [
        "Created product requirements & sales enablement content using CMS tools.",
      ],
    },
    {
      role: "Product Management Intern | B2B Fintech",
      company: "Dion Global Solutions Ltd.",
      date: "2019 – 2020",
      descBullets: [
        "Managed financial reporting data with 100% accuracy for 1,000+ companies.",
      ],
    },
  ],
};

// --- OPEN SOURCE (KEEP BUT DISABLE) ---
const openSource = {
  githubUserName: "",
  githubConvertedToken: "",
  showGithubProfile: false,
  display: false,
};

// --- BIG PROJECTS ---
const bigProjects = {
  title: "Key Product Contributions",
  subtitle: "Focused on B2B SaaS & Fintech",
  projects: [
    {
      projectName: "SaaS Product Feature Expansion",
      projectDesc: "Opened 11+ new feature opportunities from detailed competitor analysis.",
      footerLink: [],
    },
  ],
  display: true,
};

// --- ACHIEVEMENTS ---
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions and certifications.",
  achievementsCards: [
    {
      title: "McKinsey Forward Program",
      subtitle: "Selected for global leadership & problem‑solving program.",
      image: "",
      footerLink: [],
    },
  ],
  display: true,
};

// --- BLOG SECTION (KEEP, MARK DISPLAY FALSE) ---
const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [],
  display: false,
};

// --- TALK SECTION (KEEP, MARK DISPLAY FALSE) ---
const talkSection = {
  title: "Talks & Workshops",
  subtitle: "",
  talks: [],
  display: false,
};

// --- PODCAST SECTION (KEEP, MARK DISPLAY FALSE) ---
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false,
};

// --- CONTACT ---
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect.",
  number: "+49 15510203327",
  emailAddress: "ch.sakshiasb@gmail.com",
};

// --- TWITTER (KEEP BUT DISABLE) ---
const twitterDetails = {
  userName: "",
  display: false,
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
