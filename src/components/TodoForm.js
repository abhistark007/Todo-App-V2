import React, { useState } from 'react'

function TodoForm({onSubmit}) {
    const [input,setInput]=useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // TODO:Add logic to add the todo
        onSubmit({
            id:crypto.randomUUID(),
            text:input
        })
        
        // emptying the input field after adding the Todo
        setInput("");

    }

  return (
    <form className='flex' onSubmit={handleSubmit}>
        <input placeholder='Add a Todo' type='text' value={input} onChange={handleChange}/>
        <button >Add Todo</button>
    </form>
  )
}

export default TodoForm