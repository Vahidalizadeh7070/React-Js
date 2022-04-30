import { useState } from 'react';
import './App.css';
import './Bootstrap/css/bootstrap.css';
import AddBook from './components/Book/AddBook';
import Book from './components/Book/Book';
import Card from './components/Book/Card';
import bootstrap from 'bootstrap';

const Initial_Data = [
  {
    id: 'Book_01',
    bookName: 'The Ego and the Id',
    date: new Date(2021, 1, 14),
    author: 'Sigmund Freud',
    amount: 55.49
  },
  {
    id: 'Book_02',
    bookName: 'The interpret of dreams',
    date: new Date(2022, 2, 25),
    author: 'Sigmund Freud',
    amount: 49.99
  },
  {
    id: 'Book_03',
    bookName: 'Understanding Human Nature',
    date: new Date(2020, 7, 12),
    author: 'Alfred Adler',
    amount: 35.23
  },
];

function App() {
  const [bookList, setBookList] = useState(Initial_Data);
  const onsaveFromForm = (data) => {
    setBookList((book) => {
      return [data, ...book];
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='p-3'>
            <div className='text-center pb-3'>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddBook" aria-expanded="false" aria-controls="collapseAddBook">
                Add book
              </button>
            </div>
            <div className='text-center pb-3 collapse' id="collapseAddBook">
              <AddBook onSaveDataFromForm={onsaveFromForm} />
            </div>
            <Card className='p-5 rounded-3'>
              <Book item={bookList} />
            </Card>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
