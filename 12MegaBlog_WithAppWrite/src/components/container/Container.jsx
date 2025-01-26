import React from "react";

function Container({Children}){
    return(
        <div className="w-80% max-w-7xl mx-auto bg-gray-800 text-white">
            {Children}
        </div>
    )
}

export default Container;