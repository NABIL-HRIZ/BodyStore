import React from 'react'
import Products from '../../Home/Products/Products'
import useFetch from '../../../Hooks/useFetch'

const RelatedProduct = ({productId,categoryId}) => {
  const { data } = useFetch(`/api/products?populate=*&filters[categories][id]=${categoryId}
  &filters[id][$ne]=${productId}&_limit=4`);

  return (
    <div className='related_product'>
        <Products headingText='Related_Products' products={data}/>
    </div>
  )
}

export default RelatedProduct
