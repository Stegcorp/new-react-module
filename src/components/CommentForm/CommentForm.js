import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentAction} from "../../redux";

const CommentForm = () => {
    const dispatch = useDispatch();
    const {reset, handleSubmit, register} = useForm();

    const newComment = (comment) => {
        comment.id = new Date().getMilliseconds()
        dispatch(commentAction.create(comment))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(newComment)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            <button>new Comments</button>
        </form>
    );
};

export {
    CommentForm
};
