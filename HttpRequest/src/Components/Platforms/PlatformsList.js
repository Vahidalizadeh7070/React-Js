import React, { Fragment } from "react";

const PlatformsList = (props) => {
    return (
        <Fragment>
            <h3 className="text-dark">Movie list</h3>
            <hr />
            {props.movieList.map((movie) => (
                <div key={movie.id} className={`${movie.id % 2 ===0 ? 'bg-danger' : 'bg-warning'} row shadow m-3 rounded3  p-3 text-light`}>
                    <div className="col-8">
                        <h5 className="fw-light">{movie.title}</h5>
                        <p className="small fw-lighter">{movie.openingText}</p>
                    </div>
                    <div className="col-4">
                        <span className="badge bg-info text-dark rounded-3 shadow mt-4 float-end">{movie.releaseDate}</span>
                    </div>
                </div>
            ))}

        </Fragment>
    )
}
export default PlatformsList;