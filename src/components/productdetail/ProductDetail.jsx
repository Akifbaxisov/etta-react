import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import BreadCrumb from './breadcrumb/BreadCrumb'
import OtherProduct from './otherproducts/OtherProduct'
import ProductDetailMain from './productdetailmain/ProductDetailMain'
import CustomerReview from './customerreview/CustomerReview'


const ProductDetail = () => {
  return (
    <>
    <Header/>
    <BreadCrumb/>
    <ProductDetailMain/>
    <OtherProduct/>
    <CustomerReview/>
    <Footer/>
    </>
  )
}

export default ProductDetail