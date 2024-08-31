export default function ModalCmp({children,closeModal_PFn,openModal_PFn,saveModal_PFn}) {
    if(!openModal_PFn){
        return null;
    }
    return(
        <div className = "ModalBackDrop">
            <div className = "ModalHeader">
                <button className = "ModalCloseButton" onClick={closeModal_PFn}>Close</button>
                <button className = "ModalSaveButton" onClick={saveModal_PFn}>Close</button>
            </div>
            <div className = "ModalContent">
                {children}
            </div>
        </div>
    )
}