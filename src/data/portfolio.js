// ============================================================
//  PORTFOLIO DATA — edit anything here to update your portfolio
// ============================================================

export const profile = {
  name: "NITHISHKUMAR T",
  title: "MERN Stack Developer",
  tagline: "Building full-stack web experiences with MongoDB · Express · React · Node.js",
  email: "nitheshganesh595@email.com",
  phone: "+91 00000 00000",
  location: "Namakkal, Tamil Nadu, India",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",   // place your resume PDF in /public/resume.pdf
  about: `I'm a passionate MERN Stack Developer who loves building end-to-end web applications — from designing REST APIs in Node.js to crafting pixel-perfect React UIs. I also bring solid Core Java fundamentals and a working knowledge of Python to the table, making me comfortable across the stack.

When I'm not coding, I'm exploring new libraries, contributing to open source, or levelling up my problem-solving skills.`,
};

// ── SKILLS ────────────────────────────────────────────────────────────────────
// Add / remove skills freely. categories: "frontend" | "backend" | "database" | "tools" | "language"
export const skills = [
  // Frontend
  { name: "React.js",       level: 90, category: "frontend" },
  { name: "JavaScript",     level: 88, category: "frontend" },
  { name: "HTML5 / CSS3",   level: 90, category: "frontend" },
  { name: "Tailwind CSS",   level: 82, category: "frontend" },
  { name: "Vite",           level: 78, category: "tools"    },

  // Backend
  { name: "Node.js",        level: 85, category: "backend"  },
  { name: "Express.js",     level: 83, category: "backend"  },
  { name: "REST APIs",      level: 85, category: "backend"  },
  { name: "JWT / Auth",     level: 75, category: "backend"  },

  // Database
  { name: "MongoDB",        level: 82, category: "database" },
  { name: "Mongoose",       level: 80, category: "database" },
  { name: "MySQL",          level: 65, category: "database" },

  // Languages
  { name: "Core Java",      level: 80, category: "language" },
  { name: "Python (Basics)",level: 60, category: "language" },

  // Tools
  { name: "Git & GitHub",   level: 85, category: "tools"    },
  { name: "Postman",        level: 80, category: "tools"    },
  { name: "VS Code",        level: 90, category: "tools"    },
];

// ── PROJECTS ──────────────────────────────────────────────────────────────────
// Add new projects by copying one block and changing the values.
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce app with product listings, cart, user auth (JWT), Stripe payments, and an admin dashboard for order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-demo.com",
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Collaborative task tracker with real-time updates via Socket.io, drag-and-drop Kanban board, and team workspaces.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    github: "https://github.com/yourusername/taskmanager",
    live: "",
    featured: true,
    year: 2024,
  },
  {
    id: 3,
    title: "Blog CMS",
    description:
      "Headless CMS blog with markdown editor, rich-text rendering, tag filtering, and a public REST API for third-party consumption.",
    tech: ["React", "Express", "MongoDB", "Marked.js"],
    github: "https://github.com/yourusername/blog-cms",
    live: "",
    featured: false,
    year: 2023,
  },
  {
    id: 4,
    title: "Java Student CRUD",
    description:
      "Desktop CRUD application in Core Java with Swing UI and MySQL backend — managing students, courses, and grades.",
    tech: ["Core Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/yourusername/java-student-crud",
    live: "",
    featured: false,
    year: 2023,
  },
  // ── ADD MORE PROJECTS BELOW ──
  // {
  //   id: 5,
  //   title: "Your New Project",
  //   description: "Short description of what it does.",
  //   tech: ["React", "Node.js"],
  //   github: "https://github.com/...",
  //   live: "",
  //   featured: false,
  //   year: 2025,
  // },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Your Company Name",
    period: "Jan 2024 – Present",
    bullets: [
      "Built and deployed 3 full-stack features using React + Node.js + MongoDB.",
      "Integrated third-party REST APIs and optimised query performance by 30%.",
      "Collaborated in an Agile team of 6 using Git & Jira.",
    ],
  },
  // ── ADD MORE EXPERIENCE BELOW ──
];

// ── EDUCATION ─────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.E. / B.Tech — Computer Science",
    institution: "Your College Name",
    period: "2020 – 2024",
    grade: "CGPA: 8.0 / 10",
  },
];

// ── CERTIFICATIONS (optional) ─────────────────────────────────────────────────
export const certifications = [
  { name: "MongoDB Node.js Developer Path", issuer: "MongoDB University", year: 2024 },
  { name: "The Complete JavaScript Course", issuer: "Udemy", year: 2023 },
  // add more...
];
