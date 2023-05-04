import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";

const Users = () => {
const dispatch = useDispatch();
const {users} = useSelector(state => state.users);

useEffect(()=>{
    userService.getAll().then(({data}) => dispatch(userActions.setUsers(data)))
},[dispatch])

    return (
        <div>
            <UserForm/>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export {
    Users
};
