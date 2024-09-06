import "../App.css"
import deleteIcon from '../assets/delete.png'
export default function DeleteProjectCmp({removeProjects_PFn, project}) {
    const deleteProject = () => {
        console.log("Deleting project");
        removeProjects_PFn(project);
    }
    return(
        <img className="deleteProjectCmp" src={deleteIcon} onClick={()=>deleteProject()} />
    )
}