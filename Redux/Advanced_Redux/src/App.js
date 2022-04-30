
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Components/ShoppingCart/Cart';
import GameSlider from './Components/Games/GameSlider';
import Games from './Components/Games/Games';
import Headers from './Components/Layout/Header';
import Notification from './Components/UI/Notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sendCartData, fetchCartData} from './Components/Store/cart-actions'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartModalVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(()=> {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'Pending',
    //       title: 'Sending ...',
    //       message: 'Sending Cart information!'
    //     })
    //   )
    //   const response = await fetch('https://react-api-s-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed.')
    //   }
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'success',
    //       title: 'Success',
    //       message: 'Sending cart data posted successfully'
    //     })
    //   )
    // }
    
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed)
    {

      dispatch(sendCartData(cart));
    }
    // sendCartData().catch(error => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error',
      //     message: 'Sending cart data failed!'
      //   })
      // )
    // })
  }, [cart, dispatch])


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      {showCart && <Cart />}
      <Headers />
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
  )
}
export default App;
