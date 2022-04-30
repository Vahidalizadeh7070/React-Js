import { useDispatch } from "react-redux";
import AddItemToCartForm from "./AddItemToCartForm";
import { cartActions } from '../Store/cart-slice';

const GameItem = props => {
    const dispatch=useDispatch();
    const {title,id,price,amount} = props;
    
    const onAddItemToCart = () => {
    
        dispatch(
            cartActions.addToCart({
                id,
                title,
                amount,
                price
            })
        )    
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start mb-3 border border-1 rounded-3">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.title}</div>
                {props.publisher}
                <p className="pt-2">
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-danger">{props.price}</small>
                    <small className="text-light rounded3 p-1 mx-1 fw-normal bg-info">{props.year}</small>
                </p>
            </div>
            <AddItemToCartForm onAddItemToCart={onAddItemToCart} />

        </li>
    )
}
export default GameItem;