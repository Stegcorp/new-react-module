import React, {useEffect, useState} from 'react';
import {commentsService} from "../../../services/comments.service";

const Comments = () => {
    const [comment,setComment] = useState([]);
    useEffect(()=>{
        commentsService.allGets().then(value =>  console.log(value))
    },[])
    return (
        <div>
            comments
        </div>
    );
};

export default Comments;
