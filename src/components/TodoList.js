import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,setTodos]=useState([]);


  return (
    <div className='flex flex-col'>
        <h1>Whats the plan for today</h1>
        <TodoForm  />
    </div>
  )
}

export default TodoList