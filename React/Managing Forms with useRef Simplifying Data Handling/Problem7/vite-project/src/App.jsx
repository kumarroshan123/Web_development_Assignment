import { useState } from 'react'
import DynamicForm from './components/DynamicForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicForm />
    </>
  )
}

export default App
