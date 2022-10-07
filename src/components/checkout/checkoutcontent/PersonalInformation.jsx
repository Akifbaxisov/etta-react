import React from 'react'

const PersonalInformation = () => {
  return (
    <>
          <div className="rounded-lg bg-white px-3 pt-3 px-md-4 pt-md-4 mb-2 mb-sm-3">
              {/* <!-- End Alert Messages --> */}
              <h2 className="h4 mb-4 font-weight-bold">Şəxsi məlumatlar</h2>
              <div className="row mx-n2">
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label for="custname" className="pl-2" style="font-weight: 600">Adınız Soyadınız</label>
                      <input type="text" className="form-control rounded-pill border-0 shadow-lg" name="custname"value="" id="custname" required oninvalid="this.setCustomValidity('Məlumatları daxil edin.')" oninput="this.setCustomValidity('')" />
                      <span className="m-form__help text-danger"></span>
                  </div>
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label for="custmobile" className="pl-2" style="font-weight: 600">Mobil</label>
                      <div className="row">
                          <div className="col-4 col-sm-4 px-sm-1 mb-3 mb-md-4" style={{ paddingRight: "0px" }}>
                              <select name="custmobile_code" id="custmobile_code" className="form-control rounded-pill border-0 shadow-lg region">
                                  <option value="50">050</option>
                                  <option value="51">051</option>
                                  <option value="55">055</option>
                                  <option value="60">060</option>
                                  <option value="70">070</option>
                                  <option value="77">077</option>
                                  <option value="99">099</option>
                              </select>
                          </div>
                          <div className="col-8 col-sm-8 px-sm-1 mb-3 mb-md-4" style={{paddingLeft: "0px"}}>
                              <input type="text" name="custmobile" className="form-control rounded-pill border-0 shadow-lg"
                                  value="" id="custmobile" required oninvalid="this.setCustomValidity('Məlumatları daxil edin.')" oninput="this.setCustomValidity('')" placeholder="XXX-XX-XX" />
                              <span className="m-form__help text-danger"></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label for="custemail" className="pl-2" style={{fontWeight: "600" }}>E-Mail</label>
                      <input type="email" name="custemail" className="form-control rounded-pill border-0 shadow-lg"value="" id="custemail"required oninvalid="this.setCustomValidity('Məlumatları daxil edin.')" oninput="this.setCustomValidity('')" />
                      <span className="m-form__help text-danger"></span>
                  </div>
              </div>
          </div>
    </>
  )
}

export default PersonalInformation