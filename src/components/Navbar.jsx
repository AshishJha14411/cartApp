import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
    <div className='Nav'>
       <Link to='/' className='link'>Home</Link>
       <Link to='/cart' className='link' >Cart<sup className='sup'>{cartItems.length}</sup></Link>
    </div> 
    </>
  )
}

export default Navbar