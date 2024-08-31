import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
import DeleteProjectCmp from "./DeleteProjectCmp.jsx";
import '../App.css'
import {useState} from "react";

export default function ProjectsCmp() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [counter, setCounter] = useState(0);

    function handleDeleteProject(project_) {
        if (project_) {
            setProjects(projects.filter(project => project.id !== project_.id));
        }
    }

    function handleSelectProject(project) {
        console.log(project.id);
        setSelectedProject(project);
    }
    function handleIsSelected(projectID){
        if (selectedProject){
            return selectedProject.id === projectID;
        }
        return false;
    }
    function handleAddNewProject() {
        const newProject = {
            id: counter,
            name: `asdfa ${counter}`,
        }
        // const newProject = <ProjectCmp nameProp={`Project ${projects.length+1}`} idProp={`${projects.length+1}`} />;
        setCounter(counter + 1)
        const newProjects = [...projects, newProject];
        setProjects(newProjects);
    }

    return (
        <div className="ProjectsCmp">
            <label>Projects</label>
            <AddNewProjectCmp addProjects_PFn={handleAddNewProject}/>
            <div className="ProjectCmpList">
                {projects.map((project) => (
                    <ProjectCmp
                        key={project.id}
                        project={project}
                        removeProjects_PFn={() => handleDeleteProject(project)}
                        select_PFn={() => handleSelectProject(project)}
                        isSelected={handleIsSelected(project.id)}
                    />
                ))}
            </div>
        </div>
    )
}