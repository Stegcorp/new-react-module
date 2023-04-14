import React from 'react';

const User = ({user,userId}) => {
    return (
        <div>
            <div>name:{user.name}</div>
            <div>username:{user.username}</div>
            <button onClick={()=> {
                userId(user.id)
            }}>userPosts</button>
            <hr/>
        </div>
    );
};

export default User;
