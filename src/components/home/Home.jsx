import React from 'react'
import BestSellerProduct from './bestsellerproduct/BestSellerProduct'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import MainSlider from './mainslider/MainSlider'
import Parallax from './parallax/Parallax'
import NewProduct from './newproduct/NewProduct'
import SaleProduct from './saleproduct/SaleProduct'

const Home = () => {
  return (
    <>
    <Header/>
    <MainSlider/>
    <BestSellerProduct/>
    <SaleProduct/>
    <Parallax/>
    <NewProduct/>
    <Footer/>
    </>
  )
}

export default Home