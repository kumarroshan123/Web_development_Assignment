import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App
