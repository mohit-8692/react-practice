import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
function Todo() {

   const todos= useSelector(state=>state.todos)
   const dispatch = useDispatch(); 
   
   return (
    <>
        <div>
            {todos.map((todo)=>{
                return(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={(e)=>dispatch(removeTodo(todo.id))}>X</button>
                </li>
                )
            })}
        </div>     
    </>
  )
}
export default Todo;
