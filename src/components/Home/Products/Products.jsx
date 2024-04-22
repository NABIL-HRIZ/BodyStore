import React from 'react'
import './products.css'
import Product from './Product/Product'

const Products = ({innerPage,headingText,products}) => {

  
  return (
    <div className='products'>
        {!innerPage && <div className="products_header">
            <h2>{headingText}</h2>
        </div>} 
        <div className="products_content">
          {products?.data?.map((item)=>(
           <Product key={item.id} id={item.id} data={item.attributes}/>

          ))}
              
        </div>
    
      
    </div>
  )
}

export default Products

