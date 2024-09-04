import UserCmp from "./UserCmp.jsx";
import CalenderCmp from "./CalenderCmp.jsx";
import AddNewTodoCmp from "./AddNewTodoCmp.jsx";
import ProjectsCmp from "./ProjectsCmp.jsx";
export default function SideBarCmp() {
    return (
        <div className="SideBarCmp">
            <UserCmp />
            <AddNewTodoCmp  />
            <CalenderCmp />
            <ProjectsCmp/>
        </div>
    );
}
