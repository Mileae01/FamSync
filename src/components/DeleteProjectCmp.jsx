import "../App.css"
import deleteIcon from '../assets/delete.png'
export default function DeleteProjectCmp() {
    const deleteProject = () => {
        console.log("deleteProject")
    }
    return(
        <img className="deleteProjectCmp" src={deleteIcon} onClick={()=>deleteProject()} />
    )
}