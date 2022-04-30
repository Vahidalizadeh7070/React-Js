import React, { useState, useRef } from "react";
import Input from "../UI/Input";

const AddItemToCartForm = props => {
    const amountInputRef = useRef();
    const [amountValid,setAmountValid]=useState(true);
    const submitHandler = (event) => {
        event.preventDefault();

        // We can use useState instead of ref
        const enteredAmount = amountInputRef.current.value;

        // convert to number
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().lenght === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountValid(false);
            return;
        }

        props.onAddItemToCart(enteredAmountNumber);
    }
    return (
        <form className="text-center" onSubmit={submitHandler}>
            <Input label="Amount" input={{
                ref: amountInputRef,
                id: 'amount',
                className: 'form-control rounded3',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button className="btn btn-danger rounded3 shadow mt-4">+ Add</button>
            {!amountValid && <p className="small text-danger">Please enter a valid number (1 to 5)</p>}
        </form>
    )
}
export default AddItemToCartForm;