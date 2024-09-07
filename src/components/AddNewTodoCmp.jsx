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
    const {selectedProject} = useContext(TodoContext);
    const {setSelectedProject} = useContext(TodoContext);
    const {addTodoToProject} = useContext(TodoContext);
    const [counter, setCounter] = useState(0);
    const addtodo = () => {
        console.log("btn for adding new todo checking available projects")
        if (projects.length == 0) {
            console.log("No available projects")
            return;
        }
        setShowModal(true);
    }

    function handleAddTodo() {
        console.log("adding new todo call the correct handler");
        if (!text) return;  // Prevent adding an empty todo

        const newTodo = {
            id: `todo-${counter}`,  // Create a unique id for the todo
            text: text,
            time: time.toLocaleTimeString(),
            date: day.toLocaleDateString(),
            checked: false,
            color: '#00ff00',
            project: selectedProject.id
        };

        // Add the new todo to the selected project
        addTodoToProject(newTodo, selectedProject);

        // Reset the modal form
        setCounter(counter + 1);
        setText('');
        setDay(new Date());
        setTime(new Date());

    }

    return (
        <div className="addNewTodoCmp">
            <div className="btn">
                <button className="addNewTodoCmp_btn" type="button" onClick={() => addtodo()}>Add Todo</button>
            </div>
            <ModalCmp showModal_PFn={showModal} setShowModal_PFn={setShowModal}>
                <TodoForm
                    handleSubmit={handleAddTodo}
                    heading={"add a new todo"}
                    showProjectName={true}
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />
            </ModalCmp>
        </div>
    )
}