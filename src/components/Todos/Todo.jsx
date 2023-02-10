import React, { useEffect, useState } from "react";
import MyButton from "./MyButton"



const Todo = props => {

    const [title, setTitle] = useState(props.name);
    const [isCompleted, setCompleted] = useState(false);


    useEffect(() => {
        setCompleted(props.isCompleted);

    }, [])



    // Todo 업데이트
    const editTodoHandler = (event, isCompleted) => {
        if (!isCompleted) {
            setTitle(event.target.value);
        }
    }

    // Todo 업데이트 적용 핸들러
    const updateSubmitHandler = (event, isCompleted) => {
        if ((event.key === 'Enter') && !isCompleted) {
            props.onUpdate(props.id, title);
            event.target.disabled = true;
        }
    }
    // Todo 체크 시 삭선효과, 회색 텍스트 적용
    const checkHandler = () => {
        setCompleted(!isCompleted);
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
            <div className="flex items-center w-full group">
                <input type="checkbox" className='h-6 w-7' onChange={checkHandler} checked={isCompleted} />
                <div className='w-full' onDoubleClick={editableHandler}>

                    <input className={`p-1 h-full w-full bg-transparent ${isCompleted && 'line-through text-gray-300 ease-in duration-500'}`} // list
                        type="text"
                        value={title}
                        onChange={(event) => editTodoHandler(event, isCompleted)}
                        onBlur={UneditableHandler}
                        onKeyDown={(event) => updateSubmitHandler(event, isCompleted)}
                        disabled
                    ></input>
                    <label htmlFor={props.id}></label>
                </div>

                <MyButton todo={title} id={props.id} todoDescription={props.todoDescription} updateSubmitHandler={updateSubmitHandler} />
                <button className='ml-2 font-semibold text-red-400 cursor-default group-hover:visible' onClick={deleteTodoHandler}>X</button>

            </div>
            {/* <button onClick={()=> setModalIsOpen(true)}>Modal Open</button> */}








        </div>


    )
}

export default Todo;