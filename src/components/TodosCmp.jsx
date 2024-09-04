import TodoCmp from "./TodoCmp.jsx";
import Next7DayCmp from "./Next7DayCmp.jsx";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";

export default function TodosCmp() {
    const selectedProject = "today"
    const todos = [
        {
            id: 'personalid',
            text: 'personaltask',
            time: "10:00 AM",
            date: '2021-09-06',
            day: "5",
            checked: false,
            color: '#00ff00',
            project: 'personal'
        },
        {
            id: 'workid',
            text: 'worktask',
            time: "10:00 AM",
            date: '2024-09-05',
            day: "4",
            checked: false,
            color: '#00ff00',
            project: 'work'
        },
        {
            id: 'otherid',
            text: 'othertask',
            time: "10:00 AM",
            date: '2024-09-06',
            day: "3",
            checked: true,
            color: '#00ff00',
            project: 'other'
        }
    ]

    return (
        <div className="TodosCmp">
            <div className="selectedProject">
                {selectedProject}
            </div>
            <div className="Todos">
                {
                    selectedProject === "next 7 days"?
                        <Next7DayCmp todo={todos}/>:
                        todos.map((todo) => (
                            <TodoCmp todo={todo} key={todo.id}/>
                        ))
                }
            </div>
        </div>
    )
}