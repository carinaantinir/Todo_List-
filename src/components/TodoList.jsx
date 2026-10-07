
import Todo from "./Todo"


function TodoList({ todos, setTodos }) {
    return (
        <div>
            <p className="text-center text-pink-400 text-xl font-medium mb-6">
                Lista de tareas
            </p>

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
