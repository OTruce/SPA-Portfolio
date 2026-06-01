import { useState } from "react";

function ProjectForm({ addProject }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      title,
      description
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>
        Add Project
        </h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
      type="submit">
        Save Project
      </button>

    </form>
  );
}

export default ProjectForm;