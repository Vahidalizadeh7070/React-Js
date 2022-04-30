function Date_Component(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div>
            <label className='text-light border border-2 border-danger rounded-3 col-md-5 col-lg-3 col-8 p-3'>
                <p className='small text-danger fs-6'>{month}</p>
                <p className='small text-danger fs-6'>{day}</p>
                <p className='small text-danger fs-6'>{year}</p>
            </label>
        </div>
    )
}

export default Date_Component;