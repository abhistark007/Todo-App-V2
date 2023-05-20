import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos,setTodos]=useState([]);

    // Add todo in todo state variable
    const addTodo = (todo)=>{
        // if text is empty then return
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        // Add new todo in the beginning in the old list of todos
        const newTodos=[todo,...todos];
        // set the new values of todos
        setTodos(newTodos);
    }

    const completeTodo =(id)=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    const removeTodo=(id)=>{
        const removeArr=[...todos].filter((todo)=>todo.id!==id);

        setTodos(removeArr);
    }

    const updateTodo=(todoId,newValue)=>{
        // if text is empty then return
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev=> prev.map(item=> (item.id===todoId ? newValue:item)))

    }


  return (
    <div className='flex flex-col gap-3  sm:w-[30rem] bg-purple-950 text-white px-5 py-10 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <h1 className='text-3xl'>Whats the plan for today ?</h1>
        <TodoForm  onSubmit={addTodo} />
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList