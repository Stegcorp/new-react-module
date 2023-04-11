import React from 'react';

const rickMorty = ({item}) => {
    return (
        <div>
            <div><b>id: </b>{item.id}</div>
            <div><b>name: </b>{item.name}</div>
            <div><b>status: </b>{item.status}</div>
            <div><b>species: </b>{item.species}</div>
            <div><b>gender: </b>{item.gender}</div>
            <img src={item.image}/>
        <hr/>
        </div>
    );
};

export default rickMorty;
