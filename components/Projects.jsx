import { PROJECTS } from '../constants/index';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Define animation variants for each project item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b bg-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap justify-center items-start"
        >
          <div className="w-full lg:w-1/4 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 rounded h-48 w-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-3/4 max-w-xl">
            <div className="flex items-center">
              <h6 className="mb-2 font-semibold text-center lg:text-left ml-7">
                {project.title}
              </h6>
              <div className="ml-auto flex items-center">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-purple-800 mr-4"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-purple-800"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <p className="mb-4 text-neutral-400 px-8 text-center lg:text-left">
              {project.description}
            </p>
            <div className="flex justify-center lg:justify-start ml-5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
