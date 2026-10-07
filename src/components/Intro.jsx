

function Intro({ onFollow }) {
    return (
        <div className="w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-50 to-pink-100">
            <h1 className="text-pink-500 text-2xl font-light tracking-wide text-center mb-6">
                ¿Querés salir del bucle?
            </h1>

            <p className="text-pink-500 text-lg text-center mb-2">
                Empezá por vos.
            </p>

            <p className="text-pink-400 text-center mb-6">
                Seguí al conejo blanco.

            </p>

        <button
        type="button"
        onClick={onFollow}
        className="px-8 py-3 rounded-full text-pink-500 border border-pink-300 hover:bg-pink-100 transition cursor-pointer"
        >
        Inicio
        </button>
    </div>
);
}

export default Intro;


