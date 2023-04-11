import React from 'react';
import RickMortyOne from "./RickMortyOne";
import {useEffect, useState} from "react";


const rickMorty = () => {

    let [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setMovie(value.results);
            });

    }, [])

    return (
        <div>
            {movie.map(value => <RickMortyOne item={value} key={value.id}/>)}
        </div>
    );
};

export default rickMorty;
