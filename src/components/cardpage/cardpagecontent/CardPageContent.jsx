import React from 'react'
import { Link } from 'react-router-dom'
import BiDashCircle from '../../../images/icon/BiDashCircle'
import BiPlusCircle from '../../../images/icon/BiPlusCircle'
import BixCircle from '../../../images/icon/BixCircle'
import ordersimg from '../../../images/ordersimg.png'

const CardPageContent = () => {
  return (
    <>
          <section className="container-xl px-2 px-sm-3 py-2 py-sm-3 py-lg-4">
              <div className="rounded-lg bg-white p-3 p-md-4">

                  <h2 className="h4 mb-3 mb-md-4 font-weight-bold">Seçilən məhsullar</h2>

                  <div className="table-responsive d-none d-md-block">

                      <table className="table table-bordered m-0">
                          <thead className="text-uppercase">
                              <tr>
                                  <th colSpan="2">Məhsulun adı</th>
                                  <th>QİYMƏTİ</th>
                                  <th>SAYI</th>
                                  <th colSpan="2">CƏMİ</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="align-middle" style={{minWidth: "100px"}}>
                                      <div className="embed-responsive embed-responsive-1by1 rounded-circle bg-white shadow-sm">
                                          <Link to="/productdetail"> 
                                          <img src={ordersimg} alt="Kofe skrab Mandarin" className="embed-responsive-item p-1 rounded-circle" />
                                          </Link>
                                      </div>
                                  </td>
                                  <td className="align-middle" style={{minWidth: "400px"}}>
                                      <strong>
                                          <Link to="/productdetail">Kofe skrab Mandarin</Link>
                                      </strong> 
                                      (250 qr)
                                  </td>
                                  <td className="align-middle" style={{minWidth: "120px"}}>
                                      <del> 35.00 ₼</del>
                                      <br/>
                                      <ins className="h5 m-0 text-main font-weight-bold">
                                      32 ₼
                                      </ins>
                                  </td>
                                  <td className="align-middle" style={{minWidth: "120px"}}>
                                      <div className="input-group align-items-center">
                                          <div className="input-group-prepend cursor-pointer">
                                              <button type="button" className="btn add_minus" id="1503-430">
                                                  <BiDashCircle />
                                              </button>
                                          </div>
                                          <input type="text" className="form-control mx-1 rounded-pill text-center" placeholder="2" aria-label="Count" name="qty-1503-430" id="qty-1503-430" value=""  min="1" />
                                              <div className="input-group-prepend cursor-pointer">
                                                  <button type="button" className="btn add_plus" id="1503-430">
                                                    <BiPlusCircle />
                                                  </button>
                                              </div>
                                      </div>
                                  </td>
                                  <td className="align-middle">
                                      <ins className="h4 m-0 text-main font-weight-bold text-nowrap" id="ttl-1503-430">
                                          64 ₼
                                      </ins>
                                  </td>
                                  <td className="align-middle">
                                      <form action='' method="post">
                                          <input type="hidden" name="_token" value="" />                                
                                          <button type="submit" className="btn">
                                              <span className="p-2 cursor-pointer" data-toggle="tooltip" data-placement="top" title="Sil">
                                                 <BixCircle />
                                              </span>
                                          </button>
                                      </form>
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot>
                              <tr>
                                  <td colSpan="3" className="align-middle" style={{border: "0px"}}>
                                      <div className="row no-gutters mx-n1">
                                          <div className="col-6 px-2">
                                              <label htmlFor="discount-code" className="pl-2">Endirim kodu / Ulduzum kodu</label>
                                              <div className="input-group rounded-pill border-0 shadow-lg overflow-hidden p-1">
                                                    <input type="text" className="form-control form-control-sm border-0 rounded-pill" id="discount-code" />
                                                    <input type="hidden" id="totalforulduzum"  value="" />
                                                          <div className="input-group-prepend cursor-pointer">
                                                              <button id="applycouponBtn" className="btn rounded-pill bg-main btn-sm py-1">Kodu yoxla</button>
                                                          </div>
                                                </div>
                                               <label className="text-danger" id="discodeerror"></label>
                                         </div>
                                      </div>
                                  </td>
                                  <td colSpan="4" style={{border: "0px"}}>
                                      <div className="text-right py-3">
                                          <h5 className="font-weight-bold">Ümumi məbləğ:
                                          <span className="text-special" id="ttlprcdesk">64 ₼</span></h5>
                                          <h5 className="font-weight-bold">Endirim:
                                              <span className="text-special mb-2" id="coupondesk">
                                                  0
                                                  ₼
                                              </span>
                                          </h5>
                                          <h5 className="font-weight-bold">Yekun məbləğ:
                                              <span className="text-special" id="lastprcdesk">64 ₼</span>
                                          </h5>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td colSpan="2" style={{border: "0px"}}></td>
                                  <td colSpan="4" className="text-right" style={{border: "0px"}}>
                                      <Link to="" className="btn bg-main btn-block rounded-pill shadow-lg">Davam et</Link>
                                  </td>
                              </tr>
                          </tfoot>
                      </table>
                  </div>
                  <div className="basket-list d-md-none">


                      {/* <!--Products--> */}

                      <div className="row no-gutters mx-n3 border p-2 mb-2">
                          <div className="col-4 text-center pr-2">
                              <div className="embed-responsive embed-responsive-1by1 rounded-circle bg-white shadow-sm mb-3">
                                  <Link to='/productdetail'>
                                     <img src={ordersimg} alt="Kofe skrab Mandarin" className="embed-responsive-item p-1 rounded-circle" />  
                                  </Link>
                              </div>
                              <form action="" method="post">
                                  <input type="hidden" name="_token" value="" />              
                                  <button className="btn">
                                      <span className="p-2 cursor-pointer" data-toggle="tooltip" data-placement="top" title="Sil">
                                        <BixCircle />
                                      </span>
                                  </button>
                              </form>
                          </div>
                          <div className="col-8">
                              <strong className="d-block mb-3">
                                  <Link to="/productdetail"> Kofe skrab Mandarin</Link>
                              </strong>
                              (250 qr)
                              <div className="border-top border-bottom text-center py-2 mb-3">
                                  <ins className="h5 m-0 text-main font-weight-bold">
                                      32 ₼
                                  </ins>
                              </div>
                              <div className="input-group align-items-center border-bottom pb-3 mb-2">
                                  <div className="input-group-prepend cursor-pointer">
                                      <button type="button" className="btn add_minusm" mid="1503-430">
                                          <BiDashCircle />
                                      </button>
                                  </div>
                                  <input type="text" className="form-control mx-1 rounded-pill text-center" placeholder="1" aria-label="Count" name="qty-m1503-430" id="qty-m1503-430" value="" min="1" />
                                      <div className="input-group-prepend cursor-pointer">
                                          <button type="button" className="btn add_plusm" mid="1503-430">
                                            <BiPlusCircle />
                                          </button>
                                      </div>
                              </div>
                              <ins className="h4 mb-1 text-main font-weight-bold text-nowrap text-center d-block" id="ttlm-1503-430">
                                  64 ₼
                              </ins>
                          </div>
                      </div>

                      {/* <!--Footer--> */}

                      <div className="row no-gutters mx-n2 mt-4">
                          <div className="col-12 col-sm-6 px-2 mb-3 mb-md-0">
                              <label htmlFor="discount-code" className="pl-2">Endirim kodu / Ulduzum kodu</label>
                              <div className="input-group rounded-pill border-0 shadow-lg overflow-hidden p-1">
                                  <input type="text" className="form-control form-control-sm border-0 rounded-pill" id="discount-code-mobile" />
                                      <div className="input-group-prepend cursor-pointer">
                                          <button id="applycouponmobileBtn" className="btn rounded-pill bg-main btn-sm py-1">Kodu yoxla</button>
                                      </div>
                              </div>
                              <label className="text-danger" id="discodeerrormbl"></label>
                          </div>
                      </div>
                      <div className="text-right font-weight-bold py-3">
                          <h5>Ümumi məbləğ:
                              <span className="text-special" id="ttlprcmobile">
                                64 ₼
                              </span>
                          </h5>
                          <h5>Endirim: 
                            <span className="text-special mb-2" id="couponmobile">
                                0 ₼
                            </span>
                          </h5>
                          <h5>Yekun məbləğ:
                            <span className="text-special" id="lastprcmobile">
                                64 ₼
                            </span>
                          </h5>
                      </div>
                      <a href=""
                          className="btn bg-main btn-block rounded-pill shadow-lg">Davam et</a>
                  </div>

              </div>
          </section>
    </>
  )
}

export default CardPageContent