import React from "react";

const Card = props => {
    return (
        <div className="fixed w-full h-full pt-3 bg-gray-100 lg:pl-5 xl:pl-12">
            <img className="w-64 mb-3 ml-12"
                src="./images/todolist.png" alt="" />
            <div className="bg-white border-gray-300 shadow-md w-[350px] h-96">
                {props.children}

            </div>

        </div>


    )
}

export default Card;