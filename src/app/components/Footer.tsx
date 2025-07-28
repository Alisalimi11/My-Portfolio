import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 mt-20 border-t border-gray-800 text-gray-400"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/Alisalimi11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-salimi-3147b7369"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ali.y.p.1383@gmail.com"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ali Salimi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
