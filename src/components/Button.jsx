const Button = ({ children, disabled, onclick }) => {
    return (
        <button
            className="min-w-14 w-1/6 bg-blue-600 text-slate-50 font-semibold [&:not(:disabled)]:hover:bg-blue-700 [&:not(:disabled)]:active:bg-blue-800 text-base sm:text-lg"
            disabled={disabled}
            onClick={onclick}
        >
            {children}
        </button>
    )
}

export default Button
