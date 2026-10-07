import { useState } from 'react'
import FilterSelect from './FilterSelect.jsx'
import { ListTodo } from "lucide-react";


function Form({ setTodos, setStatus }) {
    const [inputText, setInputText] = useState("")
    const buttonStyles = "px-5 py-3 bg-pink-300 text-pink-600 font-semibold rounded-xl hover:bg-pink-500 active:sca transition cursor-pointer hover:scale-105 active:scale-95 appearance-none outline-none border-0" 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.trim() === "") return;
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                text: inputText,
                completed: false,
                id:Date.now()
            }
        ])

        setInputText("")
    }    

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
        
            <div className="relative flex-1 =translate-y-1">
            <ListTodo
            size={20}
            className="absolute left-14 top-[40%] -translate-y-[60%] text-pink-500 pointer-events-none"
        />

            <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-0 shadow-lg shadow-pink-300/30 bg-white/80 outline-none text-pink-600 text-center placeholder:text-pink-500"
            placeholder="Agregar Tarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
</div>
            <button 
                type="submit"
                className={buttonStyles}
            >
                Agregar
            </button>
            <FilterSelect setStatus={setStatus}
            buttonStyles={buttonStyles}
            />
        </form>
    )
}

export default Form