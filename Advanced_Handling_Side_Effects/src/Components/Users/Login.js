import React, { useContext, useEffect, useReducer, useState } from "react";
import '../../App.css';
import AuthContext from "../../store/auth-context";

// We can combine all useStates together by useReducer
const emailReducer = (state, action) => {

    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    return { value: '', isValid: false };
}
const passwordReducer = (state, action) => {

    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 4 };
    }
    return { value: '', isValid: false };
}

const Login = (props) => {
    const context=useContext(AuthContext);
    // const [password, setPassword] = useState('');
    // const [passwordValid, setPasswordValid] = useState();
    // const [email,setEmail]=useState('');
    // const [emailValid,setEmailValid]=useState();
    const [isLogged, setIsLoggedIn] = useState(false);
    const [formisvalid, setFormIsValid] = useState(false);
    const [counterPassword, setCounterPassword] = useState(0);
    // reducer will be executed when emailReducer function runs.

    const [emailState, dispatchEmail] = useReducer(emailReducer, {

        // These are default values for useReducer
        value: '',
        isValid: false
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {

        // These are default values for useReducer
        value: '',
        isValid: false
    })
    
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    useEffect(() => {
        // We can perform something when this component start just for once.
        // If there is any parameter in the dependency section ( in the []), then when the dependency is changed it will be executed

        // This identifier function will be executed after 5ms which in here it checks the validity
       

        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
            console.log('first');

        }, 500);

        // This is clean up section
        // The clearTimeout function clean all results of identifier function which includes setTimeout function
        return () => {

            // When the password is valid we do not need to clearTimeOut
            console.log('second');
            clearTimeout(identifier);

        };
    }, [emailIsValid, passwordIsValid]);


    const onEmailChange = (event) => {
        
        dispatchEmail(
            {
                type: 'USER_INPUT',
                val: event.target.value
            }
        )
        setFormIsValid(event.target.value.includes('@') && passwordIsValid);
    }

    const onPasswordChange = (event) => {
        setCounterPassword(passwordState.value.length+1);
        dispatchPassword(
            {
                type: 'USER_INPUT',
                val: event.target.value
            }
        )
        setFormIsValid(emailIsValid && event.target.value.trim().length > 6);
    }


    const onFormSubmit = (event) => {
        setIsLoggedIn(true);
        context.loginHandler(emailState.value, passwordState.value);
    }
    return (
        <div>
            <div className="shadow rounded-3 col-md-6 offset-md-3 bg-white">
                <div className="p-5 mt-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="pb-3">
                            <label className="form-label">Email</label>
                            <input className={emailState.isValid === true ? 'form-control is-valid' : 'form-control is-invalid'} type="email" placeholder="example@example.com" value={emailState.value} onChange={onEmailChange} />
                        </div>
                        <div className="pb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className={`${passwordState.isValid ? 'form-control is-valid' : 'form-control is-invalid'}`} placeholder="more than 4 character" value={passwordState.value} onChange={onPasswordChange} />
                            <p><small className="small fs-6 text-secondary">Password count is: {counterPassword}</small></p>
                        </div>
                        <div className="pt-3">
                            <button className={`${formisvalid === true ? '' : 'disabled'} btn btn-primary rounded-3 shadow`} disabled={!formisvalid} type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;