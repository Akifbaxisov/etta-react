import React from 'react'
import Header from '../../header/Header'
import PageHeader from '../../pageheader/PageHeader'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Header/>
    <PageHeader title="HAQQIMIZDA"  txtmain="Etta.az" itempage="Haqqımızda" />

          <section className="container-xl px-2 px-sm-3 py-2 py-sm-3 py-lg-4">
              <div className="row mx-n1 mx-sm-n2 mx-xl-n3">

                  <div className="col-12 col-lg-9 px-1 px-sm-2 px-xl-3 order-lg-1 mb-3 mb-lg-0">
                      <article className="article rounded-lg bg-white p-3 p-md-4">

                          <h2 className="article-title font-weight-bold mb-4 ">Haqqımızda</h2>

                          <div className="article-body">
                              <p>ETTA.AZ müxtəlif brendlərin kosmetik məhsullarını online alış-veriş edə biləcəyiniz məkandır. Artıq evinizdən və ya olduğunuz məkandan ayrılmadan bir neçə kliklə bəyəndiyiniz kosmetika məhsullarını əldə edəcəksiniz.</p><p>Məhsullar rəsmi distribütor tərəfindən təqdim edilir və orijinallığı barədə lazımi sertifikatlara malikdir.</p><p>Rahatlıq hər bir xanımın haqqıdır, eynilə gözəl görünmək kimi! :)</p>
                          </div>

                      </article>
                  </div>

                  <div className="col-12 col-lg-3 px-1 px-sm-2 px-xl-3">
                      <div className="shadow-lg rounded-lg sticky-top top-h15 overflow-hidden mb-3 mb-lg-0">
                          <div className="list-group list-group-flush">
                              <Link to="/about" className="list-group-item list-group-item-action d-flex align-items-center bg-main">
                                  Haqqımızda
                              </Link>
                              <Link to="/delivery" className="list-group-item list-group-item-action d-flex align-items-center ">
                                  Çatdırılma
                              </Link>
                              <Link to="/contact" className="list-group-item list-group-item-action d-flex align-items-center ">
                                  Əlaqə
                              </Link>
                              <Link  to="/refund" className="list-group-item list-group-item-action d-flex align-items-center ">
                                  Geri qaytarma və ya dəyişdirmə
                              </Link>
                          </div>
                      </div>
                  </div>

              </div>
          </section>

    <Footer/>
    </>
  )
}

export default About