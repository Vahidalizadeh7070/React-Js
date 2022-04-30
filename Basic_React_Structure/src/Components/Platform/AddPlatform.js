import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import cardModule from '../Card/Card.module.css';
import Card from '../Card/Card';
import Button from '../Buttons/Button';
import Modal from '../Modal/Modal';


const AddPlatform = props => {
    const [platform, setPlatform] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState();


    const platformChange = (event) => {
        setPlatform(event.target.value);
    }
    const descriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const addPlatform_FormSubmition = event => {
        event.preventDefault();
        if (platform.trim().length === 0) {
            return setError({
                title: 'Invalid Platform',
                message: 'Please enter the platform'
            });
        }
        if (description.trim().length === 0) {
            return setError({
                title: 'Invalid Description',
                message: 'Please enter the description'
            });
        }
        props.onAddPlatform(platform, description);
        setPlatform('');
        setDescription('');

    };

    const confirmModal = () => {
        setError(null);
    }
    return (
        <Fragment>
            <div className='col-6'>
                {error && <Modal title={error.title} message={error.message} confirmModal={confirmModal} />}
                <Card className={cardModule.rounded3}>
                    <div className='shadow text-black'>
                        <div className='p-3'>
                            <h2 className='text-secondary'>Add platform</h2>
                            <hr />
                            <form onSubmit={addPlatform_FormSubmition}>
                                <div className='mb-3'>
                                    <label className='text-text-secondary' htmlFor='platform'>Platform</label>
                                    <input className="form-control" id='platform' type="text" value={platform} onChange={platformChange} placeholder="Enter platform name" aria-label="Enter platform name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='FormControlDescription' className="form-label">Description</label>
                                    <textarea className="form-control" value={description} onChange={descriptionChange} id="FormControlDescription" rows="3"></textarea>
                                </div>
                                <div className='mt-3 mb-3'>
                                    <Button value="Add Platform" className="btn btn-primary" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default AddPlatform;