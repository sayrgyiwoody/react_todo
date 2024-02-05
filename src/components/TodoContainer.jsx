import React, { useContext, useState } from 'react'
import TodoForm from './TodoForm'
import TodoTittle from './TodoTittle'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import TodoTabs from './TodoTabs'
import { TodosContext } from '../context/TodosContext.jsx'
import NoTodos from './NoTodos'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContainer = () => {

    const [filter,setFilter] = useState('all');

    const [todos,setTodos] = useLocalStorage('todos',[])

    const [todoId,setTodoId] = useLocalStorage('todoId',1);

    function remainingTodos() {
        return todos.filter((todo)=>todo.isCompleted===false).length;
    }

    const filteredTodos = () => {

        if(filter === 'all'){
            return todos;
        }else if(filter === 'active'){
            return todos.filter(todo => todo.isCompleted === false) ;
        }else if (filter === 'completed'){
            return todos.filter(todo => todo.isCompleted === true) ;
        }
    }
    


    return (
        <TodosContext.Provider value={{ todos,setTodos,todoId,setTodoId , remainingTodos,filter,setFilter,filteredTodos}}>

            <div className="block max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <TodoTittle></TodoTittle>
                <TodoForm ></TodoForm>

                <TodoTabs></TodoTabs>
                
                    
                {todos.length > 0 ? (<TodoList></TodoList>) : (<NoTodos></NoTodos>)}
                 
                

                <hr className='my-2' />

                <TodoFooter></TodoFooter>

                <hr className="mt-2" />



            </div>
             





        </TodosContext.Provider>
    )
}

export default TodoContainer
