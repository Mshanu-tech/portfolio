// Central content store for the portfolio.
// Edit this file to update copy, links, and personal details across the whole site.

export const personal = {
  name: "Muhammed Shanu A",
  role: "Full Stack Developer (MERN Stack)",
  tagline: "I build modern, responsive and user-friendly web applications using the MERN stack — from REST APIs and auth to polished, production-ready interfaces.",
  location: "Mavoor, Kozhikode, Kerala, India",
  email: "ashanu2004@gmail.com",
  phone: "+91 75928 25349",
  languages: ["Malayalam", "English", "Tamil"],
  resumeUrl: "/MuhammedShanuCV.pdf",
  social: {
    github: "https://github.com/Mshanu-tech",
    linkedin: "https://www.linkedin.com/in/muhammed-shanu-a-8544a5250/",
    whatsapp: "https://wa.me/917592825349",
    email: "mailto:ashanu2004@gmail.com",
  },
  about: `I'm a Full Stack Developer specializing in the MERN stack, with hands-on internship experience building responsive web applications using React.js, Node.js, Express.js and MongoDB. I'm passionate about UI/UX, scalable frontend architecture and turning ideas into fast, secure, real-world products — while continuing my BCA through IGNOU alongside my development work.`,
};

export const stats = [
  { label: "Projects", sub: "Completed", value: 6, suffix: "+", icon: "code" },
  { label: "Tech Stack", sub: "Technologies", value: 15, suffix: "+", icon: "smile" },
  { label: "Experience", sub: "Experience", value: 2.5, suffix: "mo", icon: "coffee" },
  { label: "Commitment", sub: "Dedication", value: 100, suffix: "%", icon: "rocket" },
];

export const achievements = [
  { label: "Projects Delivered", value: 6, suffix: "+" },
  { label: "GitHub Repositories", value: 43, suffix: "+" },
  { label: "Core Technologies", value: 15, suffix: "+" },
  { label: "Months of Internship", value: 11, suffix: "" },
];

export const experienceTimeline = [
  {
    title: "Freelancer — Full Stack Developer",
    place: "Freelance / Work From Home",
    period: "Ongoing",
    description: "Working independently on client projects, building responsive websites and full-stack web applications with a focus on quality and usability.",
    icon: "briefcase",
    color: "primary",
  },
  {
    title: "Full Stack Developer — CodoStack",
    place: "CodoStack (Work From Home)",
    period: "Dec 2024 – May 2026",
    description: "Built and maintained modern web applications, collaborated on product development, and supported ongoing feature delivery.",
    icon: "briefcase",
    color: "success",
  },
  {
    title: "React Developer — ISYSV",
    place: "ISYSV (Work From Home)",
    period: "Nov 2023 – Apr 2024",
    description: "Worked on website and web application development tasks, contributing to responsive interfaces and client-facing solutions.",
    icon: "briefcase",
    color: "primary",
  },
  {
    title: "MERN Stack Developer — Intern",
    place: "Bridgeon Solutions, Malappuram, Kerala",
    period: "Jan 2023 – Nov 2023",
    description: "Built MERN stack web applications and RESTful APIs, implemented authentication and payment integrations, and collaborated with the team through daily Agile stand-ups.",
    icon: "briefcase",
    color: "primary",
  },
];

export const educationTimeline = [
  {
    title: "BCA — Bachelor of Computer Applications",
    place: "IGNOU (Distance Education)",
    period: "Ongoing",
    description: "Currently pursuing a Bachelor's degree in Computer Applications through distance learning, alongside hands-on MERN stack development work.",
    icon: "graduation",
    color: "accent",
  },
    {
    title: "MERN Stack Developer — Intern",
    place: "Bridgeon Solutions, Malappuram, Kerala",
    period: "Jan 2023 – Nov 2023",
    description: "Built MERN stack web applications and RESTful APIs, implemented authentication and payment integrations, and collaborated with the team through daily Agile stand-ups.",
    icon: "briefcase",
    color: "primary",
  },
  {
    title: "Higher Secondary (+2), Computer Science",
    place: "Vadi Husna Public School, Koduvally (CBSE)",
    period: "2022",
    description: "Completed higher secondary education with a focus on computer science fundamentals, laying the foundation for a career in software development.",
    icon: "book",
    color: "success",
  },
];

