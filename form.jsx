import {useState} from 'react';
function ProjectCard({ onAddproject }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    functionhandleSubmit(e) {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert('Please fill in both title and description.');
            return;
        }
const newProject = {
    id: Date.now(),
    title; title.trim(),
    description: description.trim(),
};
        onAddproject({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <section className="project-card">
        <h2>Add a New Project</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>

<div className="form-group">
    <label htmlFor="description">Description:</label>

    <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter project description"
        rows="4"
        />
</div>

<button type="submit" className='add-button'
>Add Project</button>
</form>
</section>
);
}
export default addProjectForm;
