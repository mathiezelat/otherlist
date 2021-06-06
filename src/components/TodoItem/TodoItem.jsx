import React from 'react'
import './TodoItem.scss'

export const TodoItem = ({ todo, toggleTodo, handleClear })=> {
    const { id, task, completed } = todo;
    const handleTodoClick = ()=>{
        toggleTodo(id)
    }
    const handleClearClick = ()=>{
        handleClear(id)
    }
    return (
        <li>
            <h3>{task}</h3>
            <div className="container-btn">
                <input type="checkbox" checked={completed} onChange={handleTodoClick} />
                <button onClick={handleClearClick}><img src="/img/icons_trash.svg" alt="" /></button>
            </div>
        </li>
    )
}
