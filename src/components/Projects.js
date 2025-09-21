import React from "react";

const myProjects = [
    {
    id: 1,
    title: "Wonderlust",
    description: "A travel booking web app with advanced search and authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/Omkar-b07/Wonderlust",
    image: "/images/Wonderlust.jpg"

  },
  
  {
    id: 2,
    title: "College Chatbot",
    description: "A Python-based chatbot built with Flask and a rule-based system.",
    technologies: ["Python", "Flask", "JavaScript"],
    github: "https://github.com/Omkar-b07/College_chatbot",
    image: "/images/chatbot.jpg"
  },
  {
    id: 3,
    title: "To-Do List App",
    description: "A full-stack MERN application for managing daily tasks.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Omkar-b07/mern-todo-app",
    image:"/images/ToDoList.jpg"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.technologies.join(', ')}</p>
              <div className="flex gap-4">
                <a href={project.github} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700">GitHub</a>
                {project.live && (
                  <a href={project.live} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
