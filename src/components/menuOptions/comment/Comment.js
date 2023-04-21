import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment: {postId,id,name,email,body}}) => {
    return (
        <div>
            <Link to={postId.toString()}>
                <div><b>postId: </b>{postId}</div>
                <div><b>id: </b>{id}</div>
                <div><b>name: </b>{name}</div>
                <div><b>email: </b>{email}</div>
                <div><b>body: </b>{body} </div>
                <hr/>
            </Link>
        </div>
    );
};

export default Comment;
