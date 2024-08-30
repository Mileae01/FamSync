import './App.css'
import SideBarCmp from "./SideBarCmp.jsx";
import HeaderCmp from "./HeaderCmp.jsx";
import MainCmp from "./MainCmp.jsx";
import FooterCmp from "./FooterCmp.jsx";
function App() {

  return (
   <div className="App">
     <header className="App-header"><HeaderCmp/></header>
     <div className="App-mainContainer">
       <aside className="App-sidebar"> <SideBarCmp/></aside>
       <main className="App-main"> <MainCmp/></main>
     </div>
     <footer className="App-footer"><FooterCmp/></footer>
   </div>
  )
}

export default App
