import React,{useContext, useState} from 'react'
import './singleProduct.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import RelatedProduct from './RelatedProduct/RelatedProduct';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { AppContext } from '../../Context/Context';
const SingleProduct = () => {
  const [quantity,setQuantity]=useState(1)

  const {id}=useParams()
  const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const {addToCart}=useContext(AppContext)

  if(!data) return <div>NO product found </div>

   const product=data.data[0].attributes



  return (
    <div className='main_singleProduct'>
      <div className="layout">
        <div className="singleProduct_content">
          <div className="left">
           <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
          </div>
          <div className="right">
           <span className='name'>{product.title}</span>
           <span className='price'>{product.price} MAD</span>
           <span className='description'>{product.desc}</span>
           <div className="cart_btns">
            <div className="counter">
              <button onClick={()=>{
                setQuantity((prevState)=>{ if(prevState ===1) return 1 ; return prevState - 1 })
              }}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>{setQuantity((prevState)=>prevState + 1)}} >+</button>
            </div>
             <button onClick={()=>{
              addToCart(data.data[0],quantity);
              setQuantity(1)
               alert('product Added')
              
              }}> <FaShoppingCart />  Add to cart </button>
           </div>
           <span className='category'>Categorie : <span style={{fontSize:"17px",fontWeight:'400'}}>{product.categories.data[0].attributes.title}</span> </span>
            <div className="social_media">
              <span>share with : </span>
            <span className='icon'><FaFacebookF /></span>
            <span  className='icon'><AiFillInstagram /></span>
            <span  className='icon'><IoLogoWhatsapp /></span>
            </div>
          </div>
        </div>
        <div className="relatedProduct">
          <RelatedProduct productId={id} categoryId={product.categories.data[0].id}/>
        </div>
      </div>
    
    </div>
  )
}

export default SingleProduct
