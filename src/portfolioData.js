// Portfolio configuration data
// Edit this file to customize the content of your portfolio website.

// Import asset images
import heroBanner from "./assets/hero.png";
import satriaPhoto from "./assets/image.png";
import bryanPhoto from "./assets/image1.png";
import kristinePhoto from "./assets/image2.png";

// Import project images
import project1Image from "./projects/project1.png";
import project2Image from "./projects/project.png";
import project3Image from "./projects/project2.png";
import project4Image from "./projects/project3.png";

export const HERO_DATA = {
  title: "CREATION",
  subtitle: "WHAT EVER YOU CAN THINK , WE CAN BUILD",
  bannerImage: heroBanner,
  quote: "We don’t just develop— ,we build exactly what your business needs.",

  buttonText: "GET IN TOUCH",
  philosophyTitle: "OUR PHILOSOPHY",
  philosophyText:
    "'We help businesses streamline their operations through custom web-based solutions such as online reservations, booking systems, order management, and other digital services tailored to their needs.'",
};

export const MEMBERS = [
  {
    name: "SATRIA C.",
    role: "BACK-END DEVELOPER",
    image: satriaPhoto,
    portfolioUrl: "#", // Replace with Satria's portfolio URL
  },
  {
    name: "BRYAN M.",
    role: "FULL-STACK DEVELOPER",
    image: bryanPhoto,
    portfolioUrl: "https://brynmgny.vercel.app/", // Replace with Bryan's portfolio URL
  },
  {
    name: "KRISTINE P.",
    role: "FRONT-END DEVELOPER",
    image: kristinePhoto,
    portfolioUrl: "https://krstnprz-portfolio.vercel.app/", // Replace with Kristine's portfolio URL
  },
];

export const TECH_STACK = [
  {
    category: "FRONTEND",
    title: "HTML, CSS, JS, React & Next.js",
    desc: "Building highly interactive, component-driven, and fast interfaces using React, Next.js, and TypeScript.",
  },
  {
    category: "STYLING",
    title: "Tailwind CSS, SchadCN, & DaisyUI",
    desc: "Designing clean layouts and responsive user interfaces with utility-first CSS and custom premium variables.",
  },
  {
    category: "BACKEND",
    title: "Node.js, Express.js, & Laravel",
    desc: "Developing robust server-side applications, secure RESTful APIs, and efficient third-party integrations.",
  },
  {
    category: "DATABASES",
    title: "PostgreSQL, MySQL & NoSQL",
    desc: "Designing scalable schemas, query optimizations, and secure data storage using relational and document databases.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "RECTO MEMORIAL NHS WEBSITE",
    category: "OJT PROJECT",
    description:
      "A responsive school website built for Recto Memorial National High School, featuring announcements, events, and an online enrollment inquiry system.",
    image: project1Image,
    link: "https://rectomnhs-website.vercel.app/",
    isPrivate: false,
  },
  {
    id: 2,
    title: "RECTO MEMORIAL NHS INVENTORY SYSTEM",
    category: "OJT PROJECT",
    description:
      "An inventory management system for tracking school supplies, equipment, and assets with real-time stock monitoring and reporting features.",
    image: project2Image,
    isPrivate: true,
  },
  {
    id: 3,
    title: "RMNHS CANTEEN SALES AUTOMATED COMPUTATION",
    category: "OJT PROJECT",
    description:
      "An automated sales computation system for the school canteen that streamlines transactions, tracks daily sales, and generates revenue reports.",
    image: project3Image,
    isPrivate: true,
  },
  {
    id: 4,
    title: "EMPLOYEE ATTENDANCE & MANAGEMENT SYSTEM",
    category: "OJT PROJECT",
    description:
      "A comprehensive system for managing employee attendance, schedules, and payroll with automated time tracking and leave management.",
    image: project4Image,
    isPrivate: true,
  },
];

export const CONTACT_DATA = {
  title: "LET'S CONNECT",
  description:
    "We are currently accepting new collaborative projects for your Bussiness. Reach out to discuss your creative vision.",
  email: "ojtservicea@gmail.com",
  phone: "09158345176",
  location: "Based in Tiaong Quezon Phillipines.",
  // Replace YOUR_FORM_ID with the actual ID from your Formspree dashboard
  formspreeEndpoint: "https://formspree.io/f/mqevzzaq",
};
