import {useState} from 'react';
function AddProjectForm({onAddProject}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
        };

        if (!newProject.title || !newProject.description) {
            alert('Please fill in both title and description.');
            return;
        }
        onAddProject(newProject);
        setTitle('');
        setDescription('');
    }

    return (
        <section>
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Project</button>
            </form>
        </section>
        );
    }
    export default AddProjectForm;