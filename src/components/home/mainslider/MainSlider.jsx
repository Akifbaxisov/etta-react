import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './mainslider.css'
import sliderpic1 from '../../../images/mainslider.jpg'
import sliderpic2 from '../../../images/mainslider2.jpg'
import sliderpic3 from '../../../images/mainslider3.jpg'
import sliderpic4 from '../../../images/mainslider4.png'

const MainSlider = () => {
  return (
    <>
    <div className='homecarousel'>
    <Carousel infiniteLoop autoPlay>
        <div className='image'>
            <img  className='embed-responsive-item' src={sliderpic1} alt="title" />
        </div>
        <div className='image'>
            <img className='embed-responsive-item' src={sliderpic2} alt="title" />
        </div>
        <div className='image'>
            <img className='embed-responsive-item' src={sliderpic3} alt="title" />
        </div>
        <div className='image'>
            <img className='embed-responsive-item' src={sliderpic4} alt="title" />
        </div>
    </Carousel>
    </div>
    </>
  )
}

export default MainSlider