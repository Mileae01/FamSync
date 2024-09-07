import {ArrowClockwise, CheckCircleFill, Circle, Trash} from "react-bootstrap-icons";
import {useState} from "react";
export default function TodoCmp({todo}) {
    const [hover, setHover] = useState(false);
    function enter(){
        console.log("entering cmp");
        setHover(true);
    }
    function leave(){
        console.log("leaveing cmp");
        setHover(false);
    }

    return (
        <div className="TodoCmp" 
             onMouseEnter={()=>enter()}
             onMouseLeave={()=>leave()}
        >
            <div className="checkTodo">
                {todo.checked ?
                    <span className="checkIcon"><CheckCircleFill color={'#bebebe'}/></span> :
                    <span className="uncheckIcon"><Circle color={todo.color}/></span>}
            </div>
            <div className="text">
                <p style={{color: todo.checked ? "#bebebe" : "#000"}}>{todo.text}</p>
                <span>{todo.time}-{todo.date}</span>
                <div className={`line ${todo.checked ? "line-through" : ""}`}></div>
            </div>
            <div className="add-to-next-day">
                {todo.checked &&
                    <span>
                        <ArrowClockwise/>
                    </span>}
            </div>
            <div className="delete">
                {
                    (hover || todo.checked) &&
                <span>
                    <Trash/>
                </span>}
            </div>
        </div>
    )
}