import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center pt-32 sm:pt-40 pb-20 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-500 leading-tight mb-4">
          Ali Salimi
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl text-muted mb-8 px-2">
          Frontend Developer with a Passion for AI & Full-Stack
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-6">
          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 text-base sm:text-lg"
          >
            Get In Touch
          </a>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-5">
            <a
              href="https://github.com/Alisalimi11"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-muted hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://linkedin.com/in/ali-salimi-3147b7369"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-muted hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
