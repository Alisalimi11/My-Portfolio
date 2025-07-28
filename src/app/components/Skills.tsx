import { FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Git & GitHub",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Figma",
    "Python",
    "C",
    "C++",
    "C#",
  ];

  return (
    <section
      className="px-4 sm:px-6 md:px-12 pt-20 md:pt-32 text-white"
      id="skills"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <FaTools className="text-indigo-500 text-2xl sm:text-3xl" />
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center max-w-5xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-indigo-500 px-3 sm:px-4 py-2 rounded-full font-medium text-sm sm:text-lg text-center transition-colors hover:bg-indigo-600 hover:text-white cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
