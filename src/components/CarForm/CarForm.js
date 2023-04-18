import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/cars.service";

const CarForm = ({setAllCar, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm();
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const onSubmit = async (car) => {
        if (carForUpdate) {
            await carService.updateById(carForUpdate.id, car);
            setAllCar(carForUpdate)
        } else {
          const {data} = await carService.create(car);
            setAllCar(data)
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default CarForm;
