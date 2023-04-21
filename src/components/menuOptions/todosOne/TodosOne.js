import React from 'react';

const TodosOne = ({todos}) => {



    return (
        <div>
            <div><b>id: </b>{todos.id}</div>
            <div><b>title:</b> {todos.title}</div>
            <div><b>completed: </b> {todos.completed}</div>
        </div>
    );
};

export default TodosOne;
