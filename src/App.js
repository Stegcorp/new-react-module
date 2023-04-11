import './App.css';
import {useEffect, useState} from "react";
import RickMorty from "./components/rickAndMorty/rickMorty";
import SimpsonFamily from "./components/simpsons/SimpsonFamily";



function App() {
let [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setMovie(value.results);
            });

    }, [])

    return (
        <div className="App">
           <div className='flex'>
             <div className='sim'> <SimpsonFamily/></div>
            <div className='rick'>   {movie.map(value => <RickMorty item={value} key={value.id}/>)}</div>
           </div>
        </div>
    );
}

export default App;
