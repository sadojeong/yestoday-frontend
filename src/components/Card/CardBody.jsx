import React from "react";
import Todos from "../Todos/Todos";


const CardBody = props => {
    return (
        <div>

            <Todos todos={props.todos} onDelete={props.onDelete} onUPdate={props.onUPdate} onChecked={props.onChecked} />
        </div>

    );
}
export default CardBody;