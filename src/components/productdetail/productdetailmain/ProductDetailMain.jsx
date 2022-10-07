import React from 'react'
import ProAccordion from './accordion/ProAccordion'
import ProductDetailSlider from './prodetailslider/ProductDetailSlider'
import ProductFeatures from './productfeatures/ProductFeatures'

const ProductDetailMain = () => {
  return (
    <>
        <section className="container-xl p-2 px-sm-3 py-sm-3 pb-lg-0 pt-lg-4">
            <div className="product detail bg-white shadow-sm rounded-lg">
                <div className="row no-gutters">
                    <div className="col-12 col-md-5 px-3 pt-3 px-sm-4 pt-sm-4 pl-md-5 pr-md-0 py-md-5">
                        <div className="pb-2 w-100 sticky-top top-h15">
                            <ProductDetailSlider/>
                         </div>   
                    </div>   
                    <div className="col-12 col-md-7 p-3 p-sm-4 p-md-5">
                        <ProductFeatures/>
                        <ProAccordion/>
                    </div>     
                </div>
            </div>
        </section>    
    </>
  )
}

export default ProductDetailMain