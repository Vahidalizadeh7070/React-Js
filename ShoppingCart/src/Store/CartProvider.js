import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultValueOfCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'Add') {
        const updatetotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            };
            updatedItems = [...state.items];
            updatedItems[existCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatetotalAmount
        };
    }
    else if (action.type === "Remove") {
        const existCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    else if (action.type === "CLEAR") {
        return defaultValueOfCart;
    }
    return defaultValueOfCart;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultValueOfCart)

    const AddItem = item => {
        dispatchCartAction({ type: 'Add', item: item });
    }
    const RemoveItem = id => {
        dispatchCartAction({ type: 'Remove', id: id });
    }
    const ClearItemsHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: AddItem,
        removeItem: RemoveItem,
        clearItems: ClearItemsHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;