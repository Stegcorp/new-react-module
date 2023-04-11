import './App.css';

import RickMorty from "./components/rickAndMorty/RickMorty";
import SimpsonFamily from "./components/simpsons/SimpsonFamily";




function App() {

    return (
        <div className="App">
           <div className='flex'>
             <div className='sim'> <SimpsonFamily/></div>
            <div className='rick'>   <RickMorty/> </div>
           </div>
        </div>
    );
}

export default App;
