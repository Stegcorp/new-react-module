import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

const SaveFormDog = () => {
    const dogs = useSelector(state => {

        return state.dogReducer

    });
    const dispatch = useDispatch();


    const {register, handleSubmit, reset} = useForm();
    const dogForm = (dog) => {
        const dogId = new Date().getMilliseconds();
        dog.id = dogId;
        dispatch({type: 'ADD_DOG', payload: dog})
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(dogForm)}>
                <input type={'text'} placeholder={'dog'} {...register('dog')} />
                <button>Save</button>
            </form>
          <div>
              {
                  dogs.map(value => <div key={value.id}>{value.dog}<button onClick={()=>{
                      dispatch({type:'DEL_DOG',payload:value.id})
                  }}>delete</button></div>)
              }
          </div>
        </div>
    );
};

export default SaveFormDog;
