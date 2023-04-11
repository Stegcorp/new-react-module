import React from 'react';
import simpsonDB from "../db/SimpsonDB";
import OneSimpson from "./OneSimpson";

const SimpsonFamily = () => {
    return (
        <div>
            {
                simpsonDB.map((value,index) => <OneSimpson item ={value} key={index} />)
            }
        </div>
    );
};

export default SimpsonFamily;
