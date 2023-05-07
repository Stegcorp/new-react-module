import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../../services";
import {cardActions} from "../../redux";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars,trigger} = useSelector(state => state.cars);
    useEffect(() => {
        carsService.allCar().then(({data}) => dispatch(cardActions.getAllCars(data)))
    }, [dispatch,trigger])

    return (
        <div>
            <CarForm/>
            {
            cars.map(value=><Car key={value.id} car={value}/>)
            }
        </div>
    );
};

export {
    Cars
};
