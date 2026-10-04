
import Todo from "./Todo"


function TodoList({ todos, setTodos }) {
    return (
        <div>
            <p>Lista de tareas</p>

            {todos.map ((todo ) => (
                <Todo
                key={todo.id} 
                text={todo.text} 
                todo={todo}
                setTodos={setTodos}

                />
            ))}
        </div>
    )
}

export default TodoList
