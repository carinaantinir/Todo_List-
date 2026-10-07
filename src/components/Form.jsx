import { useState } from 'react'
import FilterSelect from './FilterSelect.jsx'

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
            <input 
            type="text"
            className="flex-1 px4 py-3 rounded-full border border-0 shadow-lg shadow-pink-300/30 bg-whithe/80 outline-none focus:ring-2 focus:ring-pink-300 inset-shadow-sm inset-shadow-pink-700/50 text-center text-pink-700 placeholder:text-pink-400"
            placeholder="Agregar Tarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
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