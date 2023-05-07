import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../../services";
import {cardActions} from "../../redux";

const CarForm = () => {
    const dispatch = useDispatch();
    const {setCarForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue} = useForm();

    const save = async (car) => {
        await carsService.create(car)
        dispatch(cardActions.changeTrigger())
        reset()
    }
    const update = async (car) => {
        await carsService.updateCar(setCarForUpdate.id, car)
        dispatch(cardActions.changeTrigger())
        reset()
    }

    useEffect(() => {
        if (setCarForUpdate) {
            setValue('brand', setCarForUpdate.brand)
            setValue('price', setCarForUpdate.price)
            setValue('year', setCarForUpdate.year)
        }
    }, [setValue, setCarForUpdate])

    return (
        <form onSubmit={handleSubmit(setCarForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{setCarForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {
    CarForm
};
