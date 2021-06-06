import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import './TodoList.scss'
export const TodoList = ({ todos, toggleTodo, handleClear })=>{
    return(
        <ul>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} handleClear={handleClear} />
            ))}
        </ul>
    )
}