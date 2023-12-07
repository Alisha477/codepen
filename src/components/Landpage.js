import React from 'react'
import Navbar from './Navbar'
import HackerNews from './HackerNews'
import Try from './Try'
import Carouselcode from './Carouselcode'
import Techtoolcarousel from './Techtoolcarousel';
import Footer from './Footer'


function Landpage() {
  return (
    <>
    <div className='bg-dark' style={{overflowX:"hidden"}}>
    <Navbar/>
    <Carouselcode/>
    <Try/>
    <Techtoolcarousel/>
    <Footer/>
    </div>
    </>
  )
}

export default Landpage