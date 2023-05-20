import React, { useState,useEffect,useRef } from 'react'

function TodoForm({onSubmit}) {
    const [input,setInput]=useState("");

    const inputRef=useRef(null);

    useEffect(()=>{
        // this makes the input filed focus on load
        inputRef.current.focus();
    })

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e)=>{
        // prevents page from reloading
        e.preventDefault();

        //pass the new todo object to onSubmit() function
        onSubmit({
            id:crypto.randomUUID(),
            text:input
        })
        
        // emptying the input field after adding the Todo
        setInput("");

    }

  return (
    <form className='flex h-12' onSubmit={handleSubmit}>
        <input placeholder='Add a Todo' type='text' value={input} onChange={handleChange} ref={inputRef} className='flex-[0.75] outline-none rounded-l-lg px-2 border-purple-600 border-2 bg-purple-950'/>
        <button className='flex-[0.25] bg-gradient-to-r from-purple-600 to-purple-400 rounded-r-lg h-full group duration-200 hover:font-bold relative'><span className='absolute z-20 left-0 w-0 top-0 bottom-0 group-hover:w-full bg-white opacity-30 duration-200 rounded-r-lg'></span>Add Todo</button>
    </form>
  )
}

export default TodoForm