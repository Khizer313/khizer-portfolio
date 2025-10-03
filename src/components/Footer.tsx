import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        {/* Abbreviation Logo */}
        <Link
          to="/"
          className="font-heading text-3xl font-bold tracking-wider text-white"
        >
          KA
        </Link>
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="">React App Development</a>
            </li>
            <li>
              <a href="">MERN Stack</a>
            </li>
            <li>
              <a href="">SEO & Performance Optimization</a>
            </li>
            <li>
              <a href="">Deployment</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>Mon - Fri</li>
            <li>24/7 WhatsApp & Email</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>abbaskhizer249@gmail.com</li>
            <li>+92 337 6333235</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      {/* Footer Bottom */}
      <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
        <div className="text-base lg:text-lg">
          © 2025 KA | All rights reserved
        </div>
        <div className="flex gap-3 justify-center md:justify-end">
          {/* social icons yahan jo tumne diye the */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
        >
          {/* Custom SVG Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
