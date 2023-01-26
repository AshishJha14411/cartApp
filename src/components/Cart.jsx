import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = ({}) => {
  const { cartItems,  decreaseFromCart,
    removeFromCart,addToCart } = useContext(CartContext);
  return (
    <div className="Cart">
      {cartItems &&
        cartItems.map((item) => {
          return (
            <div key={item.id} className="Cart-items">
              <h1 className="cart-title">{item.name}</h1>
              <p className="price">{item.price}</p>
              <div className="quantity">
                <button className="minus" onClick={() => decreaseFromCart(item.id)}>-</button>
                <p className="quanData">{item.quantity}</p>
                <button className="plus" onClick={() => {addToCart(item)}}>+</button>
              </div>
              <p className="price">{item.price * item.quantity}</p>
              <button className="removeBtn" onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
            </div>
          );
        })}
      <p className="total">
        {`Total: ${cartItems.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0)}`}
      </p>
    </div>
  );
};

export default Cart;
