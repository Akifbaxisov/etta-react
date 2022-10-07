import React from 'react'
import SectionTitle from '../sectiontitle/SectionTitle'
import ProductCard from '../../productCard/ProductCard'
import { productDetail } from '../../../DataJson'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './newproduct.css'

const options = {
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 2,
      },
      400: {
          items: 2,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,

      }
  },
}

const NewProduct = () => {
  return (
    <>
      <section className='container-xl px-2 px-sm-3 pt-4 pt-md-5 pb-3 pb-md-4'>
        <SectionTitle subtitle='ƏN YENİ' title='MƏHSULLAR' />
        <div className='row mx-n1 mx-sm-n2 mx-xl-n3'>

          <OwlCarousel {...options}>
          {
            productDetail.slice(0,9).map((item) => {
              return (
                <div key={item.id} className="col-md-12 px-1 px-sm-2 px-xl-3 mb-2 mb-xl-4 pb-sm-2">
                  <ProductCard item={item} isNewProduct={true} />
                </div>
              )
            })
          }
          </OwlCarousel>
        </div>
      </section>
    </>
  )
}

export default NewProduct