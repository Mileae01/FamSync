import '../App.css'
import edit from '../assets/Edit.png'
import {useState} from "react";
import ModalCmp from "./ModalCmp.jsx";
export default function RenameProjectCmp({renameProject_PFn}) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const editProject = () => {
        setShowModal(true);
        //addProjects_PFn();
    }
    const cancel=()=>{
        setText("");
        setShowModal(false);
    }
    function handleSave(){
        console.log("rename from modal")
        renameProject_PFn(text);
        setText("");
        setShowModal(false);
    }
    
    return(
        <div className="RenameProject">
            <img className="RenameProjectCmp" src={edit} onClick={()=>editProject()} />
            <ModalCmp setShowModal_PFn={setShowModal} showModal_PFn={showModal}>
                <form onSubmit={handleSave}>
                    <div className={"title"}>
                        <h3>Rename Project</h3>
                    </div>
                    <div className="text">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div className="btns">
                        <button className="cancel" type={"button"} onClick={cancel} >cancel</button>
                        <button className="addProject" type="button" onClick={handleSave}>Rename Project</button>
                    </div>
                </form>
            </ModalCmp>            
        </div>
    )
}