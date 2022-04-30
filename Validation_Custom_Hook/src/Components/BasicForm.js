import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import useInputValidation from "../hooks/input-validation";

const BasicForm = (props) => {

    //First Name
    const {
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        Reset: resetFirstNameInput,
        valueChangeHandler: FirstNameChangeHandler,
        inputBlurHandler: FirstNameBlurHandler
    } = useInputValidation(value => value.trim() !== '');

    let FirstNameInputClasses = firstNameHasError ? 'form-control is-invalid' : 'form-control';
    if (firstName.length > 0) {
        FirstNameInputClasses = 'form-control is-valid';
    }

    //Last Name
    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        Reset: resetLastNameInput,
        valueChangeHandler: LastNameChangeHandler,
        inputBlurHandler: LastNameBlurHandler
    } = useInputValidation(value => value.trim() !== '');

    let LastNameInputClasses = lastNameHasError ? 'form-control is-invalid' : 'form-control';
    if (lastName.length > 0) {
        LastNameInputClasses = 'form-control is-valid';
    }

    // Email
    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        Reset: resetEmailInput,
        valueChangeHandler: EmailChangeHandler,
        inputBlurHandler: EmailBlurHandler
    } = useInputValidation(value => value.trim() !== '' && value.trim().includes('@'));

    let EmailInputClasses = emailHasError ? 'form-control is-invalid' : 'form-control';
    if (email.length > 0 && email.trim().includes('@')) {
        EmailInputClasses = 'form-control is-valid';
    }

    let formIsValid = false;
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmition = (event) => {
        event.preventDefault();

        if (email.trim() === '' || !email.includes('@') || firstName.trim() === '' || lastName.trim() === '') {
            return;
        }
        console.log(firstName + " " + lastName + "-------" + email);

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

   

    return (
        <Fragment>
            <div className="col-md-6 offset-md-3 shadow mt-5">
                <div className="p-5">
                    <h3>Validation using custom hook</h3>
                    <hr />
                    <form onSubmit={formSubmition}>
                        <div className="row">
                            <div className="col-4">
                                <input className={FirstNameInputClasses} value={firstName} onBlur={FirstNameBlurHandler} onChange={FirstNameChangeHandler} placeholder="First Name" type="text" id="firstName" />
                                {firstNameHasError && <label className="text-danger">First Name is not valid</label>}
                            </div>
                            <div className="col-4">
                                <input className={LastNameInputClasses} value={lastName} onBlur={LastNameBlurHandler} onChange={LastNameChangeHandler} placeholder="Last Name" type="text" id="lastName" />
                                {lastNameHasError && <label className="text-danger">Last Name is not valid</label>}
                            </div>
                            <div className="col-4">
                                <input className={EmailInputClasses} value={email} onBlur={EmailBlurHandler} onChange={EmailChangeHandler} placeholder="example@example.com" type="text" id="email" />
                                {emailHasError && <label className="text-danger">Email is not valid</label>}
                            </div>
                            <div className="col-md-12 pt-5">
                                <button className="btn btn-primary btn-sm rounded-3 shadow float-end" type="submit" disabled={!formIsValid}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default BasicForm;