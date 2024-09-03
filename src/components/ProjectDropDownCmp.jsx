import {CaretUp} from "react-bootstrap-icons";
import {CaretDown} from "react-bootstrap-icons";
export default function ProjectDropDownCmp({showProjects, toggleShowProjects_PFn}) {
    
    return(
        <>
            {showProjects? 
                (<CaretDown onClick={toggleShowProjects_PFn}/>) : 
                <CaretUp onClick={toggleShowProjects_PFn}/>}
        </>
    )
}