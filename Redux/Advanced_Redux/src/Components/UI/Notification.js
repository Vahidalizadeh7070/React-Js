const Notification = (props) =>{
    let specialClasses = '';
    if(props.status === 'error')
    {
        specialClasses= 'alert-danger';
    }
    if(props.status === 'Pending')
    {
        specialClasses= 'alert-info';
    }
    if (props.status ==='success')
    {
        specialClasses = 'alert-success';
    }
    const cssClasses = 'alert ' + specialClasses;

    return (
        <section className={`${cssClasses} mt-5 pt-4`}>
            <h2>{props.title}</h2>
            <small>{props.message}</small>
        </section>
    );
};

export default Notification;