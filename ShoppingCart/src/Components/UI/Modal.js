import ReactDOM from "react-dom";
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
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onclose={props.onCloseModal} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay onClose={props.onCloseModal}>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    )
}
export default Modal;