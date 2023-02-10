import React from "react";
import Todo from "./Todo";

const Todos = props => {
    console.log(props.todos);
    const todoList = props.todos.map(todo => (


        <Todo
            key={todo.id}
            name={todo.name}
            id={todo.id}
            todoDescription={todo.todoDescription}
            isCompleted={todo.completeState}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
            onChecked={props.onChecked}

        />
    ));

    return (
        <ul className="pl-4 pr-4 ">
            {todoList}
        </ul>
    )
}




export default Todos;