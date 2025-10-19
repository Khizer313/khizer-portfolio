import storeonImg from "../assets/images/storeon-app.png";
import shoeImg from "../assets/images/shoes-app.png";
import portfolioImg from "../assets/images/portfolio-app.png";
import storeImg from "../assets/images/huge-store-app.png";
import posImg from "../assets/images/pos-app.png";

const projects = [
  {
    id: 1,
    name: "Full Stack Ecom Store",
    image: storeonImg,
    link: "https://storeon.online/",
    github: "https://github.com/Khizer313/storeon-backend",
    techStack: ["React", "Tailwind CSS", "Strapi CMS", "React Helmet", "PWA"],
    highlights:
      "Full-stack eCommerce app with headless CMS (Strapi), SEO optimization, and PWA support for offline access.",
  },
  {
    id: 2,
    name: "Shoes Brand Landing Page",
    image: shoeImg,
    link: "https://brandshoe.netlify.app/",
    github: "https://github.com/Khizer313/shoe-brand",
    techStack: ["React", "Tailwind CSS", "Figma to Code"],
    highlights:
      "Modern, responsive landing page coded from Figma design with Tailwind CSS and React.",
  },
  {
    id: 3,
    name: "Huge Online Store",
    image: storeImg,
    link: "https://react-js-online-store-app.netlify.app/",
    github: "https://github.com/Khizer313/online-store",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "JWT Auth",
    ],
    highlights:
      "Multi-page eCommerce store with user authentication (JWT), product catalog, and dynamic cart functionality.",
  },
  {
    id: 4,
    name: "Personal Portfolio",
    image: portfolioImg,
    link: "https://khizerabbas.netlify.app/",
    github: "https://github.com/Khizer313/portfolio",
    techStack: ["React", "Tailwind CSS"],
    highlights:
      "Minimalist portfolio website to showcase my professional projects and skills.",
  },
  {
    id: 5,
    name: "POS Inventory Management System (Ongoing)",
    image: posImg,
    github: "https://github.com/Khizer313/digital-shop-frontend.git",
    techStack: [
      "React",
      "Tailwind",
      "MUI DataGrid",
      "NestJS",
      "MongoDB",
      "IndexedDB",
      "Server-side Pagination",
    ],
    highlights:
      "Advanced POS app with server-side filtering, caching using IndexedDB, debouncing, throttling, and memory optimization.",
  },
];

export default projects;
