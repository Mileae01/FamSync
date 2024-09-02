import '../App.css'
import {useState} from "react";
import ModalCmp from "./ModalCmp.jsx";
export default function AddNewTodoCmp(project){
    const [showModal,setShowModal] = useState(false);
    const addtodo = ()=>{
        console.log("adding new todo")
        setShowModal(true);
    }
    return(
        <div className="addNewTodoCmp">
            <button className="addNewTodoCmp_btn" type="button" onClick={()=>addtodo()}>Add Todo</button>
            <ModalCmp showModal_PFn={showModal} setShowModal_PFn={setShowModal}>
                <div>
                    helloworld
                </div>
                
            </ModalCmp>
        </div>
    )
}