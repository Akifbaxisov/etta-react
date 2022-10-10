import React from 'react'

const PersonalInformation = (e) => {
  return (
    <>
          <div className="rounded-lg bg-white px-3 pt-3 px-md-4 pt-md-4 mb-2 mb-sm-3">
              {/* <!-- End Alert Messages --> */}
              <h2 className="h4 mb-4 font-weight-bold">Şəxsi məlumatlar</h2>
              <div className="row mx-n2">
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label htmlFor="custname" className="pl-2" style={{fontWeight: "600"}}>Adınız Soyadınız</label>
                      <input type="text" className="form-control rounded-pill border-0 shadow-lg" name="custname" defaultValue="" id="custname" required onInvalid={e => e.target.setCustomValidity('Məlumatları daxil edin.')} onInput={e => e.target.setCustomValidity('')} />
                      <span className="m-form__help text-danger"></span>
                  </div>
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label htmlFor="custmobile" className="pl-2" style={{fontWeight: "600"}}>Mobil</label>
                      <div className="row">
                          <div className="col-4 col-sm-4 px-sm-1 mb-3 mb-md-4" style={{ paddingRight: "0px" }}>
                              <select name="custmobile_code" id="custmobile_code"  className="form-control rounded-pill border-0 shadow-lg region">
                                  <option defaultValue="50">050</option>
                                  <option defaultValue="51">051</option>
                                  <option defaultValue="55">055</option>
                                  <option defaultValue="60">060</option>
                                  <option defaultValue="70">070</option>
                                  <option defaultValue="77">077</option>
                                  <option defaultValue="99">099</option>
                              </select>
                          </div>
                          <div className="col-8 col-sm-8 px-sm-1 mb-3 mb-md-4" style={{paddingLeft: "0px"}}>
                              <input type="text" name="custmobile" className="form-control rounded-pill border-0 shadow-lg"
                                  defaultValue="" id="custmobile" required onInvalid={e => e.target.setCustomValidity('Məlumatları daxil edin.')} onInput={e => e.target.setCustomValidity('')} placeholder="XXX-XX-XX" />
                              <span className="m-form__help text-danger"></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label htmlFor="custemail" className="pl-2" style={{fontWeight: "600" }}>E-Mail</label>
                      <input type="email" name="custemail" className="form-control rounded-pill border-0 shadow-lg" defaultValue="" id="custemail" required onInvalid={e => e.target.setCustomValidity('Məlumatları daxil edin.')}  onInput={e => e.target.setCustomValidity('')}/>
                      <span className="m-form__help text-danger"></span>
                  </div>
              </div>
          </div>
    </>
  )
}

export default PersonalInformation