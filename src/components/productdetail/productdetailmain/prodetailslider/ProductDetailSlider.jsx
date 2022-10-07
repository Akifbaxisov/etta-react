import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './productdetailslider.css'
import proimg1 from '../../../../images/productslider1.png'
import proimg2 from '../../../../images/productslider2.jpg'
import proimg3 from '../../../../images/productslider3.jpg'


const ProductDetailSlider = () => {
  return (
    <>
      <div className="product_slider">
        <Carousel >
          <div className='image'>
            <img className='' src={proimg1} alt="title" />
          </div>
          <div className='image'>
            <img className='' src={proimg2} alt="title" />
          </div>
          <div className='image'>
            <img className='' src={proimg3} alt="title" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default ProductDetailSlider