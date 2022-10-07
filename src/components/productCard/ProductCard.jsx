import React, { useState , Component } from 'react'
import BiBasket from '../../images/icon/BiBasket'
import BiHeart from '../../images/icon/BiHeart'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shoppingcard/cartSlice'
import $ from 'jquery';




const ProductCard = (props) => {

   const { id, proname, imgcover, price, previousprice, description } = props.item
   const dispatch = useDispatch()
   const {open, setOpen} = useState(false);

   const addToCart = () => {
    dispatch(cartActions.addItem({
        id,
        proname,
        imgcover,
        price
    }))
   }
 
  return (
    <>
          <div className="product item position-relative scale-on-hover bg-white rounded-lg overflow-hidden h-100 tr-3s wow fadeInUp ripple-effect" style={{ visibility: 'visible' }}>
              <Link to='/productdetail' title="title" className="d-block">
                  <div className="embed-responsive embed-responsive-4by3">
                      <img data-src="https://etta.az/storage/upload/product/1756-6051e7ba68d0f.jpg" loading="lazy" alt="title" width="285" height="215" className="embed-responsive-item contain" src={imgcover} />
                      <div className="badges w-100">
                          { props.isNewProduct && <small className="new d-inline-block bg-main py-1 px-2 py-md-2 px-md-3">Yeni</small>}
                          { props.isBestseller && <small className="best-seller d-inline-block bg-info text-white py-1 px-2 py-md-2 px-md-3">Cox Satilan</small> }
                          
                          { props.isOnsale && <small className="discount d-inline-block bg-special text-white py-1 px-2 py-md-2 px-md-3 float-right">-30%</small>}
                      </div>
                  </div>
                  <div className="row no-gutters p-2 p-sm-3">
                      <div className="col-12 col-sm-9 pr-sm-3 mb-2 mb-sm-0 d-flex align-items-center">
                          <h3 className="title line-clamp line-2 font-weight-bold text-dark text-center text-sm-left mb-0">
                              {proname}
                          </h3>
                      </div>
                      <div className="price-col col-12 col-sm-3 mb-2 mb-sm-0 d-flex align-items-center">
                          <div className="row no-gutters text-center text-sm-right w-100">

                              {/* <!--Endirimdən öncəki qiymət--> */}
                              <div className="col col-sm-12">
                                  <s className="small font-weight-bold text-secondary d-block text-nowrap">{previousprice}</s>
                              </div>

                              {/*   <!--Endirimdən sonrakı qiymət--> */}
                              <div className="col col-sm-12">
                                  <span className="h6 font-weight-bold mb-0 text-main d-block text-nowrap">{price} ₼</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 pt-lg-2">
                          <span className="description line-clamp line-2 text-muted small text-center text-sm-left">
                              {description}
                          </span>
                      </div>
                  </div>
              </Link>
              <div className="px-2 px-sm-3 mb-2 mb-sm-3 bg-white w-100 tr-3s d-flex align-items-center flex-nowrap">

                  <button  onClick={addToCart} role="button" data-toggle="modal" title="" data-target="#basket" className="add-to-card btn btn-outline-success rounded-pill w-100 tr-3s">
                      <BiBasket />
                      Səbətə at
                  </button>
                  {/*  <!--İstək siyahısına əlavə et duyməsinə basıldığı zaman aşağıdakı buttondan "text-muted" silinib "text-special"
                          classNameı düşməlidi və commentə alınan svg görsənməlidi. Digəri isə hide olunmalıdı--> */}
                  <button className="add-to-wish-list btn bg-white px-0 rounded-circle ml-2 ml-md-3 text-center text-muted" hidden="" data-toggle="tooltip" title="" data-original-title="İstək siyahısına əlavə et">
                      <BiHeart />
                  </button>
              </div>
          </div>
    </>
  )
}

export default ProductCard