import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const ScrollTodo = styled.ul`
overflow:auto;
height:400px;
&::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Todos = props => {


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
        <ScrollTodo className="pl-4 pr-4 overflow-auto">
            {todoList}
        </ScrollTodo>
    )
}




export default Todos;