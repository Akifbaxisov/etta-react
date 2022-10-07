import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import PageHeader from '../pageheader/PageHeader'
import ProductsMain from './productsmain/ProductsMain'

const Products = () => {
  return (
    <>
    <Header/>
    <PageHeader title= "Kateqoriyalar üzrə" txtmain="Etta.az" itempage="Kateqoriyalar üzrə"/>
    <ProductsMain/>
    <Footer/>
    </>
  )
}

export default Products