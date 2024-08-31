import "../App.css"
import deleteIcon from '../assets/delete.png'
export default function DeleteProjectCmp({removeProjects_PFn}) {
    const deleteProject = () => {
        console.log("Deleting project");
        removeProjects_PFn();
    }
    return(
        <img className="deleteProjectCmp" src={deleteIcon} onClick={()=>deleteProject()} />
    )
}