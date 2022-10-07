import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import PageHeader from '../pageheader/PageHeader'
import BlogMain from './blogmain/BlogMain'

const Blog = () => {
  return (
    <>
    <Header/>
    <PageHeader title="BLOG"  txtmain="Etta.az" itempage="Blog"/>
    <BlogMain/>
    <Footer/>
    </>
  )
}

export default Blog