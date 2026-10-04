


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
        <div>
            <p
                style={{ textDecoration: todo.completed ? "line-through" : "none"

                }}
            >
                {text}
            </p>

            <button onClick={completeHander}>
                Completar
                </button>
            <button onClick={deleteHandler}>
                Eliminar
                </button>
        </div>
    )
}

export default Todo