import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
import '../App.css'
import {useState} from "react";

export default function ProjectsCmp({ setSelectedProject_Pfn, selectedProject }) {
    const [projects, setProjects] = useState([]);
    const [counter, setCounter] = useState(0);

    function handleDeleteProject(project_) {
        if (project_) {
            setProjects(projects.filter(project => project.id !== project_.id));
        }
    }

    function handleIsSelected(projectID) {
        if (selectedProject) {
            return selectedProject.id === projectID;
        }
        return false;
    }

    function handleAddNewProject() {
        const newProject = {
            id: counter,
            name: `asdfa ${counter}`,
            task:["t"]
        };
        setCounter(counter + 1);
        const newProjects = [...projects, newProject];
        setProjects(newProjects);
    }

    return (
        <div className="ProjectsCmp">
            <div className="ProjectsCmpHeader">
                <label>Projects</label>
                <AddNewProjectCmp addProjects_PFn={handleAddNewProject} />
            </div>
            <div className="ProjectsCmpList">
                {projects.map((project) => (
                    <ProjectCmp
                        key={project.id}
                        project={project}
                        removeProjects_PFn={() => handleDeleteProject(project)}
                        setSelectedProject_Pfn={() => setSelectedProject_Pfn(project)}  // <-- Updated here
                        isSelected={handleIsSelected(project.id)}
                    />
                ))}
            </div>
        </div>
    );
}
