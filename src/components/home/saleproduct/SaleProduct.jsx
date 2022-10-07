import React from 'react'
import SectionTitle from '../../home/sectiontitle/SectionTitle'
import { productDetail } from '../../../DataJson'
import ProductCard from '../../productCard/ProductCard';
const SaleProduct = () => {
  return (
    <>
      <section className='container-xl px-2 px-sm-3 pt-4 pt-md-5 pb-3 pb-md-4'>
        <SectionTitle subtitle='ENDİRİMDƏ OLAN' title='MƏHSULLAR'/>
        <div className='row mx-n1 mx-sm-n2 mx-xl-n3'>
            {

              productDetail.slice(0,3).map((item) => {
                return(
                  <div key={item.id} className="col-6 col-md-4 px-1 px-sm-2 px-xl-3 mb-2 mb-xl-4 pb-sm-2">
                  <ProductCard item={item} isOnsale = {true}/> 
                </div>
                )
              })
            }
        </div>
      </section>
    </>
  )
}

export default SaleProduct