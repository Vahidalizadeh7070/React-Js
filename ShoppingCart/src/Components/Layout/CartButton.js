import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
import CartButtons from '../Layout/CartButton.module.css';

const CartButton = props => {
    const [btnHighlighted, setbtnHighlighted] = useState(false);
    const context = useContext(CartContext);
    const { items } = context;
    
    const numberOfCartItem = items.reduce((number, item) => {
        return number + item.amount;
    }, 0);
    const btnClasses = `${CartButtons.cartButton} ${btnHighlighted ? CartButtons.bump : ''} float-end`;
    useEffect(() => {
        if (items.lenght === 0) {
            return;
        }
        setbtnHighlighted(true);
        const timer = setTimeout(() => {
            setbtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[items])

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className='px-4'>Your Cart</span>
            <span className='badge bg-info rounded-pill mb-1'>{numberOfCartItem}</span>
        </button>
    )
}
export default CartButton;