import React, { useState } from "react";

const Todo = props => {
    const [title, setTitle] = useState(props.name);
    const [iscompleted, setCompleted] = useState(false);


    // Todo 업데이트
    const editTodoHandler = event => {
        setTitle(event.target.value);
    }

    // Todo 업데이트 적용 핸들러
    const updateSubmitHandler = event => {
        if (event.key === 'Enter') {
            props.onUpdate(props.id, title);
            event.target.disabled = true;
        }
    }
    // Todo 체크 시 삭선효과, 회색 텍스트 적용
    const checkHandler = () => {
        setCompleted(!iscompleted);
        props.onChecked(props.id);



    }

    // Todo 편집 활성화
    const editableHandler = event => {
        event.target.disabled = false;
    }

    // input 포커싱을 잃으면, 다시 비활성화(disabled)
    const UneditableHandler = event => {
        event.target.disabled = true;
    }

    // Todo 딜리트
    const deleteTodoHandler = () => {
        props.onDelete(props.id);
    }


    return (
        <div>
            <div className="flex w-full group">
                <input type="checkbox" className='h-6 w-7 check' onChange={checkHandler} />
                <div className='w-full' onDoubleClick={editableHandler}>

                    <input className={`p-1 h-full w-full bg-transparent ${iscompleted && 'line-through text-gray-300 ease-in duration-500'}`} // list
                        type="text"
                        value={title}
                        onChange={editTodoHandler}
                        onBlur={UneditableHandler}
                        onKeyDown={updateSubmitHandler}
                        disabled
                    ></input>
                    <label htmlFor={props.id}></label>
                </div>
                <button className='invisible ml-2 font-semibold text-red-400 cursor-default group-hover:visible' onClick={deleteTodoHandler}>X</button>

            </div>

        </div>
    )
}

export default Todo;