import React, {useContext} from 'react'
import productList from '../data/product.json'
import { CartContext } from '../context/CartContext';
const Card = () => {
    
const {addToCart} = useContext(CartContext)
  return (
    <div className="Card">
    {productList && productList.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.imgUrl} alt="product-img" />
          <p className='title'>{item.name}</p>
          <p className='pricetag'>Price: {item.price}</p>
          <button className='addbtn'
          onClick={() => {addToCart(item)}}
          >Add to Cart</button>
        </div>
      );
    })}
  </div>
  )
}

export default Card