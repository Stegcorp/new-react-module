import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../services/comments.service";

const CommentForm = ({setComment}) => {

    const {register,handleSubmit,reset} = useForm();

     const save = async (comment) => {
         console.log(comment);
       const {data} = await commentsService.create(comment);
       setComment(prev=>[...prev,data])
         reset()
     }
    return (

        <form onSubmit={handleSubmit(save)}>
            <input form='text' placeholder={'name'} {...register('name')}/>
            <input form='text' placeholder={'email'} {...register('email')}/>
            <input form='text' placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;
