import React, { useEffect, useState } from "react";
import ModalTodo from "./ModalTodo"



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
        <li>
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

                <ModalTodo todo={title} id={props.id} todoDescription={props.todoDescription} updateSubmitHandler={updateSubmitHandler} />
                <img className='w-5 h-5 transition duration-300 ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/trash.png" alt="" onClick={deleteTodoHandler}/>
                {/* <img className='w-5 h-5 mr-4 transition duration-300 ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110' src="images/pencil.png" alt="" onClick={handleShow}/> */}

            </div>
            {/* <button onClick={()=> setModalIsOpen(true)}>Modal Open</button> */}








        </li>


    )
}

export default Todo;