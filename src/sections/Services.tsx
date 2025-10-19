const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">What I Do</h3>
          <h2 className="text-5xl lg:text-6xl font-heading font-bold leading-[1.1]">
            Transforming Ideas into Functional Experiences
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I specialize in creating high-performing, responsive, and visually
            engaging web solutions — blending <strong>modern front-end frameworks</strong>, 
            backend logic, and <strong>performance-first design</strong>.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="relative">

        {/* Frontend Development */}
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-500 text-lg lg:text-2xl font-heading block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Frontend <br /> Development
              </h2>
            </div>

            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Building responsive, accessible, and SEO-friendly UIs using{" "}
                <strong>React.js, Redux Toolkit, Tailwind CSS, SCSS, and TypeScript</strong>.
                I focus on clean, component-driven architecture and pixel-perfect designs
                from Figma — optimized for performance and accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Backend & APIs */}
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-500 text-lg lg:text-2xl font-heading block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Backend <br /> Development
              </h2>
            </div>

            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Developing scalable REST and GraphQL APIs with{" "}
                <strong>Node.js, Express, MongoDB, and JWT authentication</strong>.
                Experienced in headless CMS like <strong>Strapi</strong> and{" "}
                <strong>NestJS</strong> for structured, maintainable backend logic.
              </p>
            </div>
          </div>
        </div>

        {/* Deployment & Optimization */}
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-500 text-lg lg:text-2xl font-heading block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Deployment <br /> & Optimization
              </h2>
            </div>

            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Experienced in deploying production apps on{" "}
                <strong>Vercel, Netlify, Render, Railway, and cPanel</strong>.
                Focused on <strong>lazy loading, caching (IndexedDB), throttling, debouncing, code splitting,</strong>{" "}
                and <strong>React Suspense</strong> for peak performance.
                Implemented accessibility best practices with{" "}
                <strong>ARIA labels</strong> and optimized SEO via{" "}
                <strong>React Helmet</strong>.  
                Embracing <strong>AI-assisted workflows</strong> for smarter, faster development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
