import React from 'react'
import './banner.css'
import img from '../../../assets/protein_home.jpg'
const Banner = () => {
  return (
    <div className='banner'>
      <div className="left_banner">
           <span>Sales</span>
           <span>In today's health-conscious society, dietary supplements have become increasingly popular as people strive to optimize their nutrition and well-being. From vitamins and minerals to herbal extracts and protein powders, supplements offer a convenient way to fill potential nutrient gaps and support overall health. Whether seeking to enhance athletic performance, boost immunity, or address specific health concerns, supplements provide a wide range of options to suit individual needs. However, it's important to approach supplementation with caution and awareness, as they are meant to complement, not replace, a balanced diet and healthy lifestyle. Consulting with a healthcare professional or registered dietitian can help ensure that supplements are used effectively and safely, taking into account individual health goals and considerations.</span>
           <div className='banner_btns'>
            <button className='active_btn'>Read More</button>
            <button>Shop Now </button>

           </div>
      </div>
      <div className="right_banner">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Banner
