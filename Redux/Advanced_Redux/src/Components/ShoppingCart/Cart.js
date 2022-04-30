import Modal from "../UI/Modal";
import React, { Fragment } from "react";
import CartItemCss from '../ShoppingCart/CartItem.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Checkout from "./Checkout";

const Cart = props => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const itemsInCart = (
        <ul className={`${CartItemCss.cartHeight} list-group`}>
            {cartItems.map((item) => (
                <li key={item.id}>
                    <CartItem item={{
                        id: item.id,
                        title: item.title,
                        quantity: item.quantity,
                        price: item.price
                    }}/>
                </li>
            ))}
        </ul>
    )

    // const modalAction = <Fragment>{hasItems && (<button className="btn btn-success rounded3 float-end" onClick={orderHandler}> Save your order </button>)}
    //     <button onClick={props.onClose} type="button" className="btn btn-warning float-end shadow rounded3" data-bs-dismiss="modal">Close</button>
    // </Fragment>

    const cartModalContent = <Fragment>
        {itemsInCart}
        <hr />
        <p className="text-black">Total amount: {totalAmount.toFixed(2)}</p>
        <hr />

        {/* {isCheckout && <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} />} */}
        {/* {!isCheckout && modalAction} */}

    </Fragment>

    const isSubmittingModalContent = <p className="p-5 text-center shadow rounded3">Sending Order to the server...</p>
    const didSubmitModalContent = <Fragment>
        <p className="p-5 text-center shadow rounded3">Successfully sent the order the server.</p>
        <button onClick={props.onClose} type="button" className="btn btn-warning float-end shadow rounded3" data-bs-dismiss="modal">Close</button>
    </Fragment>




    return (
        <Modal onCloseModal={props.onClose}>
            {cartModalContent}
        </Modal>
    )
}
export default Cart;