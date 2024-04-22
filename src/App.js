import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NewSletter from './components/NewSletter/NewSletter'
import AppProvider from './Context/Context'
import Categories from './components/Category/Categories'
import About from './components/About/About'

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:id' element={<Categories />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <NewSletter />
        <Footer />
      </AppProvider>

    </BrowserRouter>
  )
}

export default App
