import UserCmp from "./UserCmp.jsx";
import CalenderCmp from "./CalenderCmp.jsx";
import AddNewTodoCmp from "./AddNewTodoCmp.jsx";
import ProjectsCmp from "./ProjectsCmp.jsx";
export default function SideBarCmp({ setSelectedProject_Pfn, selectedProject }) {
    return (
        <>
            <UserCmp />
            <AddNewTodoCmp project={selectedProject} />
            <CalenderCmp />
            <ProjectsCmp
                selectedProject={selectedProject}
                setSelectedProject_Pfn={setSelectedProject_Pfn}  // <-- Consistent name
            />
        </>
    );
}
