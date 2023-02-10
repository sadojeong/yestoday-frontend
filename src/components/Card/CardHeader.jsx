import React from "react";

const CardHeader = props => {
    const addTodoHandler = (event) => {
        const enteredValue = event.target.value;


        if (event.key === 'Enter') {
            props.onAdd(enteredValue);
            // console.log(enterdValue);
            event.target.value = '';
        }
    }

    return (
        <div>
            <input type='text'
                maxLength={20}
                className='w-full p-4 outline-none h-14 text-md placeholder:font-medium placeholder:text-gray-300 placeholder:text-md'
                placeholder='Todo를 추가하세요'
                onKeyDown={addTodoHandler}
            ></input>
        </div >
    )

}
export default CardHeader;