export const skills = {
  Frontend: [
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript", level: 92, icon: "javascript" },
    { name: "TypeScript", level: 78, icon: "typescript" },
    { name: "React.js", level: 90, icon: "react" },
    { name: "Next.js", level: 78, icon: "nextjs" },
    { name: "Redux", level: 80, icon: "redux" },
    { name: "Tailwind CSS", level: 88, icon: "tailwind" },
    { name: "React-Bootstrap", level: 78, icon: "bootstrap" },
    { name: "MUI", level: 76, icon: "mui" },
  ],
  Backend: [
    { name: "Node.js", level: 88, icon: "nodejs" },
    { name: "Express.js", level: 85, icon: "express" },
    { name: "JWT", level: 80, icon: "jwt" },
    { name: "Bcrypt", level: 76, icon: "bcrypt" },
    { name: "EJS", level: 72, icon: "ejs" },
  ],
  Database: [
    { name: "MongoDB", level: 85, icon: "mongodb" },
    { name: "Mongoose", level: 80, icon: "mongodb" },
    { name: "MySQL", level: 78, icon: "mysql" },
    { name: "Cloudinary", level: 74, icon: "cloudinary" },
  ],
  Tools: [
    { name: "Git", level: 88, icon: "git" },
    { name: "GitHub", level: 88, icon: "github" },
    { name: "Figma", level: 75, icon: "figma" },
    { name: "Notion", level: 68, icon: "notion" },
    { name: "Firebase", level: 72, icon: "firebase" },
    { name: "Cloudflare", level: 70, icon: "cloudflare" },
  ],
  "Hosting & Deployment": [
    { name: "Vercel", level: 82, icon: "vercel" },
    { name: "Hostinger", level: 76, icon: "hostinger" },
    { name: "GoDaddy", level: 72, icon: "godaddy" },
    { name: "MileWeb", level: 70, icon: "mileweb" },
    { name: "Render", level: 80, icon: "render" },
    { name: "Git Bash", level: 78, icon: "gitbash" },
  ],
  Languages: [
    { name: "Java", level: 60, icon: "java" },
    { name: "C", level: 55, icon: "c" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "CloudQlobe",
    category: "Full Stack",
    description: "A modern telecom platform with a polished interface and a full-stack admin experience for services and content management.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Crypto", "Tailwind CSS", "Cloudinary", "JWT"],
    demo: "https://www.cloudqlobe.com/",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/cloudqlobe.png",
  },
  {
    id: 2,
    title: "Voxentrax",
    category: "Frontend",
    description: "A premium VoIP business website focused on clarity, trust, and strong conversion-oriented presentation.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://voxentrax.com/",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/voxentrax.png",
  },
  {
    id: 3,
    title: "Giant VoIP",
    category: "Frontend",
    description: "A fully responsive corporate website for a VoIP business with premium visuals and smooth user experience.",
    tech: ["React.js", "CSS3"],
    demo: "https://giantvoip.vercel.app/",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/giant.png",
  },
  {
    id: 4,
    title: "Mariyaam Telecom",
    category: "Full Stack",
    description: "A telecom services platform built with a modern frontend and a full-stack backend for content and service management.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Crypto", "Tailwind CSS", "Cloudinary", "JWT"],
    demo: "http://mariyaamtelecom.com/",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/mariyaam.png",
  },
  {
    id: 5,
    title: "Gym Management System",
    category: "Full Stack",
    description: "A gym management web app for tracking member health with tiered subscription pricing and integrated Razorpay payments supporting UPI, cards and wallets.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay"],
    demo: "#",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/Gym.svg",
  },
  {
    id: 6,
    title: "Car Parking Management",
    category: "Full Stack",
    description: "A MERN stack parking platform connecting admins, plot owners and users with live availability and Razorpay payments.",
    tech: ["React", "Redux", "MongoDB", "Express.js", "Razorpay"],
    demo: "#",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/car.svg",
  },
  {
    id: 7,
    title: "Codostack",
    category: "Frontend",
    description: "A modern frontend project for a technology-focused company, crafted to highlight services and brand presence clearly.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://www.codostack.com/",
    github: "https://github.com/Mshanu-tech",
    image: "/images/projects/codostack.png",
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend"];

export const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications built on the MERN stack — from database schema to polished UI.",
    icon: "layers",
  },
  {
    title: "Responsive Website",
    description: "Pixel-perfect, mobile-first websites that look and feel great on every screen size.",
    icon: "smartphone",
  },
  {
    title: "REST API Development",
    description: "Secure, well-documented APIs with JWT authentication, validation and clean architecture.",
    icon: "server",
  },
  {
    title: "Payment Integration",
    description: "Seamless Razorpay payment flows supporting UPI, cards and wallets across web apps.",
    icon: "layout-dashboard",
  },
  {
    title: "UI Implementation",
    description: "Turning Figma designs into pixel-accurate, accessible, production-ready interfaces.",
    icon: "palette",
  },
  {
    title: "Performance Optimization",
    description: "Faster load times, smaller bundles and smoother interactions through targeted optimization.",
    icon: "gauge",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
