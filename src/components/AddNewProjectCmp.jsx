import add from '../assets/add.png'
import '../App.css'
export default function AddNewProjectCmp({addProjects_PFn}){
    const addNewProject = () => {
        addProjects_PFn()
    }
    
    return(
            <img className="addNewProjectCmp" src= {add} onClick={()=>addNewProject()} />
    )
}