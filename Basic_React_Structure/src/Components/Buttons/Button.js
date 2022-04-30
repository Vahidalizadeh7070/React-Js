import React from "react";

const Button = (props) => {
    return (
        <div>
            <button type={props.type || 'button'} onClick={props.onClick} className="btn btn-primary rounded-3 shadow">{props.value}</button>
        </div>
    )
}
export default Button;