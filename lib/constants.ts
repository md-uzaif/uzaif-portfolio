import {
  FaAws,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaJava,
  FaLock,
  FaReact,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";

import { RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { SiSpringboot } from "react-icons/si";

export const CORE_STACK = [
  {
    name: "Java",
    detail: "Core backend language",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    detail: "REST APIs and services",
    icon: SiSpringboot,
  },
  {
    name: "MySQL",
    detail: "Relational data design",
    icon: FaDatabase,
  },
  {
    name: "AWS",
    detail: "S3, EC2, RDS",
    icon: FaAws,
  },
] as const;

export const ABOUT_POINTS = [
  "Java Full Stack Developer with a backend-focused approach, working with Spring Boot, REST APIs, security, databases, and real business systems.",
  "Founder & Developer of Uzaif Tech Solutions, a small web services platform built to help local businesses and startups launch affordable digital products quickly.",
  "Focused on practical delivery: clean APIs, secure login flows, lightweight websites, WhatsApp-first lead funnels, and maintainable systems that can grow.",
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Backend",
    icon: FaCode,
    skills: ["Java 8", "Spring Boot", "Spring MVC", "REST APIs"],
  },
  {
    title: "Security",
    icon: FaLock,
    skills: ["Spring Security", "JWT", "RBAC", "Server-Side Validation"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: ["MySQL", "Hibernate", "JPA", "JPQL", "Criteria API"],
  },
  {
    title: "Cloud",
    icon: FaAws,
    skills: ["AWS S3", "AWS EC2", "AWS RDS", "cPanel", "InfinityFree"],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "Postman", "Swagger", "Maven", "JUnit", "Mockito"],
  },
  {
    title: "Frontend",
    icon: FaReact,
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
] as const;

export const SERVICES = [
  {
    title: "Website Development",
    icon: FaGlobe,
    description:
      "Build clean, responsive websites that turn visitors into real inquiries.",
    highlights: [
      "Design business-focused websites using WordPress, Elementor, React, or custom frontend.",
      "Create fast, mobile-friendly pages for services, portfolios, and lead generation.",
      "Structure content clearly so clients understand offerings and take action.",
      "Optimize layout, performance, and calls-to-action for better conversion.",
    ],
  },
  {
    title: "Backend & API Development",
    icon: FaCode,
    description:
      "Build secure backend systems that power real business workflows.",
    highlights: [
      "Develop REST APIs using Java, Spring Boot, and clean layered architecture.",
      "Design MySQL databases with JPA and Hibernate for scalable data handling.",
      "Build authentication, booking flows, search, filters, and admin logic.",
      "Optimize APIs for reliability, validation, maintainability, and future growth.",
    ],
  },
  {
    title: "Deployment & Production Support",
    icon: FaTools,
    description:
      "Deploy secure websites and backend systems ready for real production use.",
    highlights: [
      "Deploy Spring Boot APIs and client websites with Git, Maven, cPanel, and hosting workflows.",
      "Configure domains, SSL, email, AWS EC2, S3, and RDS/MySQL for live environments.",
      "Secure APIs using Spring Security, JWT authentication, validation, and protected endpoints.",
      "Resolve live issues with logs, Postman, Swagger, and API/database performance tuning.",
    ],
  },
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    title: "Higher Secondary Education - Science (Mathematics)",
    year: "2016 - 2018",
    icon: "graduation",
    description:
      "Built analytical thinking, logical reasoning, and problem-solving fundamentals through a Science (Mathematics) background.",
    highlights: ["Strong foundation in mathematics", "Developed problem-solving skills"],
    related: ["Analytical thinking", "Problem solving"],
  },
  {
    title: "Career Exploration & Digital Learning",
    year: "2018 - 2019",
    icon: "compass",
    description:
      "Focused on self-learning, technology exploration, and digital systems while completing a Diploma in Computer Applications (DCA).",
    highlights: ["Self-taught various digital tools", "Completed a Diploma in Computer Applications"],
    related: ["Self-learning", "DCA", "Digital systems"],
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    year: "2019 - 2023",
    icon: "book-open",
    description:
      "Completed Computer Science & Engineering with focus on programming, software development, databases, and web technologies.",
    highlights: ["Specialized in software development", "Gained expertise in database management"],
    related: ["Programming", "Databases", "Web technologies"],
  },
  {
    title: "Java Developer - INCAPP Training & Development",
    year: "2022",
    location: "Greater Noida, India",
    icon: "terminal",
    description:
      "Worked on Java, backend fundamentals, object-oriented programming, and database connectivity through practical training.",
    highlights: ["Developed core Java applications", "Implemented OOP principles"],
    related: ["Java", "OOP", "Database connectivity"],
  },
  {
    title: "Java Full Stack Developer - PS Acad Cons.",
    year: "2022 - 2023",
    location: "BTM Layout 2nd Stage, Bangalore",
    icon: "layers",
    description:
      "Contributed to frontend and backend application development, API integration, responsive UI work, and database-driven web solutions.",
    highlights: ["Built responsive user interfaces with React", "Integrated RESTful APIs"],
    related: ["React", "REST APIs", "Database-driven apps"],
  },
  {
    title: "Software Engineer - Software AG",
    year: "2023 - Present",
    icon: "briefcase",
    description:
      "Working on enterprise-grade software solutions, scalable applications, APIs, deployment workflows, and full-stack practices.",
    highlights: ["Contributed to scalable enterprise solutions", "Managed API deployment and maintenance"],
    related: ["Enterprise software", "Deployment workflows", "Scalable applications"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Hotel Booking & Management Platform",
    description:
      "A backend-heavy hotel system for bookings, room inventory, search, notifications, inspection, and maintenance workflows.",
    image: "/projects/project-1.webp",
    link: "https://www.vrbo.com/",
    stack: [
      "Java 8",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "JPA",
      "Hibernate",
      "AWS S3",
      "Twilio",
    ],
    contributions: [
      "Developed booking APIs with real-time room and service availability validation.",
      "Built secure authentication and RBAC for Admin, Hotel Manager, Front Desk Executive, and Customer roles.",
      "Created inventory APIs for add, update, delete, filter, pagination, and sorting by room type, price, and availability.",
      "Integrated AWS S3 for room photos and documents, plus Twilio notifications for confirmations and reminders.",
      "Documented APIs with Swagger, validated flows in Postman, and tested business logic with JUnit and Mockito.",
    ],
  },
  {
    title: "UTS - Uzaif Tech Solutions",
    description:
      "A live web and digital services platform for affordable websites, WordPress setup, hosting support, maintenance, and client acquisition.",
    image: "/projects/project-2.webp",
    link: "https://technology.wuaze.com/",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Elementor",
      "cPanel",
      "InfinityFree",
      "WhatsApp",
    ],
    contributions: [
      "Founded and developed the platform to target local businesses, startups, and individuals needing quick digital presence.",
      "Designed service-based landing sections for web design, WordPress customization, hosting, maintenance, and SEO setup.",
      "Configured contact forms and WhatsApp-first communication to reduce friction from visitor interest to client inquiry.",
      "Deployed the site using cPanel/InfinityFree with a lightweight structure for low-bandwidth accessibility.",
      "Defined the growth strategy from freelancer service model toward a structured web services agency.",
    ],
  },
  {
    title: "Digi Help - Digital Assistance Platform",
    description:
      "A production-ready digital assistance platform for Indian users handling PAN, GST, scholarship, job form, and online service workflows.",
    image: "/projects/project-3.webp",
    link: "https://digihelps.netlify.app/",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Netlify",
      "Google Analytics",
      "WordPress",
      "WPForms",
      "WhatsApp",
    ],
    contributions: [
      "Built a mobile-first landing experience for students, job seekers, professionals, and local users.",
      "Created service sections for PAN, GST, scholarship, and job-form assistance with a trust-focused UI.",
      "Designed a WhatsApp-first lead funnel using floating CTAs, form redirection, and structured quick replies.",
      "Optimized pages for high-intent service queries, low-bandwidth users, and fast lead conversion.",
      "Planned future growth toward dashboard-based automation for status tracking and service handling.",
    ],
  },
  {
    title: "Java Full Stack Developer Portfolio",
    description:
      "This portfolio, built to present backend strength, real client-facing projects, and a startup mindset in a recruiter-friendly format.",
    image: "/projects/project-4.webp",
    link: "/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    contributions: [
      "Rebuilt copied template content into authentic positioning around Java full stack and backend-focused work.",
      "Structured sections for services, skills, experience, and project case studies based on real work.",
      "Kept the presentation concise for recruiters while highlighting founder mindset and execution ability.",
    ],
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/md-uzaif-umar-ab787520b/",
  },
  {
    name: "X",
    icon: RxTwitterLogo,
    link: "https://x.com/umar_uzaif",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://www.threads.com/@the_uzaif",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:uzaifumar17@gmail.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Profile",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/md-uzaif-umar-ab787520b/",
      },
      {
        name: "X",
        icon: RxTwitterLogo,
        link: "https://x.com/umar_uzaif",
      },
    ],
  },
  {
    title: "Work",
    data: [
      {
        name: "Java Full Stack Developer",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Uzaif Tech Solutions",
        icon: null,
        link: "https://uzaiftechs.wuaze.com/",
      },
      {
        name: "Digi Help",
        icon: null,
        link: "https://digihelps.netlify.app/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: FaEnvelope,
        link: "mailto:uzaifumar17@gmail.com",
      },
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://www.threads.com/@the_uzaif",
      },
      {
        name: "View Projects",
        icon: null,
        link: "#projects",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  contact: "mailto:uzaifumar17@gmail.com",
};
