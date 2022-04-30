import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PlatformsList from './Components/Platforms/PlatformsList';
import { Fragment, useEffect, useState, useCallback } from 'react';
import AddMovie from './Components/Platforms/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const RetrieveMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-api-s-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!!!');
      }
      const data = await response.json();

      const loadMovies = [];
      for (const key in data) {
        loadMovies.push(
          {
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          }
        );
      }

      
      setMovies(loadMovies);

    }
    catch (error) {
      setError(error.message);

    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    RetrieveMovies();
  }, [RetrieveMovies])

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-api-s-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p className='fs-4 text-center'>There is no movie in the list.</p>;
  if (isLoading) {
    content = <p className='fs-4 text-center'>Loading...</p>;
  }
  if (error) {
    content = <p className='text-danger text-center fs-4'>{error}</p>;

  }
  if (movies.length > 0) {
    content = <PlatformsList movieList={movies} />
  }
  return (
    <Fragment>
      <div className='app'>
        <div className='container'>
          <div className='col-md-8 offset-md-2'>
            <AddMovie onAddMovie={addMovieHandler} />
          </div>
          <div className='col-md-6 offset-md-3'>
            <div className='shadow bg-light rounded3'>
              <div className='p-3'>
                <button className='btn btn-primary rounded3 shadow'>Add movies</button>
                <button className='btn btn-danger rounded3 shadow' onClick={RetrieveMovies}>Fetch movies</button>
              </div>
            </div>
            <div className='shadow mt-3 bg-light rounded3'>
              <div className='p-3'>
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
