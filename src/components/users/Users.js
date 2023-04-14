import React, {useEffect, useState} from 'react';
import {userService} from "../../services/users.service";
import User from "./User";

const Users = ({userID}) => {



    const [users,setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers(data))
    },[])
    return (
        <div>
            {
                users.map(value => <User user={value} key={value.id} userId={userID}/>)
            }
        </div>
    );
};

export default Users;
