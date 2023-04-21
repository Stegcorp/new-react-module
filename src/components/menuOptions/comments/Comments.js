import React, {useEffect, useState} from 'react';
import {commentsService} from "../../../services/comments.service";
import Comment from "../comment/Comment";
import './Comments.css'
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comment, setComment] = useState([]);
    useEffect(() => {
        commentsService.allGets().then(({data}) => setComment(data))
    }, [])
    return (
        <div>
            <div className="comments">
                <div>   {
                    comment.map(value => <Comment key={value.id} comment={value}/>)
                }
                </div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export default Comments;
