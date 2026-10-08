
import { Check, Trash2 } from 'lucide-react'
import Button from "./Button.jsx";


function Todo ({ text, todo, setTodos }) {
    const deleteHandler = () => {
        setTodos((prevTodos) => 
            prevTodos.filter((item) => item.id !== todo.id)
        )
    }

    const completeHandler = () => {
        setTodos((prevTodos) =>
            prevTodos.map((item) => 
            item.id === todo.id
            ? {...item, completed: !item.completed}
            : item
            )
        )
    }
    return (
        <div
            className={`flex items-center justify-between gap-3 px-4 mb-3 rounded-xl transition-all duration-300 ${
                todo.completed
                    ? "shadow-sm opacity-100"
                    : "shadow-xl shadow-pink-700/60 bg-white/80 border border-pink-100 -translate-y-1"
        }`}
            >
            <p
                className="flex-1 text-pink-600 font-medium"
                style={{ textDecoration: todo.completed ? "line-through" : "none"

                }}
            >
                {text}
            </p>
            <div className="flex items-center gap-2">
                <Button onClick={completeHandler} variant="icono">
                    <Check size={30} />
                </Button>

                <Button onClick={deleteHandler} variant="icono">
                    <Trash2 size={30} />
                </Button>
            </div>
        </div>
)
}

export default Todo