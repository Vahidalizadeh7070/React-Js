import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from "../Store/index";

const Navigation = () => {
    const isAuth = useSelector(state => state.authentication.isAuthenticated);
    const dispatch = useDispatch();

    const LogoutHandler = () => {
        dispatch(authenticationActions.logout())
    }
    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAuth && (<button className="btn nav-link" onClick={LogoutHandler} type="button">Logout </button>)}
                {!isAuth && (<li className="nav-item"><button className="btn nav-link" type="button" >Register</button></li>)}

            </ul>
        </div>
    )
}
export default Navigation;