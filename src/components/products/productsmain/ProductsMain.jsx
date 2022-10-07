import React from 'react'
import CategoryName from './categoryname/CategoryName'
import ProductFilter from './productfilter/ProductFilter'
import FilterModal from './productfiltermodal/FilterModal'
import ProductItem from './productitem/ProductItem'
import ProductPagination from './productpagination/ProductPagination'

const ProductsMain = () => {
  return (
    <>
        <section className="container-xl p-2 px-sm-3 py-sm-3 py-lg-4">
            <div className="row mx-n2 mx-sm-n3">
                <div className="col-12 col-lg-9 px-2 px-sm-3 order-1">
                    <CategoryName/>
                    <div className="row mx-n1 mx-sm-n2 mx-xl-n3">
                    <ProductItem/>
                    </div>
                    <ProductPagination />
                </div>
                <div className="col-12 col-lg-3 px-2 px-sm-3 wow fadeInUp" style={{visibility: 'visible'}}>
                    <FilterModal/>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default ProductsMain