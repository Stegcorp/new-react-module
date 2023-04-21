import React, {useEffect, useState} from 'react';
import {todosService} from "../../../services/todos.service";
import TodosOne from "../todosOne/TodosOne";

const Todos = () => {
    const [todos,setTodos] = useState([]);
        useEffect(()=>{
        todosService.AllGets().then(({data}) => setTodos(data))
            },[])

    return (


        <div>
            {
                todos.map(value => <TodosOne key={value.id} todos={value}/>)
            }
        </div>
    );
};

export default Todos;
