import React from 'react'
import './footer.css'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import payement_img from '../../assets/payement.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_content">
      <div className="footer_about">
        <span>About</span>
        <span>Our mission is to empower individuals on their journey to optimal health and well-being. With a commitment to quality, integrity, and innovation, we offer a wide range of premium products carefully curated to meet diverse health needs and goals. From essential vitamins and minerals to cutting-edge sports nutrition supplements and herbal remedies, our extensive selection provides something for everyone. </span>
      </div>

      <div className="footer_contact">
        <span>Contact</span>
        <div className="contact_info">
          <span><IoLocation /> Rue 555,Rabat,Morocco</span>
          <span><FaPhoneAlt /> +212512131415</span>
          <span><MdEmail /> bodystore@gmail.com</span>
        </div>
      </div>

      <div className="footer_categories">
        <span>Category</span>
        <ul>
          <li>Protein Supplements</li>
          <li>Creatine Supplements</li>
          <li>Vitamins</li>
        </ul>
      </div>
      
      <div className='footer_pages'>
        <span>Pages</span>
        <ul>
          <li>Home</li>
          <li>About</li>
           <li>Privacy Policy</li>
           <li>Terms & Conditions</li>
           <li>Contact Us</li>
        </ul>

      </div>
      
      </div>
      <div className="footer_end">
        <span>All The right reserved@2024</span>
        <img src={payement_img} alt="" width={'150px'} />

      </div>
     
    </div>
  )
}

export default Footer
