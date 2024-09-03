import '../App.css'
import {useRef} from "react";
export default function ModalCmp({children,showModal_PFn,setShowModal_PFn,savebtn}) {
    const modalRef = useRef();
    
    function closeModal(e) {
        if (e.target === modalRef.current) {
            setShowModal_PFn(false);
        }
    }

    return(showModal_PFn &&
        <div className = "Modal" ref={modalRef} onClick={closeModal}>
            <div className = "ModalContent">
                {children}
            </div>
        </div>
    )
}