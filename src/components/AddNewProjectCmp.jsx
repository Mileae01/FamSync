import add from '../assets/add.png'
import '../App.css'
export default function AddNewProjectCmp(){
    const addNewProject = () => {
        console.log('addNewProject')
    }
    
    return(
            <img className="addNewProjectCmp" src= {add} onClick={()=>addNewProject()} />

    )
}