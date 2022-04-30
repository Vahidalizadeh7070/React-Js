import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
    const context = useContext(AuthContext);

    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                    context.isLoggedIn === true ? (<li className="nav-item">
                        <button className="btn nav-link" type="button" onClick={context.onLogout}>Logout {context.userName}</button>

                    </li>

                    ) :
                        (<li className="nav-item"><button className="btn nav-link" type="button" >Register</button></li>)
                }

            </ul>


        </div>
    )
}
export default Navigation;