
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

    return (
        <div className="flex items-center justify-between gap-3 px-4 mb-3 rounded-xl shadow-lg shadow-pink-300/30">
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
                className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 font-bold hover:bg-pink-200 transition cursor-pointer"
                Completar
            >  
                <Check size={30} className="text-pink-500"/> 
            </button>

            <button 
            onClick={deleteHandler}
            className="w=10 h-10 rounded-full bg-pink-100 text-pink-600
            hover:bg-pink-200 transition cursor-pointer"
            >
                <Trash2 size={30} className="text-pink-500"/>  
            </button>
            </div>
        </div>
    )
}

export default Todo