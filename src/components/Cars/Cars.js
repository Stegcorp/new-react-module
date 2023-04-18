import React, {useEffect, useState} from 'react';
import {carService} from "../../services/cars.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCar, setAllCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [allCar])


    return (

        <div>
            <CarForm setAllCar={setAllCar} carForUpdate={carForUpdate}/>
            <hr/>
            {
                cars.map(value => <Car key={value.id} setAllCar={setAllCar} car={value}
                                       setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
}

export default Cars;
