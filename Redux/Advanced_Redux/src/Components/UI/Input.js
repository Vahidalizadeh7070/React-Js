import React, { Fragment } from "react";

const Input = React.forwardRef((props, ref) => {

    return (
        <Fragment>
            <label htmlFor={props.input.id} className="form-label">{props.label}</label>
            <input ref={ref} {...props.input} />
        </Fragment>
    )
});
export default Input;