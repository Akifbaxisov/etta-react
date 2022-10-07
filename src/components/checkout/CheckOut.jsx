import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import PageHeader from '../pageheader/PageHeader'
import CheckOutContent from './checkoutcontent/CheckOutContent'

const CheckOut = () => {
  return (
    <>
    <Header />
    <PageHeader  title="ÖDƏNİŞ" txtmain="Etta.az" itempage="Ödəniş"/>
    <CheckOutContent />
    <Footer />
    </>
  )
}

export default CheckOut