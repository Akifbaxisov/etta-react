import React from 'react'
import imgsalary from '../../../images/salary.png'
import onlinepayment from '../../../images/onlinepayment.png'
import payperclick from '../../../images/payperclick.png'
import bolkart from '../../../images/bolkart.png'
import birkart from '../../../images/birkart.png'
import albalikart from '../../../images/albalikart.png'
import BiCheck from '../../../images/icon/BiCheck'

const PaymentTypeList = () => {
  return (
    <>
      <div className="payment-wrap rounded-lg bg-white p-3 p-md-4">
        <h2 className="h4 mb-4 font-weight-bold">Ödəmə növünü seç</h2>
        {/* <!-- Bonusla Ödəmə --> */}
        {/* <!-- Payment Img--> */}
        <ul className="nav justify-content-center row mx-n1 no-gutters text-center mb-4" id="paymentTypes"
          role="tablist">
          {/* <!-- Img Cash Payment --> */}
          <li className="col-6 col-md-3 nav-item p-1 paymenttype" id="cash_payment" role="presentation">
            <a className="nav-link p-2 text-main border h-100" id="type-one-tab" data-toggle="tab"
              href="#type-one" role="tab" aria-controls="type-one" aria-selected="true">
              <img src={imgsalary} alt="Nağd ödəniş" height="50" width="50" />
              <span className="d-block mt-1">Nağd ödəniş</span>
            </a>
          </li>
          {/* <!-- End Img Cash Payment --> */}
          {/*  */}
          <li className="col-6 col-md-3 nav-item p-1 paymenttype" id="online_payment" role="presentation">
            <a className="nav-link p-2 text-main border h-100" id="type-two-tab" data-toggle="tab"
              href="#type-two" role="tab" aria-controls="type-two" aria-selected="false">
              <img src={onlinepayment} alt="Online ödəniş" height="50" width="50" />
              <span className="d-block mt-1">Online ödəniş</span>
            </a>
            {/* <!-- Img Online Payment --> */}
          </li>
          {/* <!-- End Img Online Payment --> */}

          {/* <!-- Img Part Payment --> */}
          <li className="col-6 col-md-3 nav-item p-1 paymenttype" id="part_payment" role="presentation">
            <a className="nav-link p-2 text-main border h-100" id="type-three-tab" data-toggle="tab"
              href="#type-three" role="tab" aria-controls="type-three" aria-selected="false">
              <img src={payperclick} alt="Hissə-hissə ödəniş" height="50" width="50" />
              <span className="d-block mt-1">Hissə-hissə ödəniş</span>
            </a>
          </li>
          {/* <!-- End Img Part Payment --> */}
          {/* <!-- Internal Credit Payment --> */}
          <li className="col-6 col-md-3 nav-item p-1 paymenttype" id="credit_payment" role="presentation">
            <a className="nav-link p-2 text-main border h-100" id="type-four-tab" data-toggle="tab"
              href="#type-four" role="tab" aria-controls="type-four" aria-selected="false">
              <img src={onlinepayment} alt="Online ödəniş" height="50" width="50" />
              <span className="d-block mt-1">Daxili taksitlə ödəniş</span>
            </a>
          </li>
        </ul>
        {/* <!-- End Payment Img--> */}
        {/* <!-- Payment Type--> */}
        <div className="tab-content" id="paymentTypesContent">
          {/* <!-- Img Cash Payment --> */}
          <div hidden className="tab-pane fade" id="type-one" role="tabpanel" aria-labelledby="type-one-tab">
            Nağd ödəniş
          </div>
          {/* <!-- End Img Cash Payment --> */}
          {/* <!-- Img Online Payment --> */}
          <div hidden className="tab-pane fade" id="type-two" role="tabpanel" aria-labelledby="type-two-tab">
            Online ödəniş
          </div>
          {/* <!-- End Img Online Payment --> */}
          {/* <!-- Img Part Payment --> */}
          <div className="tab-pane fade show" id="type-three" role="tabpanel" aria-labelledby="type-three-tab">
            <h3 className="font-weight-bold text-center mb-4">Hissə-hissə ödəniş</h3>
            <ul className="nav justify-content-center row mx-n1 no-gutters text-center mb-4" id="cardTypes"
              role="tablist">
              {/* <!-- Bolkart --> */}
              <li className="col-4 col-md-3 nav-item p-1 cardtype" id="bolkart" role="presentation">
                <a className="nav-link p-2 text-main border active" id="card-one-tab" data-toggle="tab"
                  href="#card-one" role="tab" aria-controls="card-one" aria-selected="true">
                  <img src={bolkart} alt="Bolkart" height="50" width="50" />
                  <span className="d-block mt-1">Bolkart</span>
                </a>
              </li>
              {/* <!-- End Bolkart --> */}
              {/* <!-- Kapital --> */}
              <li className="col-4 col-md-3 nav-item p-1 cardtype" id="birkart" role="presentation">
                <a className="nav-link p-2 text-main border" id="card-two-tab" data-toggle="tab"
                  href="#card-two" role="tab" aria-controls="card-two" aria-selected="false">
                  <img src={birkart} alt="Birkart" height="50" width="50" />
                  <span className="d-block mt-1">Birkart</span>
                </a>
              </li>
              {/*  <!-- End Kapital -->*/}
              {/* <!-- Albali Kart --> */}
              <li className="col-4 col-md-3 nav-item p-1 cardtype" id="albalikart" role="presentation">
                <a className="nav-link p-2 text-main border" id="card-three-tab" data-toggle="tab"
                  href="#card-three" role="tab" aria-controls="card-three" aria-selected="false">
                  <img src={albalikart} alt="Albalıkart" height="50" width="50" />
                  <span className="d-block mt-1">Albalıkart</span>
                </a>
              </li>
              {/* <!-- End Albali Kart --> */}
              {/* <!-- Tam Kart --> */}
              {/* <!-- End Tam Kart --> */}
            </ul>
            <div className="tab-content" id="cardTypesContent">
              <div className="tab-pane fade show active" id="card-one" role="tabpanel"
                aria-labelledby="card-one-tab">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Çatdırılma müddəti</th>
                      <th scope="col">Aylıq ödəniş</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <label for="option-1" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="1" name="bolkart_hiremonth" id="option-1" checked />
                          <BiCheck />
                        </label>
                      </th>
                      <td>1</td>
                      <td className="td1">32.00 ₼</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <label for="option-2" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="3" name="bolkart_hiremonth" id="option-2" checked />
                          <BiCheck />
                        </label>
                      </th>
                      <td>3</td>
                      <td className="td3">10.67 ₼</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <label for="option-3" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="6" id="option-3" name="bolkart_hiremonth" />
                          <BiCheck />
                        </label>
                      </th>
                      <td>6</td>
                      <td className="td6">5.33 ₼</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="card-two" role="tabpanel" aria-labelledby="card-two-tab">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Çatdırılma müddəti</th>
                      <th scope="col">Aylıq ödəniş</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <label for="option-5" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="3" name="hiremonth" id="option-5" checked />
                          <BiCheck />
                        </label>
                      </th>
                      <td>3</td>
                      <td className="td3">10.67 ₼</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <label for="option-6" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="6" id="option-6" name="hiremonth" />
                          <BiCheck />
                        </label>
                      </th>
                      <td>6</td>
                      <td className="td6">5.33 ₼</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <label for="option-7" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="9" id="option-7" name="hiremonth" />
                          <BiCheck />
                        </label>
                      </th>
                      <td>9</td>
                      <td className="td9">3.56 ₼</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="card-three" role="tabpanel" aria-labelledby="card-three-tab">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Çatdırılma müddəti</th>
                      <th scope="col">Aylıq ödəniş</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- Albali 1 Ay --> */}
                    <tr>
                      <th scope="row">
                        <label for="option-9" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="1" name="albali_hiremonth" id="option-9" />
                          <BiCheck />
                        </label>
                      </th>
                      <td>1</td>
                      <td className="td1">32.00 ₼</td>
                    </tr>
                    {/* <!-- Albali 3 Ay --> */}
                    <tr>
                      <th scope="row">
                        <label for="option-10" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="3" name="albali_hiremonth" id="option-10" checked />
                          <BiCheck />
                        </label>
                      </th>
                      <td>3</td>
                      <td className="td3">10.67 ₼</td>
                    </tr>
                    {/* <!-- Albali 6 Ay --> */}
                    <tr>
                      <th scope="row">
                        <label for="option-11" className="m-0 cursor-pointer">
                          <input hidden type="radio" value="6" id="option-11" name="albali_hiremonth" />
                          <BiCheck />
                        </label>
                      </th>
                      <td>6</td>
                      <td className="td6">5.33 ₼</td>
                    </tr>
                    {/* <!-- Albali 12 Ay --> */}

                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="card-four" role="tabpanel" aria-labelledby="card-four-tab">
              </div>
            </div>
          </div>
          {/* <!-- End Img Part Payment --> */}
          {/* <!-- Internal Credit Payment --> */}
          <div className="tab-pane fade show" id="type-four" role="tabpanel" aria-labelledby="type-four-tab">
            <h3 className="font-weight-bold text-center mb-4">Daxili taksitlə ödəniş</h3>
            <p className="text-center mb-4" style="color: red">Qeyd-1: Ödəniş üsulu daxili kredit olduqda heç bir kampaniyadan yararlana bilmirsiniz.</p>
            <p className="text-center mb-4" style="color: red">
              Qeyd-2: Daxili Kreditlə ödəniş edə bilmək üçün minimum 100  AZN məbləğində alış-veriş edilməlidir.
            </p>
            <div className="row mx-n2">
              <div className="col-12 col-sm-12 px-1 px-sm-2 mb-3 mb-md-6">
                <label for="actual_address" className="pl-2" style="font-weight: 600">Faktiki yaşayış ünvanı</label>
                <input type="text" name="actual_address" className="form-control rounded-pill border-0 shadow-lg" id="actual_address" value="" />
              </div>
              <div className="col-12 col-sm-12 px-1 px-sm-2 mb-3 mb-md-6">
                <label for="tel" className="pl-2" style="font-weight: 600">Şəhər Nömrəsi</label>
                <input type="text" name="tel" className="form-control rounded-pill border-0 shadow-lg" id="tel" value="" placeholder="(012) XXX-XX-XX" />
                <span className="m-form__help text-danger"></span>
              </div>
              <div className="col-12 col-sm-6 px-1 px-sm-3 mb-3 mb-md-6">
                <label for="frend_fullname_1" className="pl-2" style="font-weight: 600">Tanış 1 Ad Soyad</label>
                <input type="text" name="frend_fullname_1" className="form-control rounded-pill border-0 shadow-lg" id="frend_fullname_1" value="" />
                <span className="m-form__help text-danger"></span>
              </div>

              <div className="col-12 col-sm-6 px-1 px-sm-3 mb-3 mb-md-6">
                <label for="frend_tel_1" className="pl-2" style="font-weight: 600">Tanış 1 Əlaqə Nömrəsi</label>
                <div className="row">
                  <div className="col-4 col-sm-4 px-sm-1 mb-3 mb-md-4" style="padding-right: 0">
                    <select name="frend_tel_1_code" id="frend_tel_1_code" className="form-control rounded-pill border-0 shadow-lg region">
                      <option value="50">050</option>
                      <option value="52">051</option>
                      <option value="55">055</option>
                      <option value="70">070</option>
                      <option value="77">077</option>
                      <option value="99">099</option>
                    </select>
                  </div>
                  <div className="col-8 col-sm-8 px-sm-1 mb-3 mb-md-4">
                    <input type="text" name="frend_tel_1" className="form-control rounded-pill border-0 shadow-lg" value="" id="frend_tel_1" placeholder="XXX-XX-XX" />
                    <span className="m-form__help text-danger"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 px-1 px-sm-3 mb-3 mb-md-6">
                <label for="frend_fullname_2" className="pl-2" style="font-weight: 600">Tanış 2 Ad Soyad</label>
                <input type="text" name="frend_fullname_2" className="form-control rounded-pill border-0 shadow-lg" id="frend_fullname_2" value="" />
                <span className="m-form__help text-danger"></span>
              </div>
              <div className="col-12 col-sm-6 px-1 px-sm-3 mb-3 mb-md-6">
                <label for="frend_tel_2" className="pl-2" style="font-weight: 600">Tanış 2 Əlaqə Nömrəsi</label>
                <div className="row">
                  <div className="col-4 col-sm-4 px-sm-1 mb-3 mb-md-4" style="padding-right: 0">
                    <select name="frend_tel_2_code" id="frend_tel_2_code" className="form-control rounded-pill border-0 shadow-lg region">
                      <option value="50">050</option>
                      <option value="52">051</option>
                      <option value="55">055</option>
                      <option value="70">070</option>
                      <option value="77">077</option>
                      <option value="99">099</option>
                    </select>
                  </div>
                  <div className="col-8 col-sm-8 px-sm-1 mb-3 mb-md-4">
                    <input type="tel" name="frend_tel_2" className="form-control rounded-pill border-0 shadow-lg" value="" id="frend_tel_2" placeholder="XXX-XX-XX" />
                    <span className="m-form__help text-danger"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 px-1 px-sm-3 mb-3 mb-md-12">
                <label for="sv_image1" className="pl-2" style="font-weight: 600">Şəxsiyyət vəsiqəsinin ön üzü (Şəkil tam görünməlidir.)</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" name="sv_image1" />
                  <label className="custom-file-label" for="customFile">Şəkil Seçin (.jpg)</label>
                  <div className="invalid-feedback"></div>
                </div>
              </div>
              <div className="col-12 col-sm-12 px-1 px-sm-3 mb-3 mb-md-12">
                <label for="sv_image2" className="pl-2" style="font-weight: 600">Şəxsiyyət vəsiqəsinin arxa üzü (Şəkil tam görünməlidir.)</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" name="sv_image2" data-buttonname="btn-secondary" />
                  <label className="custom-file-label" for="customFile">Şəkil Seçin (.jpg)</label>
                  <div className="invalid-feedback"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Internal Credit Payment --> */}
        </div>
        {/* <!-- End Payment Type--> */}
      </div>
    </>
  )
}

export default PaymentTypeList