import React from 'react'
import BiStar from '../../../../images/icon/BiStar'
import BiDashCircle from '../../../../images/icon/BiDashCircle'
import BiPlusCircle from '../../../../images/icon/BiPlusCircle'
import BiBasket from '../../../../images/icon/BiBasket'
import BiHeart from '../../../../images/icon/BiHeart'

const ProductFeatures = () => {
  return (
    <>
          <h1 className="product-title font-weight-bold mb-2">
              Bioselüloz qırışa qarşı ləkələr
          </h1>
          <div className="stars mb-3 mb-md-4">
              <BiStar/>
              <BiStar/>
              <BiStar/>
              <BiStar/>
              <BiStar/>
              <span className="h6 mb-0 ml-3 align-middle text-muted">4.4 (123 rəy)</span>
          </div>

          <p className="font-weight-bold mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus eius eligendi enim
              eveniet illo minus molestias, non obcaecati ratione?</p>
          <div className="row no-gutters align-items-center py-3 py-md-4 mb-0 mb-md-0 border-top">
              <div className="col-8 col-sm-9 col-md-8 col-lg-9 price-col">
                  <div className="media align-items-stretch">
                      <span className="discount bg-special p-2 px-md-3 mr-2 d-flex align-items-center rounded-pill font-weight-bold">
                          -30%
                      </span>
                      <div className="media-body d-flex align-items-end">
                          <div className="d-flex flex-column mr-2 mr-sm-3">
                              <del className="o1d-price text-secondary font-weight-bold d-block">12.00 ₼</del>
                              <ins className="new-price text-main d-b1ock font-weight-bold">10.00 ₼</ins>
                          </div>
                          <small className="d-block">
                              / 75 ml
                          </small>
                      </div>
                  </div>
              </div>
                <div className="col-4 col-sm-3 col-md-4 col-lg-3 ">
                    <div className="input-group bg-light rounded-pill overflow-hidden">
                        <div className="input-group-prepend">
                            <button className="btn" type="button">
                              <BiDashCircle/>
                            </button>
                        </div>
                        <input type="number" className="form-control border-0 px-0 bg-light text-center" placeholder="1" defaultValue="1" min="1"/>
                        <div className="input-group-append">
                            <button className="btn" type="button">
                                <BiPlusCircle/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          <div className="fixed-bar bg-white p-2 px-md-0 pb-md-4">
              <div className="row mx-n1 mx-sm-n2">
                  {/* <!--Birdən çox ölçü olduğu zaman bu div görsənəcək--> */}
                  <div className="px-1 px-sm-2 text-nowrap" hidden="">
                      <div className="btn-group rounded-pill bg-white shadow overflow-hidden" role="group" aria-label="sizes">

                          {/* <!--Hansı seçilsə, "bg-main" classNameı düşəcək--> */}
                          <label htmlFor="75" className="btn px-1 px-sm-2 px-md-3 m-0 border-right bg-main">
                              75 ml
                              <input type="radio" name="size" id="75" hidden=""/>
                          </label>

                          <label htmlFor="120" className="btn px-1 px-sm-2 px-md-3 m-0">
                              120 ml
                              <input type="radio" name="size" id="120" hidden=""/>
                          </label>
                      </div>
                  </div>
                  <div className="col px-1 px-sm-2 w-100">
                      <button className="btn bg-main btn-block shadow py-sm-2 rounded-pill font-weight-bold">
                          <BiBasket/>
                          Səbətə at
                      </button>
                  </div>

                   <div className="col-2 col-md-3 px-1 px-sm-2" hidden="">
                        <button className="btn btn-block py-sm-2 rounded-pill font-weight-bold shadow px-0 px-sm-2">
                          <BiHeart/>
                         {/*   <!--<svg width="20" height="20" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                          </svg>--> */}
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProductFeatures