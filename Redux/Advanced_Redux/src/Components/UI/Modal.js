import ReactDOM from "react-dom";
import {uiActions} from '../Store/ui-slice';
import { useDispatch } from 'react-redux';
import { Fragment } from "react";
import CartModal from '../UI/Modal.module.css';
import CartItemCss from '../ShoppingCart/CartItem.module.css';

const Backdrop = (props) => {
    return <div className={`${CartModal.backdrop}`} onClick={props.onclose}></div>;

};

const ModalOverlay = (props) => {
    return (
        <div className={`${CartModal.modal} modal-dialog`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Your Cart</h5>
                    <button onClick={props.onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className={`modal-body ${CartItemCss.cartHeight}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}


const Modal = props => {
    const dispatch = useDispatch();

    const toggleHandler = () =>
    {

        dispatch(uiActions.toggle());
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onclose={toggleHandler} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay onClose={toggleHandler}>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    )
}
export default Modal;