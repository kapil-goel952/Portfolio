import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    return (
        <div className="card  flex flex-col border-2 rounded-xl justify-end p-4 w-full sm:w-100 lg:w-120 shrink-0 border-gray-600 min-h-70">

            <p className="text-base sm:text-lg text-purple-600 my-2 font-black">
                {project.category}
            </p>

            <p className="text-xl sm:text-2xl text-white font-black">
                {project.title}
            </p>

            <p className="text-sm sm:text-base text-gray-500 mt-2">
                {project.description}
            </p>

            <div className="my-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-blue-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <Link
                to={project.link}
                className="text-purple-500 text-base sm:text-lg font-black hover:text-white transition-all duration-500"
            >
                View Project →
            </Link>

        </div>
    )
}

export default ProjectCard