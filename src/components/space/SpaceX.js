import React, {useEffect, useState} from 'react';
import {spaceService} from "../../services/space.service";
import SpaceXX from "./SpaceXX";

const SpaceX = () => {
const [space,setSpase] = useState([]);
    useEffect(()=>{
        spaceService.then(({data}) => setSpase(data))
    },[])
    return (
        <div>
            {space.map(value =>  < SpaceXX item={value} key={value.flight_number}/>)}
        </div>
    );
};

export default SpaceX;
