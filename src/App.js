import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Todos from "./components/menuOptions/todos/Todos";
import Albums from "./components/menuOptions/albums/Albums";
import Comments from "./components/menuOptions/comments/Comments";
import Post from "./components/menuOptions/post/post";

function App() {
    return (
        <div className="App">
            <div>
                <div className="menu">
                    <div><Link to={'/'}><b>HOME</b></Link></div>
                    <div><Link to={'menu'}><b>MENU</b></Link></div>
                </div>
            </div>
            <div className="Route">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'menu'} element={<Menu/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':id'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
