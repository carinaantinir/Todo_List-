


function Button({
            children,
            onClick,
            type = "button",
            variant = "normal",
            className = "",
}) {
        const baseStyles =
            "bg-pink-300 text-pink-600 font-semibold shadow-md shadow-pink-300/40 hover:bg-pink-400 hover:scale-105 active:scale-95 transition cursor-pointer";

        const variants = {
            normal: "px-2 py-1 rounded-xl",
            icono: "w-10 h-10 rounded-full",
        };

        return (
            <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
        );
}

export default Button;