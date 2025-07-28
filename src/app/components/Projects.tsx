import React from "react";
import { FaCodeBranch, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectData = [
    {
      title: "BatBooks – Social Reading and Writing Platform",
      description: `Developed a responsive front-end interface for a social platform that enables users to read and
write books collaboratively. Built dynamic and reusable components including book listings, user
profiles, and comment sections using React and Tailwind CSS. Focused on mobile-friendly design
and ensured cross-device compatibility. Integrated front-end with RESTful APIs provided by the
back-end team, and maintained clean version control using Git throughout the project.`,
      tags: ["React.js", "Tailwind CSS", "Git", "Responsive Design"],
      repoUrl: "https://github.com/batbooks/frontend",
    },
    {
      title: "TF-IDF Text Search Engine",
      description: `Designed and developed a simple yet effective search engine capable of performing relevanceranked queries over a large collection of text documents. Used the TF-IDF (Term Frequency–
Inverse Document Frequency) algorithm to convert text data into numerical vectors and
calculate document similarity. Preprocessed text data with tokenization, stopword removal, and
stemming using NLTK. Utilized Scikit-learn for vectorization and similarity computation. This
project demonstrated key concepts in natural language processing, vector space models, and
search optimization.`,
      tags: ["Python", "NLTK", "Scikit-learn"],
      repoUrl: "https://github.com/Alisalimi11/ds_project_phase1",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-20 md:pt-32 rounded-lg px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <FaCodeBranch className="text-indigo-500 text-2xl sm:text-3xl" />
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col hover:shadow-indigo-500/30 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5 whitespace-pre-line leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-sm font-semibold bg-gray-700 text-indigo-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex justify-end pt-4 border-t border-gray-700">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
                aria-label={`GitHub repository of ${project.title}`}
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
