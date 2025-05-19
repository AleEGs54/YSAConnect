/**
 * A toggle button component that switches between two labels based on the provided state.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.label1 - The label to display when the state is true.
 * @param {string} [props.label2=''] - The label to display when the state is false.
 * @param {boolean} [props.state=true] - The initial state of the toggle button.
 * @param {Function} props.handleOnClick - The function to call when the button is clicked.
 */

export default function ToggleButton({ label1, label2='', state=true, handleOnClick, }) {
    return (
        <button 
        onClick={() => handleOnClick()} 
        className="bg-ysa-yellow rounded-full p-2">
            {state ? `${label1}` : `${label2}`}
        </button>
    )
}