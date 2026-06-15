import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
            id: 1,
            category: "Web App",
            title: "Cyber Dashboard",
            description:
                "A futuristic dashboard for monitoring analytics, security events and system performance.",
            technologies: ["React", "Tailwind", "Chart.js"],
            link: "/"
        },

        {
            id: 2,
            category: "Mobile App",
            title: "Fitness Tracker",
            description:
                "Track workouts, calories and daily activities with a modern mobile experience.",
            technologies: ["React Native", "Firebase", "Expo"],
            link: "/"
        },

        {
            id: 3,
            category: "Game Development",
            title: "Neon Runner",
            description:
                "A cyberpunk endless runner built in Unity featuring obstacles and power-ups.",
            technologies: ["Unity", "C#", "Photoshop"],
            link: "/"
        },

        {
            id: 4,
            category: "Web App",
            title: "Portfolio V2",
            description:
                "Personal portfolio website with smooth animations and futuristic design.",
            technologies: ["React", "Tailwind", "Framer Motion"],
            link: "/"
        },

        {
            id: 5,
            category: "Experiment",
            title: "AI Chat Interface",
            description:
                "A modern chat interface concept focused on usability and clean interactions.",
            technologies: ["React", "OpenAI", "Tailwind"],
            link: "/"
        },

        {
            id: 6,
            category: "Tool",
            title: "Password Generator",
            description:
                "Generate secure passwords with customizable rules and strength indicators.",
            technologies: ["JavaScript", "CSS", "HTML"],
            link: "/"
        }
    ]


    return (
        <div id="card" className="flex gap-6 overflow-x-auto pb-4">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    )
}

export default Projects
