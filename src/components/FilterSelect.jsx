
import { useState } from "react";
import {ChevronDown} from "lucide-react";

function FilterSelect({ setStatus, buttonStyles }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Todas");

    const options = [
        { label: "Todas", value: "todas" },
        { label: "Completas", value: "completadas" },
        { label: "Incompletas", value: "incompletas" },
    ];

    const handleSelect = (option) => {
        setSelected(option.label);
        setStatus(option.value);
        setOpen(false);
    };

    return (
    <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={buttonStyles}
            >
            <span className="inline-flexitem-center justify-center gap-2">
                {selected} 
                <ChevronDown size={18} />
            </span>    
            </button>

            {open && (
        <div className="absolute top-full mt-2 right-0 z-10 min-w-full overflow-hidden rounded-2xl bg-pink-50 shadow-lg shadow-pink-300/30">
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="block w-full px-5 py-2 text-left text-pink-600 hover:bg-pink-200 transition cursor-pointer"
            >
                {option.label}
            </button>
        ))}
        </div>
    )}
    </div>
);
}

export default FilterSelect;