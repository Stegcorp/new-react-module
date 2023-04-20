import React from 'react';

const User = ({user}) => {

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username:  {user.username}</div>
            <hr/>
        </div>
    );
};

export default User;
