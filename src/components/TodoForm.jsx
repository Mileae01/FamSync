import {Bell, Palette, X} from "react-bootstrap-icons";
import BasicDatePicker from "./BasicDatePicker.jsx";
import BasicTimePicker from "./BasicTimePicker.jsx";


export default function TodoForm({
                                     handleSubmit,
                                     heading = false,
                                     text,
                                     setText,
                                     day,
                                     setDay,
                                     time,
                                     setTime,
                                     projects,
                                     showButtons = false,
                                     setShowModal = false,
                                     selectedProject,
                                     setSelectedProject,
                                     showProjectName = false
                                 }) {
    function handleSave(){
        handleSubmit();
        setShowModal(false);
    }
    return (
        <form>
            <div className={"title"}>
                {heading && <h3>{heading}</h3>}
                {showButtons &&
                    <X className={"cancel"} size='40' onClick={() => setShowModal(false)}/>}
            </div>

            {showProjectName && <div>{`Current Project: ${selectedProject.name}`}</div> }

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
                    <div className="project" key={project.id} onClick={() => setSelectedProject(project)}>
                        {project.name}
                    </div>)}
            </div>

            <div className="confirm">
                {showButtons &&
                    <button type="button" onClick={handleSave}>Add Todo</button>
                }
            </div>

        </form>


    )
}