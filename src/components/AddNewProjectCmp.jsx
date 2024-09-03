import add from '../assets/add.png'
import ModalCmp from "./ModalCmp.jsx";
import '../App.css'
import {useState} from "react";
export default function AddNewProjectCmp({addProjects_PFn}){
    const [showModal, setShowModal] = useState(false);
    const addNewProject = () => {
        setShowModal(true);
        addProjects_PFn();
    }
    // function handleSave(){
    //     console.log("adding new project from modal")
    //     addProjects_PFn();
    //     setShowModal(false);
    // }
    
    return(
        <div className="addNewProjectCmp">
            <img className="addNewProject_btn" src= {add} onClick={()=>addNewProject()} />
            <ModalCmp setShowModal_PFn={setShowModal} showModal_PFn={showModal} >
                <div>
                    Hello modal from adding new project!
                </div>
            </ModalCmp>
                
        </div>
    )
}