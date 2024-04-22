import React, { useState } from 'react'
import './about.css'
import { AboutPic } from './AboutPic'
import { BsCaretRightSquareFill } from "react-icons/bs";
import { BsCaretLeftSquareFill } from "react-icons/bs";
const About = () => {
    const [selected,setSelected]=useState(0)
    const t_length=AboutPic.length
  return (
    <div className='About'>
        <div className='About_main'>
            <div  className='about_img'>
            <img src={AboutPic[selected].image} alt="" />  
            <div className='icons'>
         <span><BsCaretLeftSquareFill onClick={()=>{
          selected===0 ? setSelected(t_length - 1 ) : setSelected((prev)=>prev - 1 )
         }} /></span>
         <span><BsCaretRightSquareFill onClick={()=>{
          selected===t_length-1 ? setSelected(0) : setSelected((prev)=>prev + 1)
         }}/></span>
         </div>  
             </div>
            
            
            <div className='about_desc'>
                <span>About Us</span>
                <p>Welcome to our store ! , we're passionate about helping you achieve your health and fitness goals.

Our mission is to provide you with high-quality supplements to support your fitness journey. Whether you're looking to build muscle, improve endurance, or enhance overall wellness, we've got you covered.
We specialize in offering a wide range of products, including protein supplements, creatine formulas, and essential vitamins. Each product is carefully selected to meet your nutritional needs and help you perform at your best.
Our team is comprised of experienced fitness enthusiasts who are dedicated to providing expert advice and personalized recommendations. We're here to support you every step of the way, from selecting the right products to reaching your fitness goals.
Thank you for choosing us as your trusted partner in health and fitness. We're excited to be part of your journey to a stronger, healthier you!</p>

            </div>

        </div>
      
    </div>
  )
}

export default About