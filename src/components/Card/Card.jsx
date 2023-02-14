import React from "react";

const Card = props => {
    return (
        <div className="fixed w-full h-full p-5 pt-4 bg-gray-100 ">
            <img className="mb-3 ml-20 mr-20 w-52"
                src="https://yestoday.s3.ap-northeast-2.amazonaws.com/todo-list.png" alt="" />
            <div className="bg-white border-gray-300 shadow-md w-[350px] h-96">
                {props.children}

            </div>

        </div>


    )
}

export default Card;