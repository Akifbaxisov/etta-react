import React from 'react'
import Logo from '../../images/logo.png' 
import Background from '../../images/footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
          <footer className="main-footer pt-3" style={{backgroundImage: `url(${Background})`}}>
              <div className="container-xl text-center pt-5">

                  <Link to='/' className="footer-logo d-inline-block mx-auto mt-md-3 mb-4">
                      <img src={Logo} alt="Etta.az" height="50"/>
                  </Link>

                  <nav className="footer-nav mb-3 mb-md-4">
                      <Link to="/about" title="Haqqımızda" className="d-inline-block rounded-pill tr-3s mb-2 mr-2">
                          Haqqımızda
                      </Link>
                      <Link to="/delivery" title="Çatdırılma" className="d-inline-block rounded-pill tr-3s mb-2 mr-2">
                          Çatdırılma
                      </Link>
                      <Link to="/contact" title="Əlaqə" className="d-inline-block rounded-pill tr-3s mb-2 mr-2">
                          Əlaqə
                      </Link>
                      <Link to="/refund" title="Geri qaytarma və ya dəyişdirmə" className="d-inline-block rounded-pill tr-3s mb-2 mr-2">
                          Geri qaytarma və ya dəyişdirmə
                      </Link>
                      <Link to="/blog" title="Geri qaytarma və ya dəyişdirmə" className="d-inline-block rounded-pill tr-3s mb-2 mr-2">
                           Bloq
                      </Link>
                  </nav>

                  <h5 className="mb-4 pb-md-2 font-weight-bold">
                      Məhsullarımız haqqında son xəbərləri almaq üçün abunə olun
                  </h5>

                  <div className="row justify-content-center mb-4 mb-md-5">
                      <div className="col-12 col-sm-9 col-md-5">
                          <div className="input-group rounded-pill border-0 shadow-lg bg-white overflow-hidden p-1 p-sm-2">
                              <input type="text" className="form-control border-0 rounded-pill"/>
                                  <div className="input-group-prepend pl-2">
                                      <button className="btn rounded-pill bg-main">Abunə ol</button>
                                  </div>
                          </div>
                      </div>
                  </div>

              </div>

              <div className="footer-bottom py-4 py-sm-3 shadow-lg mb-5 mb-md-0">
                  <div className="container-xl text-center text-sm-left">
                      <small>ETTA.AZ © 2020 Bütün hüquqlar qorunur!</small>
                      <a href="http://localhost:1234/#" target="_blank" rel="noopener noeferrer" title="" data-toggle="tooltip" className="d-block float-sm-right text-dark font-weight-bold" data-original-title="Developer description here">
                          Developer name
                      </a>
                  </div>
              </div>
          </footer>
    </>
  )
}

export default Footer