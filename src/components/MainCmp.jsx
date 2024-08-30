import TodosCmp from "./TodosCmp.jsx";
import EditTodoCmp from "./EditTodoCmp.jsx";
export default function MainCmp(){
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
            </div>
        </>
    )
}