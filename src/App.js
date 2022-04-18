import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.Notification)
  const cart = useSelector((state) => state.cart)
  const isLoggedin = useSelector(state => state.auth.isLoggedin)
  // console.log(isLoggedin)
  // const cartItems = useSelector((state) => state.cart.itemList)
  // console.log(cartItems)

  useEffect(() => {
    // here sending request

    const sendrequest = async () => {
      // here total 3 parameter are ther
      dispatch(uiActions.showNotificaion({
        open: true,
        message: 'Sending Request',
        type: 'warning'
      }))
      const res = await fetch('https://redux-http-72309-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      const data = await res.json() // getting succefule result
      dispatch(uiActions.showNotificaion({
        open: true,
        message: ' sending message successfully',
        type: 'warning'
      }))
    }
    sendrequest().catch((err) => {
      // getting error here err
      dispatch(uiActions.showNotificaion({
        open: true,
        message: 'Sending message Request failed',
        type: 'error'
      }))
    })
  }, [cart])
  return (
    <div className="App">
      {/* <Notification type="success" message={"this is dummy data"} /> */}
      {notification && <Notification type={notification.type} message={notification.message} />} {/* here are changing data dynamically works */}
      {!isLoggedin && <Auth />}
      {isLoggedin && <Layout />}
      {/*<Auth />*/}
      {/* <Layout /> */}
    </div>
  );
}

export default App;

//***  Note  ***//
// for login best way to use condtional statement
// it will works nicely and code is also easy to maintain
