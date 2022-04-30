import React, { useState,useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userName: '',
    onLogout: () => {},
    loginHandler: (user, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        const localinfo = localStorage.getItem('isLoggedIn');
        if (localinfo != null) {
          setUser(localinfo);
          setIsLoggedIn(true);
        }
      }, []);

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = (user, password) => {
        localStorage.setItem('isLoggedIn', user);
        setUser(user);
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logout,
            userName: user,
            loginHandler : loginHandler,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;