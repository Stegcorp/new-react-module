import './App.css';
import Users from "./components/Users/Users";
import {Comments} from "./components/Comments/Comments";
import SaveFormCat from "./components/SaveFormCat/SaveFormCat";
import SaveFormDog from "./components/SaveFormDog/SaveFormDog";

function App() {
    return (
        <div className="App">
            <div className='form'>
                <SaveFormCat/>
                <SaveFormDog/>
            </div>

            {/*<Users/>*/}
            {/*  <Comments/>*/}
        </div>
    );
}

export default App;
