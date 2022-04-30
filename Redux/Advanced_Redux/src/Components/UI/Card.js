import '../../App.css';

const Card = props => {
    return (
        <div className='rounded3 m-4 shadow'>
            {props.children}
        </div>
    )
}
export default Card;