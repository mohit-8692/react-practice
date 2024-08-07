import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
