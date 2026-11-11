import ProjectCard from "./ProjectCard";
function ProjectList({projects}) {
    return (
        <section className="project-list">
            <h2>My Projects</h2>
            {projects.length === 0 ? (
                <p>No projects to display.</p>
            ) : (
                projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            )}
        </section>
    );
}
export default ProjectList;