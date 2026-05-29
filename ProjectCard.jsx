// ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image || "https://via.placeholder.com/150"} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}