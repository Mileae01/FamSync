import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
import '../App.css'
export default function ProjectsCmp({children}){
    return(
        <div className="ProjectsCmp">
            <label>Projects</label>
            <AddNewProjectCmp />
            <ProjectCmp />
        </div>
    )
}