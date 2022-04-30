import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counters = useSelector((state) => state.counter.counter);
    const showcounter = useSelector((state) => state.counter.showCounter);
    

    const IncrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const Increase = () => {
        dispatch(counterActions.increase(10));
    }

    const DecrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const ToggleHandler = () => {
        dispatch(counterActions.toggle());
    }

    const counterDiv = <div>
        <p>
            <label className="text-secondary">Counter: {counters}</label>
        </p>
        <hr />
        <center>
            <button className="btn btn-primary mx-1" onClick={IncrementHandler}>
                Increment
            </button>
            <button className="btn btn-warning mx-1" onClick={Increase}>
                + 10
            </button>
            <button className="btn btn-danger mx-1" onClick={DecrementHandler}>
                Decrement
            </button>
        </center>
    </div>

    return (
        <Fragment>
            <div className="container">
                <div className="col-md-6 offset-md-3 shadow">
                    <div className="p-5">
                        <div className="pb-3">
                            <button className="btn btn-light shadow rounded-3 float-end" onClick={ToggleHandler}>Toggle button</button>
                        </div>
                        {
                            showcounter && counterDiv
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Counter;