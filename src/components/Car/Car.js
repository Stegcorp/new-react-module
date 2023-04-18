import React from 'react';
import {carService} from "../../services/cars.service";

const Car = ({car,setCarForUpdate,setAllCar}) => {

    const deleteCars = async (id) => {
      await carService.deleteCar(id);
      setAllCar(car)
    }

    return (
        <div>
            <div><b>id:</b>{car.id}</div>
            <div><b>brand:</b>{car.brand}</div>
            <div><b>price:</b>{car.price}</div>
            <div><b>year:</b>{car.year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=> {
                deleteCars(car.id)
            }}>delete</button>
            _____________________________
        </div>
    );
};

export default Car;
