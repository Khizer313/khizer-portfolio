const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>What I Do</h3>
        </div>
      </div>

      {/* Services List */}
      <div className="relative">

        {/* Frontend Development */}
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Frontend <br /> Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Building fast, responsive, and user-friendly web applications
                using <strong>React.js, Next.js, Redux Toolkit, Tailwind CSS, SCSS, and TypeScript</strong>.
                Focused on clean UI, accessibility, and smooth user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Backend & APIs */}
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Backend <br /> Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Developing scalable APIs and backend logic with{" "}
                <strong>Node.js, Express, MongoDB, and JWT authentication</strong>.
                Experienced with REST and GraphQL APIs, optimized for performance
                and security.
              </p>
            </div>
          </div>
        </div>

        {/* Deployment & Performance */}
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Deployment <br /> & Optimization
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Deploying applications on <strong>Vercel, Netlify, Railway, and cPanel</strong>.
                Skilled in performance optimization, lazy loading, caching, and
                accessibility to deliver smooth, production-ready apps.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
