import UserCmp from "./UserCmp.jsx";
import CalenderCmp from "./CalenderCmp.jsx";
import AddNewTodoCmp from "./AddNewTodoCmp.jsx";
import ProjectsCmp from "./ProjectsCmp.jsx";
export default function SideBarCmp(){
    return(
        <>
            <ol>
                <li>Eact category is collapsable</li>
                <li>userCmp
                <ol>
                    <li>add user name display</li>
                    <li> logout button or link</li>    
                </ol>
                </li>
                <li>add Todo BTN</li>
                <li>CalenderCmp
                <ol>
                    <li>display today</li>
                    <li> show next seven days</li>
                    <li> show all </li>
                </ol>
                </li>
                <li>ProjectCmp</li>
                <ol>
                    <li>add project btn</li>
                    <li>way to check if name exist already</li>
                    <li>delete project</li>
                    <li>edit project</li>
                </ol>
            </ol>
            <UserCmp/>
            <AddNewTodoCmp/>
            <CalenderCmp/>
            <ProjectsCmp/>
        </>
    )
}