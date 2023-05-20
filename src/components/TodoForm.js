import React, { useState } from 'react'

function TodoForm() {
    const [input,setInput]=useState("");

  return (
    <form className='flex'>
        <input placeholder='Add a Todo' type='text' value={input} />
        <button >Add Todo</button>
    </form>
  )
}

export default TodoForm