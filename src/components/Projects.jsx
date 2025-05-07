import projects from "../data/projectsData";
import { Link } from "react-router-dom"; 
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects
          .filter((project) => !project.hidden) // Only show projects that are not hidden (only important for one project currently)
          .map((project, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              {/* Display project image if available */}
              {project.image ? (
                <div className="relative w-full h-64 rounded-lg mb-4 overflow-hidden shadow">
                  {/* Blurred background image for depth effect */}
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-60"
                    aria-hidden="true"
                  />

                  {/* Main image in front */}
                  <img
                    src={project.image}
                    alt={project.title || 'Project'}
                    className="relative z-10 object-contain w-full h-full"
                  />
                </div>
              ) : (
                //Fallback if no image is provided
                <div className="w-full h-64 md:h-72 flex items-center justify-center rounded-lg mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold shadow">
                  {project.title}
                </div>
              )}

              {/* Project title (only if not coming soon and image exists) */}
              {!project.comingSoon && project.image && (
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              )}

              {/* Project description (if not coming soon) */}
              {!project.comingSoon && (
                <p className="text-gray-400 mb-4">{project.description}</p>
              )}

              {/* Tech stack */}
              {project.tech && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons for GitHub, live demo, or thesis */}
              {!project.comingSoon && (
                <div className="flex justify-center gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white font-medium hover:underline"
                    >
                      <FaGithub className="w-5 h-5" />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white font-medium hover:underline"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      Live
                    </a>
                  )}

                  {project.route && (
                    <Link
                      to={project.route}
                      className="flex items-center gap-1 text-white font-medium hover:underline"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      View Thesis
                    </Link>
                  )}
                </div>
              )}

              {/* Status badge for in-progress projects */}
              {project.inProgress && (
                <span className="inline-block bg-white text-black font-semibold px-4 py-2 rounded opacity-80 cursor-default mt-4">
                  Currently working on
                </span>
              )}

              {/* Placeholder text for upcoming projects */}
              {project.comingSoon && (
                <p className="text-gray-400 mt-4">
                  More projects coming soon...
                </p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
