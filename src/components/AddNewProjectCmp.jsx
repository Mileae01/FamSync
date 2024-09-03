import add from '../assets/add.png'
import ModalCmp from "./ModalCmp.jsx";
import '../App.css'
import {useState} from "react";

export default function AddNewProjectCmp({addProjects_PFn}) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const addNewProject = () => {
        setShowModal(true);
        //addProjects_PFn();
    }
    const cancel=()=>{
        setText("");
        setShowModal(false);
    }
    function handleSave(){
         console.log("adding new project from modal")
        setText("")
         addProjects_PFn(text);
         setShowModal(false);
     }

    return (
        <div className="addNewProjectCmp">
            <img className="addNewProject_btn" src={add} onClick={() => addNewProject()}/>
            <ModalCmp setShowModal_PFn={setShowModal} showModal_PFn={showModal}>
                <form onSubmit={handleSave}>
                    <div className={"title"}>
                        <h3>Add new Project</h3>
                    </div>
                    <div className="text">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div className="btns">
                        <button className="cancel" type={"button"} onClick={cancel} >cancel</button>
                        <button className="addProject" type="button" onClick={handleSave}>Add New Project</button>
                    </div>
                </form>
            </ModalCmp>

        </div>
    )
}