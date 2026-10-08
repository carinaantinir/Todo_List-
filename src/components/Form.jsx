import { useState } from 'react'
import FilterSelect from './FilterSelect.jsx'
import { ListTodo } from "lucide-react";
import Button from "./Button.jsx";

function Form({ setTodos, setStatus }) {
    const [inputText, setInputText] = useState("")
    
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
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6 sm:items-center gap-3 mb-6">
        
        <div className="relative flex-1 =translate-y-1">
            <ListTodo
            size={20}
            className="absolute left-16 top-[40%] -translate-y-[20%] text-pink-500 pointer-events-none"
        />

            <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-0 shadow-lg shadow-pink-300/30 bg-white/80 outline-none text-pink-600 text-center placeholder:text-pink-500"
            placeholder="Agregar Tarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
        </div>
            <Button type="submit" className="self-center">
            Agregar
            </Button>
            <FilterSelect setStatus={setStatus}
            />
        </form>
    )
}

export default Form