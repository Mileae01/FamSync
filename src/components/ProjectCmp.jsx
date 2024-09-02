import RenameProjectCmp from "./RenameProjectCmp.jsx";
import DeleteProjectCmp from "./DeleteProjectCmp.jsx";
import '../App.css'
import {useState} from "react";
export default function ProjectCmp({project,setSelectedProject_Pfn, removeProjects_PFn,isSelected,task}){
    const [name,setName]=useState(project.name);
    const id = project.id;
    //state for modals
    const [tasks,setTasks]=useState(task);
    function handleOnClickEvent(){
        console.log(`Project ${project.id} isSelected:`, isSelected);
        setSelectedProject_Pfn(); // Call the select function to update the selected project in parent
    }
    return(
        <div className={`ProjectCmp ${isSelected ? 'selected' : ''}`}
             onClick={handleOnClickEvent}>
            <label>{name}:</label>
            {isSelected && (
                <>
                    <RenameProjectCmp />
                    <DeleteProjectCmp removeProjects_PFn={removeProjects_PFn}/>
                    
                </>
            )}
            
        </div>
    )
}