import React from "react";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../Store/index";

const Login = (props) => {
    const dispatch = useDispatch();
    const LoginHandler = (event) => {
        event.preventDefault();
        dispatch(authenticationActions.login())

    }
    return (
        <div>
            <div className="shadow rounded-3 col-md-6 offset-md-3 bg-white">
                <div className="p-5 mt-5">
                    <form onSubmit={LoginHandler}>
                        <div className="pb-3">
                            <label className="form-label">Email</label>
                            <input className='form-control' type="email" placeholder="example@example.com" />
                        </div>
                        <div className="pb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className='form-control' placeholder="more than 4 character" />

                        </div>
                        <div className="pt-3">
                            <button className='btn btn-primary rounded-3 shadow' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;