import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layout/Header';
import Games from './Components/Games/Games';
import GameSlider from './Components/Games/GameSlider';
import { Fragment, useState } from 'react';
import Cart from './Components/ShoppingCart/Cart';
import CartProvider from './Store/CartProvider';


function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <Fragment>
        {showCart && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <div className='container-fluid'>
          <div className='row m-top'>
            <div className='col-md-6'>
              <GameSlider />
            </div>
            <div className='col-md-6'>
              <Games />
            </div>
          </div>
        </div>
      </Fragment>
    </CartProvider>
  );
}

export default App;
