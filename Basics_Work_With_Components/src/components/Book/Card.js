function Card(props)
{
    const classes= 'bg-white ' + props.className;
    return(
        <div>
            <div className={classes}>{props.children}</div>
        </div>
    )
}

export default Card;