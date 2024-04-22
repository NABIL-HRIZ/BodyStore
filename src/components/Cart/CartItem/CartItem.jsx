import React, { useContext } from 'react'
import './cartItem.css'
import { IoClose } from "react-icons/io5";
import { AppContext } from '../../../Context/Context';
const CartItem = () => {
    const {cartItems,removeFromCart,handleCartProductQuantity}=useContext(AppContext)
  return (
    <div className='cart_products'>
        {cartItems.map((item)=>(
             <div key={item.id} className="cart_product">
             <div className="img_container">
                 <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
             </div>
             <div className="product_details">
                 <div className="product_header">
                 <span>{item.attributes.title} <IoClose onClick={()=>removeFromCart(item)} style={{cursor:'pointer'}} /></span>
                 </div>
                 <div className="cart_middle">
                 <div className="quantity">
                     <button onClick={()=>handleCartProductQuantity('dec',item)}>-</button>
                     <span>{item.attributes.quantity}</span>
                     <button onClick={()=>handleCartProductQuantity('inc',item)}>+</button>
                 </div>
                 <div className="text">
                     <span>{item.attributes.quantity}</span>
                     <span>=</span>
                     <span>{item.attributes.price * item.attributes.quantity} MAD</span>
                 </div>
                 </div>
                
                
             </div>
 
         </div>
 
         
        ))}
       
      
    </div>
  )
}

export default CartItem
