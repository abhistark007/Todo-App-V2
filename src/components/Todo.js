import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:""
    });

    const submitTodo=(value)=>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:""
        })
    }


    if(edit.id){
        return <TodoForm onSubmit={submitTodo}/>
    }

 return todos.map((todo,index)=>(
    <div className={`flex ${todo.isComplete && "line-through"}`} key={index}>
        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='flex'>
            <RiCloseCircleLine
            onClick={()=>removeTodo(todo.id)}
            />
            <AiFillEdit
            onClick={()=>setEdit({id:todo.id,value:todo.text})}
            />
        </div>
    </div>
 ))
}

export default Todo