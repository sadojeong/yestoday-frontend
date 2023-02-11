import React from "react";
import Todos from "../Todos/Todos";


const CardBody = props => {
    return (
        <div className=" h-72">

            <Todos todos={props.todos} onDelete={props.onDelete} onUpdate={props.onUpdate} onChecked={props.onChecked} />
        </div>

    );
}
export default CardBody;