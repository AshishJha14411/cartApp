import { createContext, useState, useEffect } from "react";
import productList from "../data/product.json";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setcartItems] = useState([]);
  // if we have the getQuantity we get it or we return 0
  /* const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  ) */

  const getQuantity =
    cartItems.reduce((quantity, item) => item.quantity + quantity, 0)?.quantity ||
    0;

  const addToCart = (product) => {
      setcartItems((curritems) => {
            if(curritems.find(item => item.id ===product.id)==null){
                return [...curritems, {...product,quantity:1}]
            }else {
                return curritems.map(item => {
                    if(item.id ===product.id){
                        return {...item, quantity: item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
       
  };



  return (
    <CartContext.Provider
      value={{
        cartItems,
        setcartItems,
        getQuantity,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
