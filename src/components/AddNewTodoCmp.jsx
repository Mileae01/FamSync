import '../App.css'
import {useState} from "react";
import ModalCmp from "./ModalCmp.jsx";
import {Bell, Palette, X} from "react-bootstrap-icons"
import BasicDatePicker from "./BasicDatePicker.jsx";
import BasicTimePicker from "./BasicTimePicker.jsx";

export default function AddNewTodoCmp(project) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
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
                <form>
                    <div className={"title"}>
                        <h3>Add new Todo</h3>
                        <X className={"cancel"} size='40' onClick={() => setShowModal(false)}/>
                    </div>
                    <div className="text">
                        <input type="text"
                               value={text}
                               onChange={(e) => setText(e.target.value)}
                               placeholder="Add new todo"
                               autoFocus/>

                    </div>

                    <div className="remind">
                        <Bell className="bell-icon"/>
                        <p>remind me</p>
                    </div>
                    <div className="pick-day">
                        <BasicDatePicker value={day} onChange={day => setDay(day)}/>
                    </div>
                    <div className="pick-time">
                        <BasicTimePicker value={time} onChange={time => setTime(time)}/>
                    </div>
                    <div className="pick-project">
                        <Palette/>
                        <p>Choose a Project</p>
                    </div>
                    <div className="projects">
                        <div className="project active"> personal</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                        <div className="project"> work</div>
                    </div>
                    
                    <div className="confirm">
                        <button type="button">Add Todo</button>
                    </div>

                </form>
            </ModalCmp>
        </div>
    )
}