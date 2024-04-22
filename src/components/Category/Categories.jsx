import React from 'react'
import './categories.css'
import Products from '../Home/Products/Products'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
const Categories = () => {
  const { id } = useParams()
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
  return (
    <div className='main_categories' >
      <div className="layout">
        <div className="categories_title">
          <h2>{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</h2>
        </div>
        <div className="categories_content">
          <Products innerPage={true} products={data} />
        </div>
      </div>
    </div>
  )
}

export default Categories

