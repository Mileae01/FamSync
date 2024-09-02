import TodosCmp from "./TodosCmp.jsx";
import EditTodoCmp from "./EditTodoCmp.jsx";
import ModalCmp from "./ModalCmp.jsx";

export default function MainCmp({selectedProject}) {
    return (
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
                <ModalCmp>
                    {selectedProject ? selectedProject.task.map((task, index) => (<div key={index}>{task}</div>)) :
                        <p>select a project</p>}    
                </ModalCmp>
                
            </div>
        </>
    )
}