import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/TodosContext.jsx'

const TodoForm = () => {

    const {todos,setTodos,todoId,setTodoId} = useContext(TodosContext);


   
    const addTodo = (e) => {
        e.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        const todo = {
            'id': todoId,
            'text': todoInput,
            'isCompleted': false,
            'isEditing': false,
        };

        setTodos([...todos,todo]);

        setTodoId(preId=> preId+1);

        setTodoInput('');
    }

    const [todoInput,setTodoInput] = useState('');


    
    function handleInput(e) {
        setTodoInput(e.target.value);
    }
    





    return (
        <div className="my-4">
            <form action="#" onSubmit={(e)=>addTodo(e)}>

                <input value={todoInput} onChange={(e) => handleInput(e)} type="text" placeholder='What do you need to do?' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </form>
        </div>
    )
}

export default TodoForm
