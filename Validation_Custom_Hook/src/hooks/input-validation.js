import { useState } from "react";

const useInputValidation = (validationValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validationValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const Reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,isValid: valueIsValid, hasError,valueChangeHandler,inputBlurHandler,Reset
    };
};
export default useInputValidation;

