import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {
    const [comment,setComment] = useState([]);
        useEffect(()=>{
            commentsService.allComments().then(({data}) => setComment(data))
        },[])
    return (
        <div>
            <CommentForm setComment={setComment}/>
            <hr/>
            {
                comment.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;
