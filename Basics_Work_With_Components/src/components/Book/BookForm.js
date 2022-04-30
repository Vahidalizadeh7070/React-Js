import React, { useState } from 'react';
import '../../Bootstrap/css/bootstrap.css';

const BookForm = (props) => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const HandleSubmitValue = (event) => {
        event.preventDefault();
        const bookData = {
            bookName: name,
            author: author,
            date: new Date(date),
            amount: amount
        };

        setName('');
        setAuthor('');
        setDate('');
        setAmount('');
        props.onSaveData(bookData);
    }
    return (
        <div>
            <form onSubmit={HandleSubmitValue}>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <label className='text-light'>Book name</label>
                            <input type="text" value={name} className='form-control' onChange={nameChangeHandler} />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <label className='text-light'>Author</label>
                            <input type="text" value={author} className='form-control' onChange={authorChangeHandler} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <label className='text-light'>Date</label>
                            <input type="date" value={date} className='form-control' onChange={dateChangeHandler} />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <label className='text-light'>Amount</label>
                            <input type="number" value={amount} min='1' max='200' className='form-control' onChange={amountChangeHandler} />
                        </div>
                    </div>
                </div>
                <div className='row pb-5 pt-3'>
                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary float-end'>Save</button>
                        <button className="btn btn-danger float-end mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddBook" aria-expanded="false" aria-controls="collapseAddBook">
                            close
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default BookForm;