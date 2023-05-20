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
        return <TodoForm edit={edit} onSubmit={submitTodo}/>
    }

 return todos.map((todo,index)=>(
    <div className={`flex w-full duration-200 hover:scale-90 gap-5 bg-red-500 justify-between px-4 items-center py-4 rounded-lg ${todo.isComplete && "line-through"}`} key={index}>
        <div key={todo.id} onClick={()=>completeTodo(todo.id)} className='flex-[0.8] overflow-x-clip text-xl'>
            {todo.text}
        </div>
        <div className='flex gap-3 flex-[0.2]'>
            <RiCloseCircleLine className='text-2xl cursor-pointer hover:text-purple-600'
            onClick={()=>removeTodo(todo.id)}
            />
            <AiFillEdit className='text-2xl cursor-pointer hover:text-purple-600'
            onClick={()=>setEdit({id:todo.id,value:todo.text})}
            />
        </div>
    </div>
 ))
}

export default Todo