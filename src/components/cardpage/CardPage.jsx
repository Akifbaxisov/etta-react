import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import PageHeader from "../pageheader/PageHeader"
import CardPageContent from "./cardpagecontent/CardPageContent"

const CardPage = () =>{

    return(
        <>
        <Header />
        <PageHeader  title="SƏBƏTİ"  txtmain="Etta.az" itempage="Səbətim"/>
        <CardPageContent />
        <Footer />
        </>
    )

}

export default CardPage