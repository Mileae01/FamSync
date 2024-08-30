import './App.css'
import SideBarCmp from "./components/SideBarCmp.jsx";
import HeaderCmp from "./components/HeaderCmp.jsx";
import MainCmp from "./components/MainCmp.jsx";
import FooterCmp from "./components/FooterCmp.jsx";
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
