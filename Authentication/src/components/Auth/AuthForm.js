import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const context = useContext(AuthContext)
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setMessage('');
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArUT1a_l_Q2wPcvNyyIl3qN_u57cvYppo';
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArUT1a_l_Q2wPcvNyyIl3qN_u57cvYppo';
    }
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(
          {
            email: enteredEmail, password: enteredPassword, returnSecureToken: true
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      if (res.ok) {
        if (isLogin) {
          // do something with login 
          // You can redirect or show a string message
          history.replace('/');
          setMessage('Authentication succeeded.');
        }
        else {
          history.replace('/auth');
          setMessage('Your registration completed successfully.');
        }
        setIsLoading(false);
        return res.json();
      }
      else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      const expirationTime = new Date(new Date().getTime()+ (+data.expiresIn * 1000));
      context.login(data.idToken,expirationTime.toISOString());
      console.log(data);
    }).catch((error) => {
      setIsLoading(false);
      setMessage(error.message);
    });
  }

  return (
    <section className={`${classes.auth} shadow-lg`}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {message && <h4 className='alert alert-danger fw-light'>{message}</h4>}
      <h4 className='text-light'>
        {
          isLoading && <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </h4>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
