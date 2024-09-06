import '../App.css'
import {useState} from "react";
import ModalCmp from "./ModalCmp.jsx";
import TodoForm from "./TodoForm.jsx";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContextProvider.jsx";
export default function AddNewTodoCmp() {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const {projects} = useContext(TodoContext);
    const addtodo = () => {
        console.log("adding new todo")
        setShowModal(true);
    }
    return (
        <div className="addNewTodoCmp">
            <div className="btn">
                <button className="addNewTodoCmp_btn" type="button" onClick={() => addtodo()}>Add Todo</button>
            </div>
            <ModalCmp showModal_PFn={showModal} setShowModal_PFn={setShowModal}>
                <TodoForm
                handleSave={addtodo}
                heading={"add a new todo"}
                text={text}
                setText={setText}
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                projects={projects}
                showButtons={true}
                setShowModal={setShowModal}
                />
            </ModalCmp>
        </div>
    )
}