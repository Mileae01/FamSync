import RenameProjectCmp from "./RenameProjectCmp.jsx";
import DeleteProjectCmp from "./DeleteProjectCmp.jsx";
import '../App.css'
import {useContext, useState} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";

export default function ProjectCmp({project,removeProjects_PFn,isSelected,task}){
    const id = project.id;
    const {setSelectedProject}= useContext(TodoContext);
    const {renameProject}= useContext(TodoContext);
    //state for modals
    const [tasks,setTasks]=useState(task);
    function renameProject_(project){
        renameProject(project);
    }

    function handleOnClickEvent(){
        console.log(`Project ${project.id} isSelected:`, isSelected);
        setSelectedProject(project);
    }
    return(
        <div className={`ProjectCmp ${isSelected ? 'selected' : ''}`}
             onClick={handleOnClickEvent}>
            <label>{project.name}:</label>
            {isSelected && (
                <>
                    <RenameProjectCmp renameProject_PFn={renameProject_} project={project} />
                    <DeleteProjectCmp removeProjects_PFn={removeProjects_PFn}/>
                    
                </>
            )}
            
        </div>
    )
}