import { useState } from "react";

export default function FilterButton({ label, isActive, onClick }) {  

    return (
        <div className="flex flex-row justify-center gap-0.5 max-4xl w-full">
            <button
                className={`bg-gray-300 rounded-3xl p-2 w-full ${isActive && "bg-ysa-blue-light"}`}
                name="filter1"
                onClick={onClick}>
                {label}
            </button>
            
        </div>


    )
}