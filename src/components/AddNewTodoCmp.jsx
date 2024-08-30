import '../App.css'
export default function AddNewTodoCmp(){
    const addtodo = ()=>{
        console.log("adding new todo")
    }
    return(
        <div className="addNewTodoCmp">
            <button className="addNewTodoCmp__btn" type="button" onClick={()=>addtodo()}>Add Todo</button>
        </div>
    )
}