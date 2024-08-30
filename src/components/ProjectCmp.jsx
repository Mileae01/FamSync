import RenameProjectCmp from "./RenameProjectCmp.jsx";
import DeleteProjectCmp from "./DeleteProjectCmp.jsx";
import '../App.css'
export default function ProjectCmp(){
    return(
        <div className="ProjectCmp">
            <label>ProjectName:</label>
            <RenameProjectCmp />
            <DeleteProjectCmp/>
        </div>
    )
}