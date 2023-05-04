import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const UserForm = () => {
    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();
    const user = (user) => {
        user.id = new Date().getMilliseconds()
        dispatch(userActions.create(user))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(user)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <button>new User</button>
        </form>

    );
};

export {
    UserForm
};
