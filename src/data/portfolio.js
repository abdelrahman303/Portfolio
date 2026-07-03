import iamImage from '../../src/assets/imaImage.png';
import businessImage from '../../src/assets/businessImage.png';
import employeeImage from '../../src/assets/employeeImage.png';
import aqarImage from '../../src/assets/aqarImage.png';
import tatweerImage from '../../src/assets/tatweerImage.png';
import digitalImage from '../../src/assets/digitalImage.png';
import siyanaImage from '../../src/assets/siyanaImage.png';
import orderImage from '../../src/assets/orderImage.png';
import chatImage from '../../src/assets/chatImage.png';
import zenvyImage from '../../src/assets/zenvyImage.png';

export const personalInfo = {
  name: "Abdelrahman Reda",
  title: "Full Stack Developer",
  tagline: "Architecting scalable backends and pixel-perfect frontends with 2+ years of professional experience.",
  tech: [
    "React.js", "Next.js", "Node.js", "NestJS",
    "Python", "FastAPI", "REST APIs", "GraphQL", "TypeScript", "JavaScript", "Redux.js",
    "Tailwind CSS", "Bootstrap", "MongoDB", "Supabase", "Git/GitHub"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Salis IAM (SSO)",
    description: "Centralized Single Sign-On application integrated with Odoo for secure, seamless user authentication across the ecosystem.",
    tech: ["React.js", "Odoo Integration", "Tailwind CSS"],
    image: iamImage,
    link: "https://iam.salis.app/login"
  },
  {
    id: 2,
    title: "Business Salis",
    description: "B2B SaaS frontend for subscription management.",
    tech: ["React.js", "REST APIs", "Tailwind CSS"],
    image: businessImage,
    link: "https://business.salis.app/"
  },
  {
    id: 3,
    title: "Employee Salis",
    description: "Internal HR dashboard for seamless workflow execution.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: employeeImage,
    link: "https://employee.salis.app/"
  },
  {
    id: 4,
    title: "Aqar Salis",
    description: "Prop-tech platform enabling fractional property shares, buying, and renting with isolated portals for B2B and B2C users.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: aqarImage,
    link: "https://aqar.salis.app/"
  },
  {
    id: 5,
    title: "Tatweer pro",
    description: "Modern web platforms featuring Dark/Light mode toggles, smooth animations, and bilingual (AR/EN) support.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: tatweerImage,
    link: "https://tatweer.pro/"
  },
  {
    id: 6,
    title: "Salis Digital",
    description: "Modern web platforms featuring Dark/Light mode toggles, smooth animations, and bilingual (AR/EN) support.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: digitalImage,
    link: "https://salis.digital/"
  },
  {
    id: 7,
    title: "Siyana Salis",
    description: "Tailored frontend solutions for a maintenance service platform and a specialized medical application.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: siyanaImage,
    link: "https://siyana.salis.app/"
  },
  {
    id: 8,
    title: "Salis Order Point",
    description: "Highly interactive, real-time order management dashboard focused on fast, user-friendly cashier workflows.",
    tech: ["React.js", "Node.js", "Framer Motion", "Tailwind CSS"],
    image: orderImage,
    link: "https://order.salis.app/"
  },
  {
    id: 9,
    title: "Salis Chat",
    description: "Real-time chat application with real-time messaging and notifications.",
    tech: ["React.js", "Node.js", "Framer Motion", "Tailwind CSS"],
    image: chatImage,
    link: "https://chat.salis.app/"
  },
  {
    id: 10,
    title: "ZenvyEG Clothing Brand",
    description: "Full-stack e-commerce architecture featuring tailored layouts for administrators and buyers.",
    tech: ["React.js", "NestJS", "MongoDB"],
    image: zenvyImage,
    link: "https://zenvyeg.com/"
  },
  {
    id: 11,
    title: "MartZone Commerce Platform",
    description: "Multi-vendor ecosystem with distinct management dashboards for admins, sellers, and buyers.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Python/FastAPI", "Supabase"],
    image: "/api/placeholder/800/600",
    link: "#"
  },
  {
    id: 12,
    title: "Nationality Verification App",
    description: "Cross-platform mobile application to securely streamline verification workflows.",
    tech: ["React Native", "JWT", "REST APIs"],
    image: "/api/placeholder/800/600",
    link: "#"
  },
  {
    id: 13,
    title: "Job Search Backend",
    description: "Scalable backend systems for job hunting.",
    tech: ["Node.js", "MongoDB"],
    image: "/api/placeholder/800/600",
    link: "#"
  }
];