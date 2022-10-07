import React from 'react'
import { Link } from 'react-router-dom'
import { productDetail } from '../../../../DataJson'
import Button from '../../../button/Button'


const ProductItem = () => {
  return (
    <>
    {productDetail.slice(0,9).map((value) => {
        return (
            <>
                <div className="col-6 col-md-4 col-lg-4 px-1 px-sm-2 px-xl-3 mb-2 mb-xl-4 pb-sm-2">
                    <div className="product item position-relative scale-on-hover bg-white rounded-lg overflow-hidden h-100 tr-3s wow fadeInUp ripple-effect" style={{visibility: 'visible'}}>
                        <Link to='/productdetail' title="title" className="d-block">
                            <div className="embed-responsive embed-responsive-4by3">
                                <img data-src="https://etta.az/storage/upload/product/1756-6051e7ba68d0f.jpg" loading="lazy" alt="title" width="285" height="215" className="embed-responsive-item contain" src={value.imgcover} />
                                <div className="badges w-100">
                                    <small className="new d-inline-block bg-main py-1 px-2 py-md-2 px-md-3">{value.new}</small>
                                    <small className="best-seller d-inline-block bg-info text-white py-1 px-2 py-md-2 px-md-3">{value.bestseller}</small>
                                    <small className="discount d-inline-block bg-special text-white py-1 px-2 py-md-2 px-md-3 float-right">{value.sale}</small>
                                </div>
                            </div>
                            <div className="row no-gutters p-2 p-sm-3">
                                <div className="col-12 col-sm-9 pr-sm-3 mb-2 mb-sm-0 d-flex align-items-center">
                                    <h3 className="title line-clamp line-2 font-weight-bold text-dark text-center text-sm-left mb-0">
                                        {value.proname}
                                    </h3>
                                </div>
                                <div className="price-col col-12 col-sm-3 mb-2 mb-sm-0 d-flex align-items-center">
                                    <div className="row no-gutters text-center text-sm-right w-100">
                                        {/*  <!--Endirimdən öncəki qiymət--> */}
                                        <div className="col col-sm-12">
                                            <s className="small font-weight-bold text-secondary d-block text-nowrap">{value.previousprice}</s>
                                        </div>
                                        {/* <!--Endirimdən sonrakı qiymət--> */}
                                        <div className="col col-sm-12">
                                            <span className="h6 font-weight-bold mb-0 text-main d-block text-nowrap">{value.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-lg-2">
                                    <span className="description line-clamp line-2 text-muted small text-center text-sm-left">
                                        {value.description}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className="px-2 px-sm-3 mb-2 mb-sm-3 bg-white w-100 tr-3s d-flex align-items-center flex-nowrap">
                            <Button/>
                            {/*<!--İstək siyahısına əlavə et duyməsinə basıldığı zaman aşağıdakı buttondan "text-muted" silinib "text-special"
                             classNameı düşməlidi və commentə alınan svg görsənməlidi. Digəri isə hide olunmalıdı-->*/}

                        </div>
                    </div>
                </div>
            </>
        )
    })}
    </>
  )
}

export default ProductItem