import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/MainLayout'
import About from './Pages/AboutUsPage'
import Blog from './Pages/BlogPage'
import Contact from './Pages/ContactPage'
import Home from './Pages/HomePage'
import Portfolio from './Pages/PortfolioPage'
import Services from './Pages/ServicesPage'
import Testimonials from './Pages/TestimonialsPage'
import AddPage from './Pages/AddPage'
import Detail from './Pages/DetailPage'
import { WishlistContext } from './context/WishlistContext'
import WhislistPage from './Pages/WishlistPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/testimonials' element={<Testimonials/>}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
          <Route path='wishlist' element={<WhislistPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
