import React from "react";


const CartItem = props => {
    const price = `$${props.price}`
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-start mb-3 border border-1 rounded-3`}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.title}</div>
                {props.publisher}
                <p className="pt-2">
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-danger">{price}</small>
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-info">{props.year}</small>

                </p>
            </div>
            <button className="btn btn-success rounded-circle btn-sm" onClick={props.onAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
            <label className="p-1"> x {props.amount}</label>
            <button className="btn btn-danger rounded-circle btn-sm" onClick={props.onRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
            </button>
        </li>
    )
}
export default CartItem;