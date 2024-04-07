import Jsx,{Greet} from "./containers/Jsx";
import Databinding from "./containers/databinding";
import Users from "./containers/Users";
import { Routes,NavLink,Route } from "react-router-dom"; 

function App(){
  return(
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul classname ="nav navbar-nav">
          <li classname="nav-item">
            <NavLink className="nav-link"to="/">Jsx</NavLink>
          </li>
          <li classname="nav-item">
            <NavLink className="nav-link"to="/binding">Databinding</NavLink>
          </li>
          <li classname="nav-item">
            <NavLink className="nav-link"to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
      {/*<Jsx/>
      {
        Greet()
      }
    
    <Databinding/>
    <Users/> 
    */}
    <Routes>
      <Route path ="/" element={<Jsx/>}></Route>
      <Route path ="/binding" element={<Databinding/>}></Route>
      <Route path ="/users" element={<Users/>}></Route>
    </Routes>
    </div>
    </div>
  )
}

export default App;
