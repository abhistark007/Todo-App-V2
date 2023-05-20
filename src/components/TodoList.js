import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,setTodos]=useState([]);

    const addTodo = (todo)=>{
        // if text is empty then return
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos=[todo,...todos];
        setTodos(newTodos);
    }

  return (
    <div className='flex flex-col'>
        <h1>Whats the plan for today</h1>
        <TodoForm  onSubmit={addTodo} />
    </div>
  )
}

export default TodoList