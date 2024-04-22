import React, {  useContext, useEffect } from 'react'
import './home.css'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from './Products/Products'
import fetchData from '../../Context/api'
import { AppContext } from '../../Context/Context'
const Home = () => {

  const {products,setProducts,categories,setCategories}=useContext(AppContext)
  useEffect(()=>{
   getCategories()
   getProducts()
  }, []);
 
  const getProducts=()=>{
    fetchData("/api/products?populate=*").then((res)=>{
      console.log(res) 
      setProducts(res)});
  };
  const getCategories=()=>{
    fetchData("/api/categories?populate=*").then((res)=>{
      console.log(res);
      setCategories(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
         <Category categories={categories}/>
         <Products headingText='Populer_Products' products={products} />
        </div>
      </div>
       
    </div>
  )
}

export default Home
