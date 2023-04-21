import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Todos from "./components/menuOptions/todos/Todos";
import Albams from "./components/menuOptions/albams/Albams";
import Comments from "./components/menuOptions/comments/Comments";

function App() {
    return (
        <div className="App">
            <div>
                <div className="menu">
                    <div><Link to={'/'}><b>HOME</b></Link></div>
                    <div><Link to={'menu'}><b>MENU</b></Link></div>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'menu'} element={<Menu/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albams/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
