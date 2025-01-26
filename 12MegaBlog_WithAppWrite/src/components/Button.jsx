
function Button(
    children,
    type = "button",
    bgColor = "bg-gray-700",
    textColor = "text-white",
    className = '',
    ...props
){
    return (
        <>
        <button className={`p-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >{children}</button>
        </>
    )
}

export default Button;