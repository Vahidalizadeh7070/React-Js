
const Card = (props) => {
    return (
        <div className="row">
            <div className="mt-4">
                <div className={`${props.className} ${'bg-white'}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Card;