import { FaUserAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-12 pt-20 md:pt-32 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 flex justify-center items-center gap-3">
        <FaUserAlt className="text-indigo-500 text-2xl sm:text-3xl" />
        About Me
      </h2>
      <p className="max-w-xl sm:max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed sm:leading-loose px-2 sm:px-0">
        Hello! I&apos;m Ali, a junior Front-End Developer with hands-on
        experience using React, Next.js, Tailwind CSS, and Git. Passionate about
        building modern user interfaces and continuously improving coding
        skills. Interested in exploring back-end development in the future.
        Responsible, motivated, and eager to contribute to collaborative
        development teams.
      </p>
    </section>
  );
}
