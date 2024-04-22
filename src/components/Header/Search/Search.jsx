import React, { useState } from 'react'
import './search.css'
import { IoClose } from "react-icons/io5";
import useFetch from '../../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Search = ({setShowSearch}) => {

  const navigate=useNavigate()

  const [value,setValue]=useState('')

  const onchange=(e)=>{
    setValue(e.target.value)
  }

  let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${value}`)

  if(!value.length){
    data=null
  }


  return (
    <div className='search'>
        <div className="search_header">
            <input type="text" autoFocus placeholder='search for something ? ' value={value} onChange={onchange}/>
             <span><IoClose onClick={()=>{
               setShowSearch(false)
             }} /></span>
        </div>
        <div className="search_products">
        {data?.data?.map((item)=>(
                     <div key={item.id} className="search_product_content" style={{cursor:'pointer'}} onClick={()=>{
                              navigate('/product/' + item.id)
                              setShowSearch(false)
                     }}>
             
                     <div className="img_container">
                         <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                     </div>
                     <div className="product_header">
                         <span>{item.attributes.title} </span>
                         <span>{item.attributes.desc}</span>
                         </div>
                     </div>
                     
              ))}
           
        </div>
    </div>
  )
}

export default Search
