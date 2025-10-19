const skills = [
  {
    title: "Frontend Development",
    desc: "React.js, Redux Toolkit, Tailwind CSS, SCSS, GSAP, and responsive UI design. Focused on clean, accessible, and optimized interfaces.",
  },
  {
    title: "Backend & APIs",
    desc: "Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, RESTful APIs, and GraphQL integration.",
  },
  {
    title: "Performance & Optimization",
    desc: "Lazy loading, caching, throttling, debouncing, React Suspense, and accessibility using ARIA standards.",
  },
  {
    title: "Deployment & DevOps",
    desc: "Deployed apps on Vercel, Netlify, Render, Railway, and cPanel. Familiar with CI/CD setup and environment management.",
  },
  {
    title: "Headless CMS & Data Handling",
    desc: "Experience with Strapi Headless CMS and IndexDB caching for offline-first apps and large data handling.",
  },
  {
    title: "AI-Assisted Problem Solving",
    desc: "Leverage AI tools like ChatGPT to debug, optimize, and rapidly iterate during complex development phases.",
  },
];

const TechnicalExpertise = () => {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="main-container text-center">
        <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-10 text-black">
          Technical Expertise
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {skills.map((tech) => (
            <div
              key={tech.title}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <h4 className="font-semibold text-lg mb-2 text-black">
                {tech.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
