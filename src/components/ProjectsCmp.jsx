import ProjectCmp from "./ProjectCmp.jsx";
import AddNewProjectCmp from "./AddNewProjectCmp.jsx";
export default function ProjectsCmp({children}){
    return(
        <div className="ProjectsCmp">
            <AddNewProjectCmp />
            <ProjectCmp />
        </div>
    )
}