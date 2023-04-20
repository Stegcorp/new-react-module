import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/users.service";


const UserForm = ({setUser}) => {

    const {register,handleSubmit,reset} = useForm();

    const save = async (user)=> {
         const {data} = await usersService.create(user);
        setUser(prev => [...prev,data])
        reset()
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}></input>
            <input type='text' placeholder={'username'} {...register('username')}></input>
            <button>Save</button>
        </form>
    );
};

export default UserForm;
