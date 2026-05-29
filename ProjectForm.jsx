import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    onAddProject(formData);
    setFormData({ title: '', description: '', image: '' }); // Reset form
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input 
        placeholder="Project Title" 
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
      />
      <input 
        placeholder="Description" 
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <input 
        placeholder="Image URL" 
        value={formData.image}
        onChange={(e) => setFormData({...formData, image: e.target.value})}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;