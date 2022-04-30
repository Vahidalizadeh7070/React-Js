import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  const logoutHandler =() =>
  {
    context.logout();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className='nav-link'>
          <span className="navbar-brand">Auth</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to='/auth' className='nav-link'>Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link to='/profile' className='nav-link'>Profile</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <button className='nav-link btn' onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default MainNavigation;
