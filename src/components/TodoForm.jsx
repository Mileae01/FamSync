import {Bell, Palette, X} from "react-bootstrap-icons";
import BasicDatePicker from "./BasicDatePicker.jsx";
import BasicTimePicker from "./BasicTimePicker.jsx";


export default function TodoForm({handleSubmit, heading =false,text,setText,day,setDay,time,setTime,projects,showButtons=false,setShowModal=false}) {
    return(
        <form onSubmit={handleSubmit}>
            <div className={"title"}>
                {heading && <h3>{heading}</h3>}
                {showButtons &&
                    <X className={"cancel"} size='40' onClick={() => setShowModal(false)}/>}
            </div>
            <div className="text">
                <input type="text"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="todo"
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
                {projects.map(project =>
                    <div className="project" key={project.id}>
                        {project.name}
                    </div>)}
            </div>

            <div className="confirm">
                {showButtons &&
                    <button type="button">Add Todo</button>
                }
            </div>

        </form>
            
        
    )
}