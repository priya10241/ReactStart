
function Button(
    children,
    type = "button",
    bgColor = "bg-gray-700",
    textColor = "text-white",
    ...props
){
    // console.log("Button: " , children);
    return (
        <>
        <button type={children.type || type} className={`p-2 rounded-lg ${bgColor} ${textColor} ${children.className}`} {...props} >{children.children}</button>
        </>
    )
}

export default Button;