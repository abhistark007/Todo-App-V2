import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'

function Todo() {
    const [edit,setEdit]=useState({
        id:null,
        value:""
    });

 return todos.map((todo,index)=>(
    <div className={"flex"+todo.isComplete?'line-through':""} key={index}>
        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='flex'>
            <RiCloseCircleLine/>
            <AiFillEdit/>
        </div>
    </div>
 ))
}

export default Todo