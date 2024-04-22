import React, { useState, useEffect, useContext } from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import Category from '../Home/Category/Category';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useContext(AppContext)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className='header_contents'>
          <ul className='left'>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li>Categories</li>
          </ul>
        </div>
        <div className="header_title">
          <h1><span><GiMuscleUp /> </span><span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>BodyStore </span><span><GiMuscleUp /></span></h1>
        </div>
        <div className="header_icons">
          <FaSearch onClick={() => {
            setShowSearch(true)
          }} />
          <FaRegHeart />
          <IoCartOutline onClick={() => {
            setShowCart(true)
          }} />
          {!!cartCount && (
            <div className="cart_icon_count">{cartCount}</div>
          )}
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>

  )
}

export default Header
