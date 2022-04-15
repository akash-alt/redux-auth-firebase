import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedin = useSelector(state => state.auth.isLoggedin)
  console.log(isLoggedin)
  return (
    <div className="App">
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
