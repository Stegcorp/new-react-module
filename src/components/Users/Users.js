import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        usersService.allUsers().then(({data}) => setUser(data))
    }, [])
    return (
        <div>
            <UserForm setUser={setUser}/>
            <hr/>
            {
                user.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;
