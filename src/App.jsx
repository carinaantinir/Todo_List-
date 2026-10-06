
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Form from './components/Form.jsx'
import TodoList from './components/TodoList.jsx'
import Todo from './components/Todo.jsx'
import {useEffect, useState} from 'react'


function App() {
  const [todos, setTodos] = useState(() => {
    const taareasGuardadas = localStorage.getItem("todos")
    return taareasGuardadas ? JSON.parse(taareasGuardadas) : []
  }
)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [status, setStatus] = useState("todas")
  const filteredTodos = todos.filter((todo) => 
    status === "completadas" 
    ? todo.completed 
    : status === "incompletas" 
    ? !todo.completed 
    : true
  )
  return (
    <div>
      <h1>Todo List</h1>
      <Form setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList todos={filteredTodos} 
      setTodos={setTodos}/>
    </div>
  
  )
}


export default App