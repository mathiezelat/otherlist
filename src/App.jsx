import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

const KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoTaskRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos){
      setTodos(storedTodos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(todos));
  },[todos])

  const toggleTodo = id =>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=> todo.id === id)
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }
  const handleTodoAdd = () =>{
    const task = todoTaskRef.current.value;
    if ( task === '') return;
    setTodos((prevTodos)=>{
      return [...prevTodos, {id: uuidv4(), task, completed: false}];
    });
    todoTaskRef.current.value = null;
  }
  const handleClearAll = ()=>{
    const newTodos = todos.filter(todo=>!todo.completed);
    setTodos(newTodos);
  }
  const handleClear = id =>{
    const newTodos = todos.filter(todo=>todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <div className="container-app">
        <h1>otherlist</h1>
      <div className="container-new-tarea">
        <input className="newTarea" ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
        <button className="btn-img" onClick={handleTodoAdd}><img className="img-inicio" src="/img/icons_plus.svg" alt="" /></button>
        <button className="btn-img" onClick={handleClearAll}><img className="img-inicio" src="/img/icons_cancel.svg" alt="" /></button>
      </div>
        <h3 className="faltanTareas">Te quedan {todos.filter((todo)=>!todo.completed).length} tareas por terminar</h3>
        <TodoList todos={todos} toggleTodo={toggleTodo} handleClear={handleClear} />
    </div>
  );
}

export default App;
