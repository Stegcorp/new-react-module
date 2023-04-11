import React from 'react';

const OneSimpson = ({item}) => {

    return (
        <div>
            <div><b>name: </b> {item.name}  </div>
            <div> <b>surname:</b> {item.surname}</div>
            <div>  <b>age:</b>{item.age}</div>
            <div> <b>info:</b>{item.info}</div>
            <img src={item.photo}/>
            <hr/>
        </div>
    );
};

export default OneSimpson;
