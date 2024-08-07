import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
function AddTodo() {

const [input, setInput]  = useState('');
const dispatch = useDispatch();
const handleClick= (e)=>{
    e.preventDefault();
    dispatch(addTodo({text:input}));
    setInput(''); 
}
  return (
    <form>
        <input type="text" placeholder='Enter ToDo' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default AddTodo
