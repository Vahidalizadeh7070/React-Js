import React, { useRef } from "react";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = (props) => {
    const titleRef = useRef('');
    const openingRef = useRef('');
    const releaseDateRef = useRef('');

    const submitForm = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingRef.current.value,
            releaseDate: releaseDateRef.current.value
        };

        props.onAddMovie(movie);
    }
    return (
        <div className="shadow bg-white rounded3 mb-5">
            <div className="p-3">
                <h3 className="fw-light text-secondary">Add a movie</h3>
                <hr/>
                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="col-4">
                            <label>Title</label>
                            <input type="text" className="form-control rounded3" ref={titleRef} />
                        </div>
                        <div className="col-4">
                            <label>Opening Text</label>
                            <input type="text" className="form-control rounded3" ref={openingRef} />
                        </div>
                        <div className="col-4">
                            <label>Release Date</label>
                            <input type="date" className="form-control rounded3" ref={releaseDateRef} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4 float-end ">
                        <button className="btn btn-primary rounded3 shadow">+ Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    )
}

export default AddMovie;