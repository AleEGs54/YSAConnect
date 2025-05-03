export default function SearchBar({ value, onChange, placeholder = "Buscar" }) {
    return (
        <div className="relative w-1/2">
            <input
                type="text"
                placeholder={placeholder}
                className="border-1 w-full h-10 rounded-full p-4 pr-10"
                value={value}
                onChange={onChange}
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange({ target: { value: "" } })}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                >
                    Ⅹ
                </button>
            )}
        </div>
    );
}