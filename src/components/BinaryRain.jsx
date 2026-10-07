

function BinaryRain({ variant = "medio" }) {
    const configs = {
        fondo: {
        step: 11,    
        offset: 1,
        fontSize: 7,
        opacity: 0.22,
        speed: 13,
    },
        exterior: {
        step: 11,
        offset: 1,
        fontSize: 7,
        opacity: 0.35,
        speed: 13,
},
    medio: {
        offset: 3,
        step: 17,
        fontSize: 11,
        opacity: 0.45,
        speed: 9,
    },
    frente: {
        offset: 5,
        step: 23,
        fontSize: 16,
        opacity: 0.7,
        speed: 6,
    },
    transition: {
        offset: 0,
        step: 7,
        fontSize: 14,
        opacity: 0.8,
        speed: 5,
    }
};

    const config = configs[variant];

    const binaryColumns = Array(18).fill(
    "100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010100111010"
    );

    return (
        <div className={`binary-rain binary-rain-${variant}`}>
            {binaryColumns.map((binary, index) => (
            <span
            key={index}
            className="binary-column"
            style={{
            left: `${(index * config.step + config.offset) % 100}%`,
            fontSize: `${config.fontSize}px`,
            opacity: config.opacity,
            animationDuration: `${config.speed + ((index * 3) %7)}s`,
            animationDelay: `${-index * 0.7}s`,
        }}
        >
            {binary}
            </span>
        ))}
        </div>
    );
}

export default BinaryRain;