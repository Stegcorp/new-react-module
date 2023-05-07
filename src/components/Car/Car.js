
import React from 'react';
import {useDispatch} from "react-redux";
import {carsService} from "../../services";
import {cardActions} from "../../redux";

const Car = ({car}) => {
    const {id,brand,price,year} = car;

    const dispatch = useDispatch();

const deleteCar = async ()=>{
    await carsService.deleteCar(id)
    dispatch(cardActions.changeTrigger())
}
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>dispatch(cardActions.setCarUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {
    Car
};
