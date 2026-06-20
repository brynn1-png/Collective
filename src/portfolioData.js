// Portfolio configuration data
// Edit this file to customize the content of your portfolio website.

export const HERO_DATA = {
  title: "CREATION",
  subtitle: "WHAT EVER YOU CAN THINK , WE CAN BUILD",
  bannerImage: "/src/assets/hero.png",
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
    image: "/src/assets/image.png",
  },
  {
    name: "BRYAN M.",
    role: "DEVELOPER",
    image: "src/assets/image1.png",
  },
  {
    name: "KRISTINE P.",
    role: "DEVELOPER",
    image: "src/assets/image2.png",
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
    image: "/src/projects/project1.png",
    size: "md:col-span-2 aspect-[16/9] md:aspect-auto",
    link: "https://rectomnhs-website.vercel.app/",
    isPrivate: false,
  },
  {
    id: 2,
    title: "RECTO MEMORIAL NHS INVENTORY SYSTEM",
    category: "OJT PROJECT",
    image: "/src/projects/project.png",
    size: "aspect-[4/3]",
    isPrivate: true,
  },
  {
    id: 3,
    title: "RMNHS CANTEEN SALES AUTOMATED COMPUTATION",
    category: "OJT PROJECT",
    image: "/src/projects/project2.png",
    size: "aspect-[4/3]",
    isPrivate: true,
  },
  {
    id: 4,
    title: "EMPLOYEE ATTENDANCE & MANAGEMENT SYSTEM",
    category: "OJT PROJECT",
    image: "/src/projects/project3.png",
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
