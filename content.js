/* ============================================================
   SITE CONTENT
   ------------------------------------------------------------
   Edit this file to update the portfolio. Everything on the
   page is driven by the object below.

   NOTE: the confirmed contact address is bsawasec@gmail.com.
   The GitHub profile README has a typo (bssawasec@) — ignore it.
   ============================================================ */

window.SITE = {
  theme: {
    background: "#ece5de",
    foreground: "#151927",
    primary: "#fb5057",
    accent: "#2596be",
    muted: "#e69e99",
    mutedForeground: "#236f7c"
  },

  meta: {
    name: "Brian Sawa",
    title: "Brian Sawa | Software & Security Engineer",
    description:
      "Software and security engineer with 5 years building secure, scalable systems. DevSecOps, cloud infrastructure, C++ tooling, and technical leadership.",
    url: "",
    themeColor: "#ece5de",
    image: "assets/brian-sawa.jpg"
  },

  nav: {
    brand: "Brian Sawa",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Writing", href: "#writing" },
      { label: "Contact", href: "#contact" }
    ],
    cv: {
      label: "Download CV",
      url: "assets/Brian_Sawa_Resume.pdf",
      download: true
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/brian-sawa/"
    }
  },

  hero: {
    eyebrow: "Software & Security Engineer · DevOps & SecOps",
    titleLine1: "Software",
    titleLine2Prefix: "& ",
    titleLine2Accent: "Security Engineer",
    bio:
      "Software and security engineer with 5 years building secure, scalable systems. I automate security at scale, ship cloud infrastructure, and lead teams from concept to production.",
    creditsLabel: "Selected work",
    credits: [
      "PAPY",
      "M-TRACK",
      "SECURITY COMPASS",
      "SENECA COLLEGE",
      "BERNABUILDS"
    ],
    primaryCta: {
      label: "Download CV",
      url: "assets/Brian_Sawa_Resume.pdf",
      download: true
    },
    secondaryCta: {
      label: "Get In Touch",
      url: "#contact"
    },
    photo: "assets/brian-sawa.jpg",
    photoAlt: "Brian Sawa",
    badgeName: "Brian Sawa",
    badgeRole: "Software & Security Engineer",
    logo: "",
    code: "01 // BS_2026"
  },

  approach: {
    eyebrow: "How I Work",
    titleLine1: "Security",
    titleAccent: "×",
    titleLine2: "Scale",
    intro:
      "Security and software engineering are not separate tracks. I build automation, infrastructure, and tooling that make secure delivery the default — then scale it across teams.",
    items: [
      {
        number: "01",
        title: "Security Automation & DevSecOps",
        description:
          "Shipped client security pipeline automation that scans all committed and existing code and creates Azure DevOps tickets automatically to mediate vulnerabilities — used across every development team.",
        tag: "Security Compass"
      },
      {
        number: "02",
        title: "Cloud & Platform Engineering",
        description:
          "Engineered an internal AWS cloud management system adopted by sales, engineering, product, and services, cutting deployment times by 95% and saving $10,000/month.",
        tag: "Security Compass"
      },
      {
        number: "03",
        title: "Technical Leadership & Mentoring",
        description:
          "Led and mentored five developers, served as Scrum Master, and performed code reviews plus regression, unit, end-to-end, and security testing.",
        tag: "Security Compass"
      },
      {
        number: "04",
        title: "High-Performance Tooling",
        description:
          "Built Papy, an open-source C++ API load-testing and data-generation framework capable of 100,000+ requests per second with minimal dependencies.",
        tag: "Papy · Open Source"
      }
    ]
  },

  projects: {
    label: "Built At",
    moreLabel: "More Projects",
    features: [
      {
        title: "Papy",
        logoText: "PAPY",
        status: "2024–Present · Open Source",
        role: "Creator & Maintainer",
        focus: "C++ · Load Testing",
        outcome:
          "An open-source framework capable of 100,000+ requests per second, with 85 GitHub stars.",
        description:
          "Built Papy to rapidly generate semi-random and static JSON payloads for API load testing. It supports HTTP/HTTPS, GET/POST, spike/ramp/rate-limited traffic, and custom payloads — all in a lightweight, portable C++ codebase.",
        platforms: ["C++", "HTTP/HTTPS", "CLI"],
        metric: {
          label: "GitHub Stars",
          value: "85",
          url: "https://github.com/noahpop77/Papy"
        },
        links: [
          {
            label: "Read Article",
            url: "https://medium.com/@noahpop77/exploring-your-limits-limit-testing-your-apis-with-papy-5fa82ee8c144",
            icon: "arrow",
            style: "ghost"
          },
          {
            label: "View Source",
            url: "https://github.com/noahpop77/Papy",
            icon: "github",
            style: "white"
          }
        ],
        image: "assets/papy.jpg",
        logo: "",
        color: "#1d2333",
        producer: "Open Source",
        producerLogo: ""
      },
      {
        title: "M-Track",
        logoText: "M-TRACK",
        status: "2023–Present · Live",
        role: "Creator & Maintainer",
        focus: "Full-Stack · League of Legends",
        outcome:
          "A full-stack match tracker serving 1,000+ unique visitors per month.",
        description:
          "Designed and deployed a League of Legends match-history platform with player stats, summoner search, and on-demand data fetching. Built the front end with pure JavaScript, HTML, and CSS, backed by MySQL and containerized with Docker on AWS.",
        platforms: ["Python", "MySQL", "Docker", "AWS"],
        metric: {
          label: "Monthly Visitors",
          value: "1,000+",
          url: "https://mtrack.lol/"
        },
        links: [
          {
            label: "Visit Site",
            url: "https://mtrack.lol/",
            icon: "external",
            style: "ghost"
          },
          {
            label: "View Source",
            url: "https://github.com/noahpop77/M-Track",
            icon: "github",
            style: "white"
          }
        ],
        image: "assets/mtrack.jpg",
        logo: "",
        color: "#0f1923",
        producer: "Open Source",
        producerLogo: ""
      },
      {
        title: "Cloud Management System",
        logoText: "CLOUD OPS",
        status: "2021–2025 · Internal",
        role: "Software Engineer",
        focus: "AWS · Platform Engineering",
        outcome:
          "Cut deployment times by 95% and saved $10,000/month across all testing and demo instances.",
        description:
          "Engineered an internal cloud management system adopted by sales, engineering, product, and services teams. Built on AWS, it automated the lifecycle of testing and demo environments and became the shared platform for provisioning.",
        platforms: ["AWS", "Terraform", "Kubernetes", "Docker"],
        metric: { label: "Deployment Time", value: "−95%", url: "" },
        links: [],
        image: "",
        logo: "",
        color: "#0e2a33",
        producer: "Security Compass",
        producerLogo: ""
      },
      {
        title: "Security Pipeline Automation",
        logoText: "SECURE PIPELINE",
        status: "2021–2025 · Internal",
        role: "Software Engineer",
        focus: "DevSecOps · Automation",
        outcome:
          "Scans all committed and existing code and files Azure DevOps tickets automatically — used across every development team.",
        description:
          "Shipped client security pipeline automation that integrates with Azure DevOps to detect vulnerabilities and create epics automatically. The system standardizes security scanning across all development teams and reduces manual triage.",
        platforms: ["Azure DevOps", "Jenkins", "Groovy", "Python"],
        metric: { label: "Adoption", value: "All teams", url: "" },
        links: [],
        image: "",
        logo: "",
        color: "#2a1519",
        producer: "Security Compass",
        producerLogo: ""
      },
      {
        title: "BernaBuilds",
        logoText: "BERNABUILDS",
        status: "Ongoing · YouTube",
        role: "Creator & Host",
        focus: "Software Development · Content",
        outcome:
          "A software-development channel covering computer science principles, build logs, and conversations with industry engineers.",
        description:
          "Created BernaBuilds to share software engineering concepts and personal projects, including a discussion with Max Stewart from Riot Games about architecting systems at scale.",
        platforms: ["YouTube", "C++", "Python", "Go"],
        metric: null,
        links: [
          {
            label: "Visit Channel",
            url: "https://www.youtube.com/@BernaBuilds",
            icon: "external",
            style: "ghost"
          }
        ],
        image: "",
        logo: "assets/bernabuilds-avatar.jpg",
        color: "#1a0f12",
        producer: "BernaBuilds",
        producerLogo: "assets/bernabuilds-avatar.jpg",
        producerLogoRound: true
      }
    ],
    more: [
      {
        title: "Python 2 → 3 Refactor",
        logoText: "PY3 REFACTOR",
        status: "2020–2021 · Research",
        role: "Software Development Researcher",
        focus: "Python · Packaging",
        outcome:
          "Modernized an open-source codebase for RHEL and eliminated manual packaging effort.",
        description:
          "Refactored an open-source Python 2 codebase to Python 3, reworked the packaging pipeline, and implemented a Jenkins pipeline to automatically package new builds.",
        platforms: ["Python", "Jenkins", "RHEL"],
        metric: null,
        links: [],
        image: "",
        logo: "",
        color: "#0e2a33",
        producer: "Seneca College",
        producerLogo: "assets/seneca-logo.svg"
      },
      {
        title: "Hardware Simulation Optimization",
        logoText: "SIM OPTIMIZATION",
        status: "2020–2021 · Research",
        role: "Software Development Researcher",
        focus: "Performance · Dependencies",
        outcome:
          "Reduced the dependency footprint of a hardware simulation tool by 60%.",
        description:
          "Refined dependencies and refactored logic in an open-source hardware simulation codebase to reduce bloat and improve runtime performance.",
        platforms: ["Python", "Linux", "Performance"],
        metric: { label: "Footprint", value: "−60%", url: "" },
        links: [],
        image: "",
        logo: "",
        color: "#151927",
        producer: "Seneca College",
        producerLogo: "assets/seneca-logo.svg"
      }
    ]
  },

  experience: {
    eyebrow: "Career Path",
    titleLine1: "Experience",
    titleLine2: "& Impact",
    intro:
      "Five years across security engineering, cloud infrastructure, and software development — from enterprise client work to open-source tooling and technical mentorship.",
    skills: {
      label: "Toolbox",
      groups: [
        { label: "Languages", items: ["Go", "Python", "C++", "Bash"] },
        { label: "Data", items: ["MySQL", "PostgreSQL", "SQLite", "Redis"] },
        {
          label: "Platform",
          items: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Linux"]
        },
        { label: "Practice", items: ["Scrum Master", "Kanban", "Proxmox", "VMware"] }
      ]
    },
    link: {
      label: "View GitHub Profile",
      url: "https://github.com/noahpop77"
    },
    items: [
      {
        company: "Security Compass",
        role: "Software Engineer — DevOps & SecOps",
        dates: "May 2021 – Oct 2025",
        logo: "",
        monogram: "SC",
        description:
          "Delivered software solutions ranging from greenfield custom integrations to legacy SaaS support, acting as an SME with senior leadership on internal and external initiatives.",
        bullets: [
          "Led enterprise client engagements involving scoping, development (Kubernetes/Docker), and adoption of custom security solutions and automations shipped at scale.",
          "Shipped client security pipeline automation that scans all committed and existing code and creates Azure DevOps tickets automatically, used across all development teams.",
          "Engineered an internal AWS cloud management system adopted by sales, engineering, product, and services, reducing deployment times by 95% and $10,000/month.",
          "Shipped a C++ API load-testing tool used to stress and sanity test networked components; led cross-team partnership with the DevOps team.",
          "Developed and managed Jenkins pipelines (Groovy, Terraform, Ansible) for automated tests, deployments, and AWS resource management.",
          "Led and mentored five developers; the team built custom enterprise automations that reduced time to threat model by 50%.",
          "Served as Scrum Master and performed code reviews plus regression, unit, end-to-end, and security testing."
        ]
      },
      {
        company: "Security Compass",
        role: "Jr. Engineer Mentor",
        dates: "Jun 2023 – Oct 2025",
        logo: "",
        monogram: "SC",
        description:
          "Mentored junior engineers on technical career advancement, organization-specific goals, and skill growth.",
        bullets: [
          "Coached junior engineers on technical development, career progression, and organization-specific goals.",
          "Supported skill growth through code reviews, pairing, and practical guidance on shipped work."
        ]
      },
      {
        company: "Seneca College — CDOT",
        role: "Software Development Researcher",
        dates: "Sep 2020 – Jan 2021",
        logo: "assets/seneca-logo.svg",
        monogram: "",
        description:
          "Interned in the college research division, working with industry partners on a high-availability systems simulation platform.",
        bullets: [
          "Refactored an open-source codebase from Python 2 to Python 3, reworking modules and the packaging pipeline for modern RHEL.",
          "Implemented a Jenkins pipeline to automatically package new builds, eliminating manual effort.",
          "Refined dependencies for a hardware simulation tool, reducing its footprint by 60% through refactoring."
        ]
      },
      {
        company: "Seneca Polytechnic College",
        role: "Bachelor of Information Security",
        dates: "2021",
        logo: "assets/seneca-logo.svg",
        monogram: "",
        description:
          "Minor in Secure Software Development. Academic Scholarship, GPA 3.71.",
        bullets: [
          "Courses: Security Systems Architecture, Software Engineering, Malware Analysis, Scalable Automation, Operating Systems, Computer Architecture, Cryptography, Network Security, Risk Management & Compliance."
        ]
      },
      {
        company: "Seneca Polytechnic College",
        role: "Associate Degree of Computer Networking",
        dates: "2018",
        logo: "assets/seneca-logo.svg",
        monogram: "",
        description: "Academic Scholarship, GPA 3.74.",
        bullets: [
          "Courses: Network Architecture, Computer Hardware, Server Optimization, Cloud Infrastructure, Open Systems Administration, Wireless Networks, Advanced Databases."
        ]
      }
    ]
  },

  writing: {
    show: true,
    eyebrow: "Writing & Content",
    title: "Articles",
    archive: {
      label: "Medium Profile",
      url: "https://medium.com/@noahpop77",
      external: true
    },
    items: [
      {
        category: "Performance",
        title: "Can't Waste A Single Second — Papy Performance Optimization!",
        publication: "Medium",
        date: "Jan 2025",
        url: "https://medium.com/@noahpop77/cant-waste-a-single-second-papy-performance-optimization-2d013cfe004b",
        external: true,
        image: "assets/article-papy-performance.jpg",
        logo: ""
      },
      {
        category: "Tutorial",
        title:
          "Exploring Your Limits! Limit Testing Your APIs With Papy — Part II",
        publication: "Medium",
        date: "Dec 2024",
        url: "https://medium.com/@noahpop77/exploring-your-limits-limit-testing-your-apis-with-papy-part-ii-efb66574d49a",
        external: true,
        image: "assets/article-papy-part2.jpg",
        logo: ""
      },
      {
        category: "Tutorial",
        title: "Exploring Your Limits! Limit Testing Your APIs With Papy",
        publication: "Medium",
        date: "Nov 2024",
        url: "https://medium.com/@noahpop77/exploring-your-limits-limit-testing-your-apis-with-papy-5fa82ee8c144",
        external: true,
        image: "assets/article-papy-part1.jpeg",
        logo: ""
      }
    ]
  },

  contact: {
    eyebrow: "Get In Touch",
    titleLine1: "Let's build",
    titleLine2Prefix: "what's ",
    titleAccent: "next",
    titleSuffix: ".",
    text:
      "Hiring for a software engineering, DevOps, or security role? Send me a message or connect on LinkedIn.",
    email: "bsawasec@gmail.com",
    formAction: "https://formsubmit.co/bsawasec@gmail.com",
    privacy: { label: "Privacy notice", url: "privacy.html" },
    social: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/brian-sawa/",
        icon: "linkedin"
      },
      {
        label: "GitHub",
        url: "https://github.com/noahpop77",
        icon: "github"
      },
      {
        label: "Medium",
        url: "https://medium.com/@noahpop77",
        icon: "medium"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@BernaBuilds",
        icon: "youtube"
      },
      {
        label: "Email",
        url: "mailto:bsawasec@gmail.com",
        icon: "mail"
      }
    ]
  },

  footer: {
    brand: "Brian Sawa",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Writing", href: "#writing" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "privacy.html" }
    ],
    copyright: "© 2026 Brian Sawa.",
    disclaimer:
      "Project names, logos, and brands are property of their respective owners. Shown here to illustrate work I contributed to."
  }
};
