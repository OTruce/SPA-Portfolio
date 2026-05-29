// ProjectList.jsx
function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

