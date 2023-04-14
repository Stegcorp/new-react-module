import React from 'react';

const FullPost = ({post}) => {
    return (
        <div>
            <div><b>id:</b>{post.id}</div>
            <div><b>title:</b>{post.title}</div>
            <div><b>body:</b>{post.body}</div>
                <hr/>
        </div>
    );
};

export default FullPost;
