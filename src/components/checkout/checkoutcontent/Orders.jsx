import React from 'react'
import ordersimg from '../../../images/ordersimg.png'
import { Link } from 'react-router-dom'
import ProductDetail from '../../productdetail/ProductDetail'
import BiBasket from '../../../images/icon/BiBasket'

const Orders = () => {
  return (
    <>
      <div className="rounded-lg bg-white mb-2 mb-sm-3 mb-lg-0">
        <h2 className="h4 p-3 p-md-4 m-0 font-weight-bold">Sifarişlər</h2>
        {/* <!-- Cart List --> */}
        <div className="basket-list border-top">
          <div className="list-item row no-gutters border-bottom py-3">
            {/* <!-- Product Image --> */}
            <div className="col-3 pl-3 pl-md-4">
              <div className="embed-responsive embed-responsive-1by1 rounded-circle bg-white shadow-sm">
                <img src={ordersimg} alt="Kofe skrab Mandarin" className="embed-responsive-item p-1 rounded-circle" />
              </div>
            </div>
            {/* <!-- End Product Image --> */}
            {/* <!-- Product Info --> */}
            <div>
              <div>
                <div>
                  <Link to="/productdetail" title="Kofe skrab Mandarin" className="h6 font-weight-bold mb-2 line-clamp line-1 text-dark w-100">
                    Kofe skrab Mandarin
                  </Link>
                  <span className="h6 mb-2 text-main text-nowrap">32 ₼</span>
                </div>
                <div className="d-flex w-100 pr-md-1">
                  <div className="d-flex w-100 font-weight-bold">
                    <small className="text-secondary text-nowrap d-flex align-items-center">
                      1 x
                    </small>
                    <small className="text-secondary pl-3 text-nowrap d-flex align-items-center w-100">
                      250 qr
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Product Info --> */}
          </div>
        </div>
        {/* <!-- End Cart List --> */}
        <div className="px-3 py-2 px-md-4 pt-md-2 pb-md-4">
          {/* <!-- Total Price --> */}
          <div className="row no-gutters">
            <div className="col-6 py-1 font-weight-bold">Ümumi məbləğ</div>
            <div className="col-6 py-1 text-right">32 ₼</div>
          </div>
          {/* <!-- End Total Price --> */}
          {/* <!-- Discount Interest --> */}
          <div className="row no-gutters py-2">
            <div className="col-6 py-1 font-weight-bold">Endirim</div>
            <div className="col-6 py-1 text-right">0 ₼</div>
          </div>
          {/* <!-- End Discount Interest --> */}
          <div className="row no-gutters py-2">
            <div className="col-6 py-1 font-weight-bold">Çatdırılma</div>
            <div className="col-6 py-1 text-right" id="deliverypricediv">0 ₼</div>
          </div>
          <div className="row no-gutters py-2 mb-2 border-top">
            <div className="col-6 py-1 font-weight-bold">Yekun məbləğ</div>
            <div className="col-6 py-1 text-right" id="lastpricediv">32 ₼</div>
          </div>
          <button type="submit" className="add-to-card btn btn-outline-success rounded-pill w-100 tr-3s has-ripple">
            <BiBasket />
            Sifarişi tamamla
          </button>
        </div>
      </div>
    
    </>
  )
}

export default Orders