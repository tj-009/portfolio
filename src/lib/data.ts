export const personal = {
  name: "Tanishk Jain",
  title: "Software Engineer | AI Automation Engineer | AI Coding Contributor",
  shortTitle: "Software Engineer & AI Engineer",
  email: "tjtanishkjain0009@gmail.com",
  phone: "+91 78528 37166",
  phoneRaw: "+917852837166",
  location: "Ahmedabad, India",
  linkedin: "https://www.linkedin.com/in/tanishk-jain-3b0779225/",
  resumeUrl: "/Tanishk-Jain-Resume.pdf",
  availability: "Available for AI freelance & contract work",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-evaluation", label: "AI Skills" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  achievements: string[];
  badges: string[];
};

export const experiences: Experience[] = [
  {
    id: "infor-ase",
    role: "Associate Software Engineer",
    company: "Infor",
    duration: "June 2025 — Present",
    location: "Ahmedabad, India",
    responsibilities: [
      "Migrated legacy automation framework components to Core Java and Selenium.",
      "Modernized internal automation infrastructure for long-term maintainability.",
      "Drove migration from Javax APIs to Jakarta APIs across enterprise services.",
      "Collaborated with Agile teams to deliver scalable engineering solutions.",
      "Contributed to enterprise migration initiatives including FSX to S3 migration.",
      "Worked across software development, automation, debugging, and platform modernization.",
    ],
    achievements: [
      "Improved maintainability of automation systems.",
      "Eliminated legacy dependencies across critical modules.",
      "Enhanced platform compatibility with modern Java ecosystems.",
    ],
    badges: ["Core Java", "Selenium", "Jakarta EE", "AWS S3", "Agile"],
  },
  {
    id: "infor-intern",
    role: "Development Intern",
    company: "Infor",
    duration: "January 2025 — June 2025",
    location: "Ahmedabad, India",
    responsibilities: [
      "Optimized GitLab CI/CD pipelines across multiple service repositories.",
      "Restructured regression testing workflows for parallel execution.",
      "Improved infrastructure efficiency and pipeline observability.",
      "Reduced execution overhead and overall resource consumption.",
    ],
    achievements: [
      "Reduced pipeline complexity significantly.",
      "Lowered infrastructure costs through targeted optimization.",
    ],
    badges: ["GitLab CI/CD", "DevOps", "Regression Testing", "Optimization"],
  },
  {
    id: "einfochips",
    role: "Team Leader",
    company: "eInfochips",
    duration: "May 2024 — June 2024",
    responsibilities: [
      "Worked on RTL-to-GDS automation using OpenROAD.",
      "Developed Linux automation workflows for chip design pipelines.",
      "Led a team of 4 engineers and coordinated task allocation.",
      "Owned project documentation and execution coordination.",
    ],
    achievements: [
      "Improved workflow automation efficiency end-to-end.",
      "Successfully managed project execution and team delivery.",
    ],
    badges: ["OpenROAD", "Linux", "Bash", "Team Leadership"],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  impact: string[];
  techStack: string[];
  category: ("AI" | "Automation" | "Full-Stack")[];
  featured: boolean;
  highlight?: string;
};

export const projects: Project[] = [
  {
    id: "ai-incident-agent",
    title: "AI-Powered Incident Investigation Agent",
    tagline:
      "Claude AI engineering copilot that turns production logs into root-cause analysis.",
    description:
      "An AI-powered engineering investigation agent built during an internal hackathon that connects Claude AI with Sumo Logic through the Model Context Protocol. The system enables Claude to perform end-to-end production issue investigation by gathering context across multiple engineering tools and repositories.",
    features: [
      "Reads application errors directly from Sumo Logic.",
      "Identifies Java classes responsible for failures.",
      "Analyzes stack traces and logs automatically.",
      "Searches Git history for recent code changes.",
      "Finds GitLab Merge Requests related to impacted files.",
      "Retrieves relevant JIRA tickets across projects.",
      "Correlates logs, source code, MRs, and business requirements.",
      "Generates AI-powered root-cause analysis reports.",
      "Provides actionable debugging recommendations.",
    ],
    impact: [
      "Reduced manual investigation effort.",
      "Accelerated production issue triaging.",
      "Improved root-cause discovery speed.",
      "Unified multiple engineering systems into a single AI-assisted workflow.",
    ],
    techStack: [
      "Python",
      "MCP",
      "Claude AI",
      "Sumo Logic API",
      "GitLab API",
      "JIRA API",
      "Java",
      "AI Agents",
    ],
    category: ["AI", "Automation"],
    featured: true,
    highlight:
      "Built an AI engineering copilot that transforms production logs into actionable root-cause analysis using Claude AI, Sumo Logic, GitLab, JIRA, and source code repositories.",
  },
  {
    id: "ai-qa-agent",
    title: "AI Automation Agent for Infor Hackathon",
    tagline:
      "AI-powered QA assistant that auto-generates test cycles and Selenium scripts.",
    description:
      "An AI-powered QA automation assistant that reads JIRA tickets, extracts merge request information, automatically generates Zephyr test cycles, and produces Selenium automation scripts to remove repetitive QA work.",
    features: [
      "Automated test cycle creation in Zephyr.",
      "Generated Selenium scripts directly from ticket context.",
      "Linked JIRA and Zephyr workflows seamlessly.",
      "Reduced repetitive QA tasks across release cycles.",
    ],
    impact: [
      "Reduced manual QA effort by over 60%.",
      "Increased testing efficiency.",
      "Accelerated QA execution cycles.",
    ],
    techStack: [
      "Python",
      "AI Agents",
      "MCP",
      "Selenium",
      "JIRA API",
      "Zephyr API",
      "Java",
    ],
    category: ["AI", "Automation"],
    featured: true,
  },
  {
    id: "auto-timetable",
    title: "Auto Timetable Scheduling System",
    tagline:
      "Constraint-based scheduling platform for academic institutions.",
    description:
      "A constraint-based timetable scheduling platform that generates class schedules while accounting for faculty availability, room allocation, and subject constraints. Includes an admin dashboard and export tooling.",
    features: [
      "Automated timetable generation engine.",
      "Constraint-based scheduling with conflict detection.",
      "Administrative dashboard for faculty and rooms.",
      "Timetable export functionality.",
    ],
    impact: [
      "Eliminated manual scheduling overhead.",
      "Removed conflicts in faculty and room allocation.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    category: ["Full-Stack"],
    featured: false,
  },
];

export const aiCapabilities = [
  {
    title: "AI Output Evaluation",
    description:
      "Assess correctness, relevance, factual grounding, and quality of generated responses across coding, reasoning, and analysis tasks.",
    icon: "Gauge",
  },
  {
    title: "Code Review & Debugging",
    description:
      "Analyze AI-generated code, identify bugs, edge cases, performance issues, and unsafe patterns at production-grade depth.",
    icon: "BugPlay",
  },
  {
    title: "Prompt Engineering",
    description:
      "Design structured, role-aware prompts that improve reasoning depth, output consistency, and task completion accuracy.",
    icon: "Wand2",
  },
  {
    title: "Root Cause Analysis",
    description:
      "Investigate complex engineering issues using logs, source code, tickets, and system context to surface true root causes.",
    icon: "SearchCode",
  },
  {
    title: "Human Feedback for AI",
    description:
      "Provide high-signal human feedback that improves model behavior, alignment, and downstream evaluation metrics.",
    icon: "ThumbsUp",
  },
  {
    title: "Analytical Thinking",
    description:
      "Decompose ambiguous problems into structured, testable solutions with clear assumptions and trade-offs.",
    icon: "Brain",
  },
  {
    title: "Attention to Detail",
    description:
      "Spot inconsistencies, subtle errors, and silent regressions across long-context responses and multi-file changes.",
    icon: "ScanEye",
  },
  {
    title: "AI-Assisted Engineering",
    description:
      "Leverage LLMs and agentic workflows to accelerate debugging, automation, and software delivery without sacrificing quality.",
    icon: "Cpu",
  },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C"],
  "AI & Automation": [
    "AI Agents",
    "MCP (Model Context Protocol)",
    "Prompt Engineering",
    "AI Evaluation",
    "Human Feedback for AI",
    "Root Cause Analysis",
    "Incident Investigation",
    "Log Analysis",
    "AI-Assisted Debugging",
    "LLM Workflows",
    "Workflow Automation",
    "Agentic AI Systems",
    "Retrieval-Augmented Context",
    "Production Monitoring",
  ],
  Backend: ["Spring", "Hibernate", "Node.js", "Express.js", "REST APIs"],
  Frontend: ["React", "Redux", "Next.js", "Tailwind CSS"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: [
    "Git",
    "GitLab CI/CD",
    "Docker",
    "Linux",
    "JIRA",
    "Postman",
    "Sumo Logic",
    "Selenium",
  ],
  "Software Engineering": [
    "Data Structures & Algorithms",
    "OOP",
    "SDLC",
    "Agile",
    "System Design",
    "Code Review",
    "Software Testing",
    "Performance Optimization",
  ],
};

export const codingProfiles = [
  {
    name: "LinkedIn",
    handle: "tanishk-jain",
    description: "Professional network, recommendations, and engineering posts.",
    href: personal.linkedin,
    icon: "Linkedin",
    accent: "from-[#0a66c2]/30 to-[#0a66c2]/10",
  },
  {
    name: "LeetCode",
    handle: "Active Problem Solver",
    description: "Practiced DSA across arrays, graphs, DP, and system design rounds.",
    href: "https://leetcode.com/",
    icon: "Code2",
    accent: "from-[#ffa116]/25 to-[#ffa116]/5",
  },
  {
    name: "GeeksforGeeks",
    handle: "DSA Practitioner",
    description: "Articles, problem sets, and curated DSA learning paths.",
    href: "https://www.geeksforgeeks.org/",
    icon: "BookOpen",
    accent: "from-[#2f8d46]/25 to-[#2f8d46]/5",
  },
  {
    name: "TakeUForward",
    handle: "Striver SDE Sheet",
    description: "Structured problem sheet and curated DSA preparation.",
    href: "https://takeuforward.org/",
    icon: "Target",
    accent: "from-[#0ea5e9]/25 to-[#0ea5e9]/5",
  },
];

export const stats = [
  { label: "Problem Solving", value: "500+", suffix: "DSA Problems" },
  { label: "Software Engineering", value: "2+", suffix: "Years Hands-on" },
  { label: "Automation Engineering", value: "10+", suffix: "Workflows Built" },
  { label: "AI Systems", value: "3+", suffix: "AI Agents Shipped" },
  { label: "Languages", value: "6+", suffix: "Programming Languages" },
];

export const whyFit = [
  {
    title: "Strong Software Engineering Foundation",
    description:
      "Years of hands-on Java, Python, and full-stack development at enterprise scale.",
    icon: "Code",
  },
  {
    title: "Experience Building AI Agents",
    description:
      "Shipped multiple production-style AI agents using Claude AI, MCP, and tool-calling.",
    icon: "Bot",
  },
  {
    title: "Debugging & Root Cause Analysis",
    description:
      "Trained eye for tracing failures across logs, code, and tickets with surgical precision.",
    icon: "SearchCheck",
  },
  {
    title: "Enterprise Software Experience",
    description:
      "Worked on Infor's enterprise platform across migrations, automation, and CI/CD.",
    icon: "Building2",
  },
  {
    title: "Strong Coding Skills",
    description:
      "Disciplined coder with depth in DSA, system design, and clean architecture.",
    icon: "Terminal",
  },
  {
    title: "Evaluating Complex Systems",
    description:
      "Comfortable assessing multi-component systems and identifying weak links fast.",
    icon: "Network",
  },
  {
    title: "AI-Powered Automation Development",
    description:
      "Builder of agentic systems that bridge LLMs with real engineering tools.",
    icon: "Workflow",
  },
  {
    title: "Excellent Analytical Thinking",
    description:
      "Decompose ambiguity into structured, testable solutions with clear trade-offs.",
    icon: "Compass",
  },
  {
    title: "Working with Large Codebases",
    description:
      "Confident navigating sprawling, legacy-rich repositories at production scale.",
    icon: "FolderTree",
  },
  {
    title: "Reviewing AI-Generated Outputs",
    description:
      "Skilled at evaluating AI responses for correctness, completeness, and risk.",
    icon: "ClipboardCheck",
  },
  {
    title: "Strong Written Communication",
    description:
      "Concise, structured writing that holds up in code reviews and engineering docs.",
    icon: "PenLine",
  },
  {
    title: "Detail-Oriented Problem Solver",
    description:
      "Catches subtle inconsistencies others miss in code, prompts, and outputs.",
    icon: "ScanSearch",
  },
];

export const targetCompanies = [
  "OpenAI",
  "Anthropic",
  "Outlier AI",
  "Scale AI",
  "Turing",
  "Cohere",
  "Databricks",
  "Invisible Technologies",
  "Data Annotation",
  "Mercor",
  "Surge AI",
  "DeepMind",
];
