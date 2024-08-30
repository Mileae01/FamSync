import '../App.css'
import drawing from '../assets/drawing.png'
export default function UserCmp(){
    function getUserName(){
        return "Anderson"
    }
    const userName = () =>{
        return getUserName();
    }
    const logout = () =>{
        console.log("logout");
    }
    return(
        <div className="userCmp">
            <img src = {drawing}/>
            <span><p>{userName()}</p></span>
            <button onClick={()=>logout()}>Logout!</button>
        </div>
    )
}