import { useState } from 'react'

function Form({setTodos}) {
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
        </form>
    )
}

export default Form