import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext(
    {
        token: '',
        isLoggedIn: false,
        login: (token) => { },
        logout: () => { }
    });

const calculationRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
}

const retrieveStoredToken = () =>
{
    const storedToken = localStorage.getItem('token');
    const StoredExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculationRemainingTime(StoredExpirationDate);

    if(remainingTime <=3600)
    {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token : storedToken,
        duration : remainingTime
    };
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken ();
    let intialToken;
    if(tokenData)
    {
        intialToken =tokenData.token;
    }
    const [token, setToken] = useState(intialToken);

    const userIsLoggedIn = !!token;

    
    const logoutHandler = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        setToken(null);

        if(logoutTimer)
        {
            clearTimeout(logoutTimer);
        }
    },[])
    
    const loginHandler = (token,expirationTime) => {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        setToken(token);
        const remainTime = calculationRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler,remainTime);
    }
    
    useEffect(()=>{
        if(tokenData)
        {
            console.log(tokenData.duration);
            logoutTimer= setTimeout(logoutHandler,tokenData.duration);
        }
    },[tokenData,logoutHandler])

    const contextToken = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextToken}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;