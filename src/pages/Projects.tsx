import projects from "../components/projectsData";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container py-28">
          {/* Header */}
          <h2 className="text-5xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center mb-12">
            Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(({ id, name, image, link, github, techStack, highlights }) => (
              <div
                key={id}
                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="group relative overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold uppercase mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{highlights}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        className="text-blue-600 text-sm font-semibold hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        className="text-gray-700 text-sm font-semibold hover:underline"
                      >
                        Code →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Optimization Section */}
      <section className="bg-gray-50 py-20">
        <div className="main-container text-center">
          <h3 className="text-4xl font-heading font-bold mb-8 text-black">
            Performance & Optimization Techniques
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
            <li>✅ React Helmet for SEO meta optimization</li>
            <li>✅ PWA setup for offline access</li>
            <li>✅ Server-side pagination for large data sets</li>
            <li>✅ IndexedDB caching for offline data storage</li>
            <li>✅ Debouncing & throttling for API filters</li>
            <li>✅ Dynamic state cleanup to prevent memory leaks</li>
            <li>✅ Lazy loading components for faster page load</li>
            <li>✅ Tailwind JIT compiler for optimized CSS</li>
            <li>✅ Image compression & responsive loading</li>
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white text-center">
        <div className="main-container">
          <h2 className="text-4xl font-bold mb-8 text-black" >Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux Toolkit",
              "Next.js",
              "GSAP",
              "Node.js",
              "Express.js",
              "Strapi CMS",
              "MongoDB",
              "IndexedDB",
              "Performance Optimization",
              "SEO (React Helmet)",
              "PWA",
              "MUI DataGrid",
              "Figma to Code",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 font-medium hover:bg-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Projects;
