function ProjectCard({project}) {
    return (
     <article className="project-icon">
        <div className="project-icon">
            <span>📁</span>
            </div>
            <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
        </article>
    );
}

export default ProjectCard;