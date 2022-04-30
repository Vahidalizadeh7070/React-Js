import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import AddItemToCartForm from "./AddItemToCartForm";

const GameItem = props => {
    
    const context = useContext(CartContext);
    const price = props.price;
    const onAddItemToCart = (amount) => {
        context.addItem({
            id: props.id,
            title: props.title,
            publisher: props.publisher,
            price: props.price,
            year: props.year,
            platforms: props.platforms,
            amount: amount
        })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start mb-3 border border-1 rounded-3">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.title}</div>
                {props.publisher}
                <p className="pt-2">
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-danger">{price}</small>
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-info">{props.year}</small>
                </p>
            </div>
            <AddItemToCartForm onAddItemToCart={onAddItemToCart} />

        </li>
    )
}
export default GameItem;