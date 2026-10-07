export interface PortfolioLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  problemStatement: string;
  solution: string;
  contribution: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  college?: string;
  graduationYear?: string;
  cgpa?: string;
  relevantInformation?: string;
}

export interface CodingProfile {
  platform: "LeetCode" | "CodeChef" | "HackerRank" | "Codeforces" | "GitHub";
  profileUrl: string;
  handle: string;
  solvedProblems: string;
  rating: string;
  rank: string;
}

export interface ExperienceEntry {
  type:
    | "Hackathon"
    | "Team project"
    | "Internship"
    | "Open source"
    | "Technical activity";
  title: string;
  organization?: string;
  date?: string;
  summary: string;
  contribution?: string;
}

export interface PortfolioData {
  name: string;
  degree: string;
  professionalTitle: string;
  introduction: string;
  about: {
    interests: string[];
    focus: string;
    motivation: string;
  };
  links: {
    github?: string;
    linkedin?: string;
    resume?: string;
    email?: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  codingProfiles: CodingProfile[];
  education: EducationEntry[];
  achievements: string[];
  certifications: string[];
}

export const portfolio: PortfolioData = {
  name: "",
  degree: "BTech · Computer Science Engineering",
  professionalTitle: "Computer Science Engineering Student",
  introduction:
    "I’m a BTech Computer Science Engineering student interested in software development, data and machine learning, and building practical projects. I’m strengthening my DSA and core CS foundations while exploring how technology can solve real-world problems.",
  about: {
    interests: ["Software development", "Data and machine learning", "Practical projects"],
    focus: "Improving in data structures and algorithms, alongside core computer science fundamentals.",
    motivation: "Interested in applying technology to real-world problems.",
  },
  links: {},
  projects: [
    {
      name: "VARUNA-AI",
      githubUrl: "https://github.com/rajath-poojary/VARUNA-AI",
      problemStatement: "Regime-aware AI post-processing of monsoon rainfall forecasts.",
      solution:
        "Team project exploring AI post-processing of monsoon rainfall forecasts, supported by ML-ready rainfall and weather-variable datasets.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Xarray",
        "Dask",
        "NetCDF/GRIB",
        "ERA5",
        "Git/GitHub",
        "Jupyter",
      ],
      features: [
        "NWP and ERA5 data collection",
        "Rainfall and weather-variable processing",
        "Temporal and spatial alignment",
        "Data cleaning and feature engineering",
        "Preparation of ML-ready datasets",
      ],
      contribution:
        "Data Foundation / Data Engineer on the team. My work includes collecting NWP/ERA5 data, processing rainfall and weather variables, aligning data in time and space, cleaning data, engineering features, and preparing datasets for machine-learning workflows.",
    },
  ],
  skills: [
    {
      name: "Programming",
      skills: ["Python"],
    },
    {
      name: "Data & Machine Learning",
      skills: ["Pandas", "NumPy", "Xarray", "Dask", "ERA5", "NetCDF/GRIB"],
    },
    {
      name: "Developer Tools",
      skills: ["Git/GitHub", "Jupyter"],
    },
  ],
  experience: [
    {
      type: "Team project",
      title: "VARUNA-AI",
      summary:
        "A team project on regime-aware AI post-processing of monsoon rainfall forecasts.",
      contribution:
        "Data Foundation / Data Engineer: NWP and ERA5 data collection, rainfall and weather-variable processing, temporal and spatial alignment, data cleaning, feature engineering, and preparation of ML-ready datasets.",
    },
  ],
  codingProfiles: [
    { platform: "LeetCode", profileUrl: "", handle: "", solvedProblems: "", rating: "", rank: "" },
    { platform: "CodeChef", profileUrl: "", handle: "", solvedProblems: "", rating: "", rank: "" },
    { platform: "HackerRank", profileUrl: "", handle: "", solvedProblems: "", rating: "", rank: "" },
    { platform: "Codeforces", profileUrl: "", handle: "", solvedProblems: "", rating: "", rank: "" },
    {
      platform: "GitHub",
      profileUrl: "",
      handle: "",
      solvedProblems: "",
      rating: "",
      rank: "",
    },
  ],
  education: [
    {
      degree: "BTech in Computer Science Engineering",
    },
  ],
  achievements: [],
  certifications: [],
};

export const codingProfilesWithDetails = portfolio.codingProfiles.filter(
  (profile) =>
    profile.profileUrl.trim() ||
    profile.handle.trim() ||
    profile.solvedProblems.trim() ||
    profile.rating.trim() ||
    profile.rank.trim() ||
    (profile.platform === "GitHub" && portfolio.links.github?.trim()),
);

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Coding", href: "#coding" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
].filter(({ href }) => {
  if (href === "#experience") return portfolio.experience.length > 0;
  if (href === "#coding") return codingProfilesWithDetails.length > 0;
  if (href === "#education") return portfolio.education.length > 0;
  if (href === "#achievements") return portfolio.achievements.length > 0;
  if (href === "#certifications") return portfolio.certifications.length > 0;
  return true;
});
