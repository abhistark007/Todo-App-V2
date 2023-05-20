import React, { useState } from 'react'

function TodoForm() {
    const [input,setInput]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

  return (
    <form className='flex' onSubmit={handleSubmit}>
        <input placeholder='Add a Todo' type='text' value={input} />
        <button >Add Todo</button>
    </form>
  )
}

export default TodoForm