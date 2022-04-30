import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const context = useContext(AuthContext);
  const history = useHistory();
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // Add validation 

    // fetch data
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyArUT1a_l_Q2wPcvNyyIl3qN_u57cvYppo', {
      method: 'POST',
      body: JSON.stringify({
        idToken: context.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/auth')
    })
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='4' required ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
