import React from "react";

const myProjects = [
  {
    id: 1,
    title: "PublicEye",
    shortTitle: "Civic issue tracker",
    description: "A civic-tech platform that helps citizens report local issues and gives departments a transparent way to resolve them.",
    technologies: ["React", "Node.js", "MongoDB", "Leaflet"],
    github: "https://github.com/Omkar-b07/PublicEye--Public-Grievance-Civic-Issue-Tracker-System",
    live: "https://public-eye-public-grievance-civic-i-ten.vercel.app/login",
    type: "civic",
    accent: "lime"
  },
  {
    id: 2,
    title: "ContextIQ",
    shortTitle: "AI document intelligence",
    description: "An AI-powered workspace for turning dense documents into searchable context, useful answers, and faster decisions.",
    technologies: ["React", "Node.js", "AI", "Document search"],
    github: "https://github.com/Omkar-b07/ContextIQ---AI-Document-Intelligence-Platform",
    type: "context",
    accent: "blue"
  },
  {
    id: 3,
    title: "WellBot - Global Multilingual Wellness Assistant Chatbot",
    description: "An AI-powered conversational assistant delivering accessible health information worldwide.",
    technologies: ["Python", "Rasa", "SQLite", "Flask"],
    github: "https://github.com/Omkar-b07/TeamA_WellBot",
    image: "/images/chatbot.jpg",
    type: "wellbot",
    accent: "orange"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section content-section">
      <div className="section-heading"><span className="section-label">02</span><h2>Selected work</h2><span className="heading-note">Real products, real problems</span></div>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <article key={project.id} className="project-card">
            {project.image ? <img src={project.image} alt={project.title} className="project-image" /> : <div className={`project-visual ${project.type}`} aria-hidden="true">
              {project.type === "civic" ? <><div className="visual-map"><span className="map-route" /><b className="map-pin pin-a" /><b className="map-pin pin-b" /><b className="map-pin pin-c" /></div><div className="visual-panel"><span>PUBLIC EYE</span><strong>12 active issues</strong><small>Roads &amp; infrastructure</small></div></> : <><div className="doc-lines"><span /><span /><span /><span /></div><div className="ai-window"><b>ContextIQ</b><span>Ask anything about your files</span><i>⌕</i></div><div className="ai-chip">AI / READY</div></>}
            </div>}
            <div className="project-info">
              <div className="project-meta"><span>0{project.id} / Featured</span><span className={`accent-${project.accent}`}>{project.shortTitle || "AI wellness assistant"}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>#{technology}</span>)}</div>
              <div className="project-actions">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-live">Live demo <span>↗</span></a>}
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub <span>↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
