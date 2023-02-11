import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const baseUrl = 'http://localhost:8080/api/todo'




const MyButton = props => {

    const [show, setShow] = useState(false);
    const [todoDescription, setTodoDescription] = useState(props.todoDescription);
    const [showDescription, setShowDescription] = useState(props.todoDescription);
    const [todoName, setTodoName] = useState(props.todo);
    const [showName, setShowName] = useState(props.todo);
    useEffect(() => {
        setTodoName(props.todo);
    }, [])

    const handleClose = () => {
        setShowDescription(todoDescription);
        setShowName(todoName);
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const updateTodoHandler = () => {
        console.log(props.id);
        console.log(showDescription);

        axios.put(baseUrl, {
            id: props.id,
            name: showName,
            todoDescription: showDescription
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);

            });
        setShow(false);


    }

    return (
        <div>
            <Button className="btn " variant="+" onClick={handleShow}>+</Button>

            <Modal show={show} onHide={handleClose} className="right-6">
                <div className="mb-4">
                    <label className="block mb-2 text-lg font-bold text-center text-gray-700" >
                        Todo
                    </label>
                    <textarea
                        maxLength={20}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        onChange={(event) => setShowName(event.target.value)} value={showName}  ></textarea>
                    <label className="block mb-2 text-lg font-bold text-center text-gray-700" >
                        Tododescription
                    </label>
                    <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none h-60 focus:outline-none focus:shadow-outline"
                        onChange={(event) => setShowDescription(event.target.value)} value={showDescription} >{showDescription}</textarea>
                </div>
                <Modal.Footer>
                    <Button className="btn_close" variant="2" onClick={updateTodoHandler}>
                        저장하기
                    </Button>
                    <Button className="btn_close" variant="3" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default MyButton;