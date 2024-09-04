import TodosCmp from "./TodosCmp.jsx";
import EditTodoCmp from "./EditTodoCmp.jsx";

export default function MainCmp({selectedProject}) {
    return (
        <div>
            <TodosCmp/>
            <EditTodoCmp/>
        </div>
    )
}