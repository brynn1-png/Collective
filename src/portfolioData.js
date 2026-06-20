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
    role: "DEVELOPER",
    image: satriaPhoto,
  },
  {
    name: "BRYAN M.",
    role: "DEVELOPER",
    image: bryanPhoto,
  },
  {
    name: "KRISTINE P.",
    role: "DEVELOPER",
    image: kristinePhoto,
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
    image: project1Image,
    size: "md:col-span-2 aspect-[16/9] md:aspect-auto",
    link: "https://rectomnhs-website.vercel.app/",
    isPrivate: false,
  },
  {
    id: 2,
    title: "RECTO MEMORIAL NHS INVENTORY SYSTEM",
    category: "OJT PROJECT",
    image: project2Image,
    size: "aspect-[4/3]",
    isPrivate: true,
  },
  {
    id: 3,
    title: "RMNHS CANTEEN SALES AUTOMATED COMPUTATION",
    category: "OJT PROJECT",
    image: project3Image,
    size: "aspect-[4/3]",
    isPrivate: true,
  },
  {
    id: 4,
    title: "EMPLOYEE ATTENDANCE & MANAGEMENT SYSTEM",
    category: "OJT PROJECT",
    image: project4Image,
    size: "md:col-span-2 aspect-[16/9] md:aspect-auto",
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
