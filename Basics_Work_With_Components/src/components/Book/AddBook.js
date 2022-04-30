import '../../Bootstrap/css/bootstrap.css';
import BookForm from "../Book/BookForm";
const AddBook = (props) => {
    const saveData = (data) => {
        const info = {
            ...data,
            id: Math.random().toString()
        }
        props.onSaveDataFromForm(info);
    }
    return (
        <div className='bg-dark shadow rounded-3'>
            <h3 className='text-light text-center pt-5'>Add new book</h3>
            <hr />
            <div className='p-3'>
                <BookForm onSaveData={saveData} />
            </div>
        </div>
    )
}
export default AddBook;