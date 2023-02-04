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
                className='w-full p-4 outline-none h-14 text-md placeholder:font-thin placeholder:font-medium placeholder:text-gray-300 placeholder:text-xl'
                placeholder='Quick add task'
                onKeyDown={addTodoHandler}
            ></input>
        </div>
    )

}
export default CardHeader;