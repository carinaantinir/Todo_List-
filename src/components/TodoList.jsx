
import Todo from "./Todo"
import conejoTareas from "../assets/conejo-tareas.png"


function TodoList({ todos, setTodos }) {
    return (
        <div>
        <div className="relative flex items-center justify-center mb-6 mt-8">
            <img
                src={conejoTareas}
                alt=""
                className="absolute left-4 w-16 opacity-80 pointer-events-none"
            />

            <p className="text-center text-pink-500 text-xl font-medium">
                Lista de tareas
            </p>
            </div>

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
