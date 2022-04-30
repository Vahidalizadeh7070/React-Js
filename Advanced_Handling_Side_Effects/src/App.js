import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Components/Navbar/Navbar';
import { Fragment, useContext, useEffect, useState } from 'react';
import Login from './Components/Users/Login';
import AuthContext from './store/auth-context';

function App() {
  const context=useContext(AuthContext);
  // const [isloggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState('');
  // useEffect(() => {
  //   const localinfo = localStorage.getItem('isLoggedIn');
  //   if (localinfo != null) {
  //     setUser(localinfo);
  //     setIsLoggedIn(true);
  //   }
  // }, [])

  // const logout = (logout) => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // }

  // const loginHandler = (user, password) => {
  //   localStorage.setItem('isLoggedIn', user);
  //   setUser(user);
  //   setIsLoggedIn(true);
  // }

  return (
   <Fragment>
      <div className="App">
          <Navbar />
          {!context.isLoggedIn && <Login />}
        </div>
    </Fragment>
  );
}

export default App;
