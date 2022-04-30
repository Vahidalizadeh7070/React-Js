import ReactDOM from 'react-dom';
import React, { Fragment } from "react";
import Card from "../Card/Card";
import classes from '../Card/Card.module.css';
import modalclasses from '../Modal/Modal.module.css';


const Backdrop = (props) => {
    return (<div className={modalclasses.backdrop} onClick={props.confirmModal} />);
};
const ModalOverlay = (props) => {
    return (
            <Card className={classes.rounded3}>
                <div className={`${modalclasses.modal}`} id="Modal"  aria-labelledby="Modal-Label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-black" id="Modal-Label">{props.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.confirmModal}></button>
                            </div>
                            <div className="modal-body text-black">
                                {props.message}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.confirmModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
    );
};

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop confirmModal={props.confirmModal} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} confirmModal={props.confirmModal} />,
                document.getElementById('modal-root')
            )}
        </Fragment>
    );
};
export default Modal;