import React from 'react'
import SectionTitle from '../../home/sectiontitle/SectionTitle'
import OtherProductCard from './OtherProductCard'

const OtherProduct = () => {
  return (
    <>
        <section className='new-products pt-4 pt-md-5 pb-2 pb-md-4'>
            <SectionTitle subtitle='BƏYƏNƏ BİLƏCƏYİNİZ' title='DİGƏR MƏHSULLAR' />
             <div className='container-xl px-0 px-sm-3'>
             <OtherProductCard/>
            </div>
        </section>
    </>
  )
}

export default OtherProduct