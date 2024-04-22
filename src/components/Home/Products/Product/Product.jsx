import React from 'react'
import '../products.css'
import { useNavigate } from 'react-router-dom'

const Product = ({id,data}) => {
  const navigate =useNavigate()
  return (
    <div className='product'>
          <div className="product_content">
                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
                 alt=""  onClick={()=>{navigate(`/product/`+id)}}/>
                <span>{data.title}</span>
                <span> <del>{data.oldPrice} MAD </del> { data.price} MAD</span>
                </div>
      
    </div>
  )
}

export default Product
