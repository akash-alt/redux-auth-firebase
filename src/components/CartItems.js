import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>

        {/*{
          cartItems.map((item) => (
            <li>
              <CartItem id={item.id} />
            </li>
          ))
        } */}
        <CartItem id={1} name={'macbook'} />
      </ul>
    </div>
  );
};

export default CartItems;



