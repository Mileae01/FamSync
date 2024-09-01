import TodosCmp from "./TodosCmp.jsx";
import EditTodoCmp from "./EditTodoCmp.jsx";
import ModalCmp from "./ModalCmp.jsx";
export default function MainCmp({selectedProject}){
    return(
        <>
            <ol>
                <li>display by project or time</li>
                <li>check box to complete task</li>
                <li> edit task btn</li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <div>
                <TodosCmp/>
                <EditTodoCmp/>
                {
                    selectedProject?(
                      
                            <h1>{selectedProject.name}</h1>
                           
                    
                            
                    ): <p>Please select a project</p>
                }
            </div>
        </>
    )
}