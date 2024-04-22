import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './cart.css'
import { RiCloseCircleFill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import CartItem from './CartItem/CartItem';
import { AppContext } from '../../Context/Context';
const Cart = ({setShowCart}) => {

    const {cartItems,cartSubTotal}=useContext(AppContext)

  return (
        <div className="cart_panel">
            <div className="opac_layer"></div>
            <div className="cart_content">
                <div className="cart_header">
                    <span>Shoping Cart</span>
                    <div className='close_btn'>
                    <span><RiCloseCircleFill onClick={()=>{
                        setShowCart(false)
                    }}/></span>
                        <span>Close </span>
                    </div>
                </div>
                {!cartItems?.length && (
                <div className="empty_cart">
                    <span><BiSolidError /></span>
                    <span>No Product In the Cart </span>
                    <button> <IoMdArrowRoundBack /> Back </button>
                </div>
                )}
                {!!cartItems?.length && (
                    <>
                    <CartItem />
                    <div className='cart_footer'>
                        <div className="subtotal">
                            <span>subtotal : </span>
                            <span>{cartSubTotal} MAD </span>
                        </div>
                        <div className='checkout'>
                        <button>CheckOut</button>
                        </div>
    
                    </div>
                    </>
                )}
                
            </div>
        </div>
  )
}
 export default Cart
