
import React from 'react'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import PageHeader from '../../pageheader/PageHeader'
import BlogDetailContent from './BlogDetailContent'

const BlogDetail = () => {
  return (
    <>
    <Header />
    <PageHeader title="BLOG DETAIl"  txtmain="Etta.az" itempage="Blog"/>
    <BlogDetailContent />
    <Footer/>
    </>
  )
}

export default BlogDetail