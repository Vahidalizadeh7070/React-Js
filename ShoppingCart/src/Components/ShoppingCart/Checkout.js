import { Fragment, useRef, useState } from "react"

const isEmpty= value => value.trim() ==='';
const isFiveChars= value => value.trim().lenght ===5;
const Checkout = props => {
const [formInputValidity,setFormInputValidity] = useState({
    fullName : true,
    Address : true,
    phoneNumber : true,
    postalCode : true
});

    const FullNameRef= useRef();
    const AddressRef= useRef();
    const PhoneNumberRef= useRef();
    const PostalCodeRef= useRef();

    const onSubmitHandler = event => {
        event.preventDefault();

        const enteredFullName=FullNameRef.current.value;
        const enteredAddress=AddressRef.current.value;
        const enteredPhoneNumber=PhoneNumberRef.current.value;
        const enteredPostalCode=PostalCodeRef.current.value;

        const enteredFullNameValid = !isEmpty(enteredFullName);
        const enteredAddressValid = !isEmpty(enteredAddress);
        const enteredPhoneNumberValid = !isEmpty(enteredPhoneNumber);
        const enteredPostalCodeValid = isFiveChars(enteredPostalCode);

        setFormInputValidity({
            fullName:enteredFullNameValid,
            Address:enteredAddressValid,
            phoneNumber:enteredPhoneNumberValid,
            postalCode: enteredPostalCode
        }) 

        const formIsValid = enteredFullNameValid && enteredAddressValid && enteredPhoneNumberValid && enteredPostalCodeValid;
        if(!formIsValid)
        {

        }

        props.onConfirm({
            fullName: enteredFullName,
            Address: enteredAddress,
            phoneNumber:enteredPhoneNumber,
            postalCode:enteredPostalCode
        })
    }

    const fullNameClassControl= formInputValidity.fullName ? "form-control" : 'form-control is-invalid';
    const addressClassControl = formInputValidity.Address ? "form-control" : 'form-control is-invalid';
    const phoneNumberClassControl = formInputValidity.phoneNumber ? "form-control" : 'form-control is-invalid';
    const postalCodeClassControl = formInputValidity.postalCode ? "form-control" : 'form-control is-invalid';
    return (
        <Fragment>
              <div >
                <form onSubmit={onSubmitHandler}>
                    <h5 className="text-black">Checkout</h5>
                    <hr />
                    <div className="row">
                        <div className="col-6 pb-3">
                            <input className={fullNameClassControl} type="text" placeholder="FullName" ref={FullNameRef}/>
                            {!formInputValidity.fullName && <p className="text-danger">FullName is not valid</p>}
                        </div>
                        <div className="col-6 pb-3">
                            <input className={addressClassControl} type="text" placeholder="Address" ref={AddressRef}/>
                            {!formInputValidity.Address && <p className="text-danger">Address is not valid</p>}
                        </div>
                        <div className="col-6 pb-3">
                            <input className={phoneNumberClassControl} type="text" placeholder="Phone Number" ref={PhoneNumberRef}/>
                            {!formInputValidity.phoneNumber && <p className="text-danger">Phone number is not valid</p>}
                        </div>
                        <div className="col-6 pb-3">
                            <input className={postalCodeClassControl} type="text" placeholder="Postal Code" ref={PostalCodeRef}/>
                            {!formInputValidity.postalCode && <p className="text-danger">Postal code is not valid</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="p-3">
                            <button className="btn btn-primary rounded3 shadow">Checkout</button>
                            <button className="btn btn-danger rounded3 shadow" onClick={props.onClose} type="button">Cancle</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Checkout;