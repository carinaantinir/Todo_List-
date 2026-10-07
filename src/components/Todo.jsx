
import { Check, Trash2 } from 'lucide-react'

function Todo ({ text, todo, setTodos }) {
    const deleteHandler = () => {
        setTodos((prevTodos) => 
            prevTodos.filter((item) => item.id !== todo.id)
        )
    }

    const completeHander = () => {
        setTodos((prevTodos) =>
            prevTodos.map((item) => 
            item.id === todo.id
            ? {...item, completed: !item.completed}
            : item
            )
        )
    }

    const actionButtonStyles =
        "w-10 h-10 rounded-full bg-pink-300 text-pink-600 shadow-md shadow-pink-300/40 hover:bg-pink-400 hover:scale-105 active:scale-95 transition cursor-pointer";

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
            <button 
                onClick={completeHander}
                className={actionButtonStyles}
            
            >  
                <Check size={30} /> 
            </button>

            <button 
            onClick={deleteHandler}
            className={actionButtonStyles}
            >
                <Trash2 size={30} />  
            </button>
            </div>
        </div>
    )
}

export default Todo