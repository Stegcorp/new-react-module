import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/cars.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCar, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
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
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default CarForm;
