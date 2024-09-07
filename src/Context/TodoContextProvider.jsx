import {useState, createContext} from "react";

const TodoContext = createContext()

function TodoContextProvider({children}) {
    const defaultProject = "Today";
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
        setSelectedProject(defaultProject);
    }
    function addTodoToProject(todo, project_) {
        setProjects(prevProjects => {
            const updatedProjects = prevProjects.map(project =>
                project.id === project_.id
                    ? { ...project, todos: [...project.todos, todo] }
                    : project
            );

            // Find the updated project directly from updatedProjects
            const updatedProject = updatedProjects.find(project => project.id === project_.id);

            // Update the selected project to trigger a re-render
            setSelectedProject(updatedProject);

            return updatedProjects;  // Return updatedProjects to setProjects
        });
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
                    deleteProject,
                    addTodoToProject,
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContextProvider,TodoContext};