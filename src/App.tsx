import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import "./app.css";


function App() {
  return ( 
    <div>
     <Topbar />
     <div className="sidebar__Container" >
       <Sidebar />
       <Home />
       {/* <div className="sidebar__OutherPages">Outras Paginas</div> */}
     </div>
   </div>
  );
}

export default App;
