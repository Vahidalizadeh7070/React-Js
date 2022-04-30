import { useDispatch, useSelector } from 'react-redux';
import btnClasses from '../Layout/CartButton.module.css';
import { uiActions } from '../Store/ui-slice';

const CartButton = props => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
console.log(cartQuantity);
    const toggleHandler = () => {

        dispatch(uiActions.toggle());
    }
    return (
        <button type='button' onClick={toggleHandler} className={btnClasses.cartButton}>
            <span className='px-4'>Your Cart</span>
            <span className='badge bg-info rounded-pill mb-1'>{cartQuantity}</span>
        </button>
    )
}
export default CartButton;