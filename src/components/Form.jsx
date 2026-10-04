import { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Agregar Tarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit">Agregar</button>
            <select onChange={(e) => setStatus(e.target.value)}>
                <option value="todas">Todas</option>
                <option value="completadas">Completadas</option>
                <option value="incompletas">Incompletas</option>
            </select>
        </form>
    )
}

export default Form