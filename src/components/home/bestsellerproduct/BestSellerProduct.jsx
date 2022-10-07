import React from 'react'
import { productDetail } from '../../../DataJson'
import SectionTitle from '../sectiontitle/SectionTitle'
import ProductCard from '../../productCard/ProductCard'

const BestSellerProduct = () => {
  return (
    <>
      <section className='container-xl px-2 px-sm-3 pt-4 pt-md-5 pb-3 pb-md-4'>
        <SectionTitle subtitle='ƏN ÇOX SATILAN' title='MƏHSULLAR'/>
        <div className='row mx-n1 mx-sm-n2 mx-xl-n3'>
            {

              productDetail.slice(0,6).map((item) => {
                return(
                  <div key={item.id} className="col-6 col-md-4 px-1 px-sm-2 px-xl-3 mb-2 mb-xl-4 pb-sm-2">
                  <ProductCard item={item} isBestseller = {true}/> 
                </div>
                )
              })
            }
        </div>
      </section>
    </>
  )
}

export default BestSellerProduct