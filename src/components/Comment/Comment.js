import React from 'react';

const Comment = ({comment}) => {

    return (
        <div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: {comment.body}</div>
            _________________________-
        </div>
    );
};

export default Comment;
