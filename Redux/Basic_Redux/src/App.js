import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import Navbar from './Navbar/Navbar';
import Login from './Users/Login';

function App() {
  const isAuth = useSelector(state => state.authentication.isAuthenticated);
  return (
    <Fragment>
      <Navbar />
      {!isAuth && <Login />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
