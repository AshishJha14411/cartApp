import { createContext, useState, useEffect } from "react";
import productList from "../data/product.json";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setcartItems] = useState([]);
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
  const decreaseFromCart = (id) => {
    setcartItems((curritems) => {
      if (curritems.find((item) => item.id === id)?.quantity == 1) {
        return curritems.filter((item) => item.id !== id);
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setcartItems((curritems) => {
      return curritems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setcartItems,
        getQuantity,
        addToCart,
        decreaseFromCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
