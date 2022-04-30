import Modal from "../UI/Modal";
import React, { Fragment, useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "../ShoppingCart/CartItem";
import CartItemCss from '../ShoppingCart/CartItem.module.css';
import Checkout from "./Checkout";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const context = useContext(CartContext);
    const totalAmount = `$${context.totalAmount.toFixed(2)}`;
    const hasItems = context.items.length > 0;

    const onAdd = item => {
        context.addItem(item);
    }
    const onRemove = (id) => {
        context.removeItem(id);
    }

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-api-s-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: context.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        context.clearItems();
    };

    const itemsInCart = (
        <ul className={`${CartItemCss.cartHeight} list-group`}>
            {
                context.items.map((item) => (
                    <CartItem key={item.id} id={item.id} amount={item.amount} title={item.title} publisher={item.publisher} price={item.price} year={item.year} onRemove={onRemove.bind(null, item.id)} onAdd={onAdd.bind(null, item)} />
                ))}
        </ul>
    )

    const modalAction = <Fragment>{hasItems && (<button className="btn btn-success rounded3 float-end" onClick={orderHandler}> Save your order </button>)}
        <button onClick={props.onClose} type="button" className="btn btn-warning float-end shadow rounded3" data-bs-dismiss="modal">Close</button>
    </Fragment>

    const cartModalContent = <Fragment>
        {itemsInCart}
        <hr />
        <p className="text-black">Total amount: {totalAmount}</p>
        <hr />

        {isCheckout && <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} />}
        {!isCheckout && modalAction}

    </Fragment>

    const isSubmittingModalContent = <p className="p-5 text-center shadow rounded3">Sending Order to the server...</p>
    const didSubmitModalContent = <Fragment>
        <p className="p-5 text-center shadow rounded3">Successfully sent the order the server.</p>
        <button onClick={props.onClose} type="button" className="btn btn-warning float-end shadow rounded3" data-bs-dismiss="modal">Close</button>
    </Fragment>




    return (
        <Modal onCloseModal={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {didSubmit && !isSubmitting && didSubmitModalContent}
        </Modal>
    )
}
export default Cart;