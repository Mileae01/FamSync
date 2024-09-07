import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
import '../App.css'
import {useState} from "react";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";

export default function ProjectsCmp() {
    const {selectedProject} = useContext(TodoContext);
    const {addProject} = useContext(TodoContext);
    const {removeProject} = useContext(TodoContext);
    const {projects} = useContext(TodoContext);
    // const [projects, setProjects] = useState([]);
    const [counter, setCounter] = useState(0);

    // const [showProjects,setShowProjects] = useState(false);


    function handleDeleteProject(project_) {
        if (project_) {
            removeProject(project_);
        }
    }

    function handleIsSelected(projectID) {
        if (selectedProject) {
            return selectedProject.id === projectID;
        }
        return false;
    }
    function handleAddNewProject(name) {
        if (!name) {
            return;
        }
        const newProject = {
            id: counter,
            name: name,
            todos: [
                {
                    id: 'personalid',
                    text: 'personaltask',
                    time: "10:00 AM",
                    date: '2021-09-06',
                    day: "5",
                    checked: false,
                    color: '#00ff00',
                    project: 'personal'
                },
                {
                    id: 'workid',
                    text: 'worktask',
                    time: "10:00 AM",
                    date: '2024-09-05',
                    day: "4",
                    checked: false,
                    color: '#00ff00',
                    project: 'work'
                },
                {
                    id: 'otherid',
                    text: 'othertask',
                    time: "10:00 AM",
                    date: '2024-09-06',
                    day: "3",
                    checked: true,
                    color: '#00ff00',
                    project: 'other'
                }
                ],

        };
        setCounter(counter + 1);
        addProject(newProject);
    }


    return (
        <div className="ProjectsCmp">
            <div className="ProjectsCmpHeader">
                <label>Projects</label>
                <AddNewProjectCmp addProjects_PFn={handleAddNewProject}/>
            </div>
            <div className="ProjectsCmpList">
                {projects.map((project) => (
                    <ProjectCmp
                        key={project.id}
                        project={project}
                        isSelected={handleIsSelected(project.id)}
                    />
                ))}
            </div>
        </div>
    );
}
