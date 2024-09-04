import './App.css'
import SideBarCmp from "./components/SideBarCmp.jsx";
import HeaderCmp from "./components/HeaderCmp.jsx";
import MainCmp from "./components/MainCmp.jsx";
import FooterCmp from "./components/FooterCmp.jsx";
import {useState} from "react";
import {TodoContextProvider} from "./Context/TodoContextProvider.jsx";
function App() {
    // const [selectedProject, setSelectedProject] = useState(null);
    //
    // function handleSetSelectedProject(project) {
    //     console.log(project.id);
    //     setSelectedProject(project);
    // }

    return (
        <TodoContextProvider>
        <div className="App">
            <header className="App-header"><HeaderCmp /></header>
            <div className="App-mainContainer">
                <aside className="App-sidebar">
                    <SideBarCmp
                        // selectedProject={selectedProject}
                        // setSelectedProject_Pfn={handleSetSelectedProject}  // <-- Consistent name
                    />
                </aside>
                {/*<main className="App-main"><MainCmp selectedProject={selectedProject} /></main>*/}
                <main className="App-main"><MainCmp/></main>
            </div>
            <footer className="App-footer"><FooterCmp /></footer>
        </div>
        </TodoContextProvider>
    );
}

export default App;

