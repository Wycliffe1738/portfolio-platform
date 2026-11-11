import {useState} from 'react';

import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

function App() {
const [projects, setProjects] = useState([
  {
    id: 1,
    title: "personal portfolio website",
    description: "A personal portfolio website to showcase my projects and skills.",
  },
  {
    id: 2,
    title: "task management app",
    description: "A simple task management application to help organize daily activities.",
  },
  {
    id: 3,
    title: "weather forecast app",
    description: "An application that provides weather forecasts based on user location.",
  },
]);
const [searchText, setSearchText] = useState('');
function handleAddProject(newProject) {
  setProjects([...projects, newProject]);
}
      const searchResults = projects.filter((project) =>
        project.title.toLowerCase().includes(searchText.toLowerCase())
      );

      return (
        <div className="App">
          <Header />
          <main className='main-content'>
            <AddProjectForm onAddProject={handleAddProject} />
            <SearchBar searchTerm={searchText} onSearchChange={setSearchText} />
            <ProjectList projects={searchResults} />
          </main>
          <footer className='main-footer'>
            <p> &copy; 2024 Wycliffe. All rights reserved.</p>
          </footer>
        </div>
      );
    }

export default App;