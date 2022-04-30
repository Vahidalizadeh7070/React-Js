import '../../Bootstrap/css/bootstrap.css';
import '../../CSS/BookItem.css';
import Date_Component from '../Book/Date_Components';
import Card from '../Book/Card';

function BookItem(props) {
    return (
        <div>
            <Card className="shadow border border-2 rounded-3 mb-3">
                <div className='row'>
                    <div className="col-12">
                        <div className='p-3'>
                            <div className='text-black'>{props.bookName}</div>
                            <div className='text-secondary small lh-sm'>{props.author}</div>
                            <div className='small text-muted row align-items-center'>
                                <div className='col-6 pt-3'>
                                    <Date_Component date={props.date}/>
                                </div>
                                <div className='col-6'>
                                    <label className='border boder-2 rounded-3 bg-primary shadow float-end'>
                                        <span className='p-3 text-light'> $ {props.amount}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BookItem;