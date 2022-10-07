import React from 'react'
import BiBasket from '../../../../images/icon/BiBasket'
import BiFilter from '../../../../images/icon/BiFilter'

const CategoryName = () => {
  return (
    <>
        <div className="bg-white media px-3 py-2 py-md-3 mb-2 mb-sm-3 mb-lg-4 shadow-sm rounded-lg align-items-center wow fadeInUp" style={{visibility: 'visible'}}>
              <BiBasket/>
            <div className="media-body">
                <div className="media w-100 align-items-center">
                    <div className="media-body">
                        <h1 className="category-main-title h4 font-weight-bold text-main mb-1">
                              Category name
                        </h1>
                    </div>
                    <div className="btn-group d-none d-lg-block">
                        <button type="button" className="btn border bg-white font-weight-bold rounded-pill" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                            <span className="w-100">Sıralama</span>
                            <BiFilter/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right animated fadeInUp shadow-lg rounded-lg border-0 mt-4 mr-n3">
                            <button className="dropdown-item" type="button">Öncə ucuz</button>
                            <button className="dropdown-item" type="button">Öncə baha</button>
                            <button className="dropdown-item" type="button">Endirimli</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryName