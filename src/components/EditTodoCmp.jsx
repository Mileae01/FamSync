import {useContext, useState} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx"; 
import TodoForm from "./TodoForm.jsx";
export default function EditTodoCmp(){
    function handleSubmit(){
        console.log("Edit Todo Cmp");
    }
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const {projects} = useContext(TodoContext);
    return(
        <div className="editTodoCmp">
            <div className={"title"}>
                Edit Todo
            </div>
            <div className="FormContainer">
                <TodoForm
                    handleSubmit={handleSubmit}
                    heading={"Edit new todo"}
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    projects={projects}
                />
            </div>
        </div>
    )
}