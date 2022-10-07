import React from 'react'
import SectionTitle from '../../home/sectiontitle/SectionTitle'
import BlogCard from '../blogcard/BlogCard'
import PaginatedItems from '../pagination/PaginatedItems'

const BlogMain = () => {
  return (
    <>
    <section className='container-xl px-2 px-sm-3 py-4 py-lg-5'>
        <SectionTitle subtitle="Shopping ilə bağlı" title="Maraqlı məqalələr"/>
        <p className="text-dark mb-0 mt-2 text-center mb-4 mb-md-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum excepturi, id odit quo.
        </p>
        <div className='row mx-n1 mx-sm-n2 mx-xl-n3'>
            <BlogCard/>
        </div>
        <PaginatedItems/>
    </section>
    </>
  )
}

export default BlogMain