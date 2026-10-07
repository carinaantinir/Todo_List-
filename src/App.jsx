

import { useEffect, useState } from "react";

import BinaryRain from "./components/BinaryRain.jsx";
import Intro from "./components/Intro.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";




import conejoBinario from "./assets/conejo-binario.mp4";

function App() {
  const [stage, setStage] = useState("intro");

  const [todos, setTodos] = useState(() => {
    const tareasGuardadas = localStorage.getItem("todos");

    return tareasGuardadas
      ? JSON.parse(tareasGuardadas)
      : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [status, setStatus] = useState("todas");

  const filteredTodos = todos.filter((todo) =>
    status === "completadas"
      ? todo.completed
      : status === "incompletas"
      ? !todo.completed
      : true
  );

  const handleFollow = () => {
    setStage("transition");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-pink-50 to-pink-200">
      <BinaryRain variant="fondo"/>
      <div className="relative overflow-hidden w-full max-w-xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl">
        {stage === "intro" && (
          <Intro onFollow={handleFollow} />
        )}

        {stage === "transition" && (
          <video
            src={conejoBinario}
            autoPlay
            muted
            playsInline
            onEnded={() => setStage("app")}
            className="block w-full object-cover"
          />
        )}

        {stage === "app" && (
      <div className="relative p-8">
          <BinaryRain variant="fondo" />
          <BinaryRain variant="medio" />
          <BinaryRain variant="frente" />

         
          <h1 className="text-pink-600 text-4xl font-light tracking-wide mb-6 text-center">
          Todo List
          </h1>

          <Form
            setTodos={setTodos}
            setStatus={setStatus}
          />

          <TodoList
            todos={filteredTodos}
            setTodos={setTodos}
          />

          <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setStage("intro")}
            className="mt-6 px-5 py-2 text-pink-500 border border-pink-300 rounded-full hover:bg-pink-100 transition cursor-pointer"
          >
          Volver al inicio
          </button>
          </div>
          </div>
          )}
        </div>
      </div>
    );
}

export default App;