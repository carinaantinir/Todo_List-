import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Form from './components/Form.jsx'
import TodoList from './components/TodoList.jsx'
import Todo from './components/Todo.jsx'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h1>Todo_List</h1>
      <Form setTodos={setTodos}/>
      <TodoList
      todos={todos} 
      setTodos={setTodos}/>
    </div>
  )
}


export default App