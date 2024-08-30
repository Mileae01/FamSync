import '../App.css'
import edit from '../assets/Edit.png'
export default function RenameProjectCmp() {
    const editProject = ()=>{
        console.log("Edit project")
    }
    
    return(
        <img className="RenameProjectCmp" src={edit} onClick={()=>editProject()} />
    )
}