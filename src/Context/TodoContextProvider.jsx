import {useState, createContext} from "react";

const TodoContext = createContext()

function TodoContextProvider({children}) {
    const defaultProject = "today";
    const [selectedProject, setSelectedProject] = useState(defaultProject);
    const [projects, setProjects] = useState([]);
    function renameProject(updatedProject)
    {
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === updatedProject.id
                    ? { ...project, name: updatedProject.name } // Create a new project object with updated name to rerender the list with the updated name
                    : project
            )
        );
    }
    function addProject(project){
        setProjects([...projects,project]);
        setSelectedProject(project);
    }
    function deleteProject(project_){
        setProjects(projects.filter(project => project.id !== project_.id));
    }
    return (
        <TodoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    projects,
                    renameProject,
                    addProject,
                    deleteProject
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContextProvider,TodoContext};