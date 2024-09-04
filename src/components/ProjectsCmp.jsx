import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
import '../App.css'
import {useState} from "react";
import ProjectDropDownCmp from "./ProjectDropDownCmp.jsx";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";
export default function ProjectsCmp() {
    const {selectedProject} = useContext(TodoContext);
    const [projects, setProjects] = useState([]);
    const [counter, setCounter] = useState(0);
    const [showProjects,setShowProjects] = useState(false);
    
    function toggleShowProjects(){
        console.log("toggleShowProjects");
        setShowProjects(!showProjects);
    }
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

    function handleAddNewProject(name) {
        if(!name){
            return;
        }
        const newProject = {
            id: counter,
            name: name,
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
                        isSelected={handleIsSelected(project.id)}
                    />
                ))}
            </div>
        </div>
    );
}
