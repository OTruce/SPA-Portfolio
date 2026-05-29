import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  // Initial dummy data
  const [projects, setProjects] = useState([
    { id: 1, title: "E-commerce Site", description: "Built with React", image: "https://via.placeholder.com/150" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new project (Event Handling)
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Filter logic
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <ProjectForm onAddProject={addProject} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;