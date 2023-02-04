import React from "react";

const Card = props => {
    return (
        <div className="fixed w-full h-full p-5 bg-gray-100">
            <span className='text-4xl font-thin'>Todos</span>
            <div className="bg-white border-gray-300 shadow-md w-96 h-96">
                {props.children}
            </div>
        </div>


    )
}

export default Card;