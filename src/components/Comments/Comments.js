import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../../services";
import {commentAction} from "../../redux";
import {Comment} from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch(commentAction.setComments(data)))
    }, [dispatch])


    return (
        <div>
            <CommentForm/>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {
    Comments
};
