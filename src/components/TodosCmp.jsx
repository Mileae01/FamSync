import TodoCmp from "./TodoCmp.jsx";
import Next7DayCmp from "./Next7DayCmp.jsx";
import {useContext, useEffect} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";

export default function TodosCmp() {
    const {selectedProject} = useContext(TodoContext);

    return (
        <div className="TodosCmp">
            <div className="selectedProject">
                {selectedProject.name ?? "No Project Selected"}
            </div>
            <div className="Todos">
                {
                    (selectedProject && selectedProject.todos && selectedProject.todos.length > 0) ?
                        selectedProject.todos.map((todo) => (
                            <TodoCmp todo={todo} key={todo.id} />
                        )) :
                        <div>No todos for this project</div>
                    // selectedProject === "next 7 days"?
                    //     <Next7DayCmp todo={todos}/>:
                    //     todos.map((todo) => (
                    //         <TodoCmp todo={todo} key={todo.id}/>
                    //     ))
                }
            </div>
        </div>
    )
}