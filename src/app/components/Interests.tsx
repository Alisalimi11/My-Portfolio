import React from "react";
import { FaBrain } from "react-icons/fa";

export default function Interests() {
  const interestData = [
    {
      title: "Back-End Development & Full-Stack Engineering",
      description: `I have a strong interest in back-end development and aim to expand my skill set beyond frontend technologies. My goal is to understand and work with server-side logic, databases, and
scalable APIs, enabling me to eventually grow into a well-rounded full-stack developer. I'm
particularly excited about learning technologies such as Node.js, Express, and relational as well
as NoSQL databases to build robust, end-to-end web applications.`,
    },
    {
      title: "Artificial Intelligence & Applied Machine Learning",
      description: `I'm highly motivated to explore the field of Artificial Intelligence, with a focus on applied machine
learning techniques and intelligent systems. I'm fascinated by the potential of AI to solve realworld problems and enhance software capabilities. In the long term, I aspire to gain expertise in
AI development and contribute to meaningful projects involving natural language processing,
recommendation systems, and data-driven decision-making.`,
    },
  ];

  return (
    <section
      id="interests"
      className="pt-20 md:pt-32 rounded-lg px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <FaBrain className="text-indigo-500 text-2xl sm:text-3xl" />
        My Interests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interestData.map((interest, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col hover:shadow-indigo-500/30 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {interest.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
