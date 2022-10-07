import React from 'react'
import Header from '../../header/Header'
import PageHeader from '../../pageheader/PageHeader'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Refund = () => {
  return (
    <>
    <Header/>
    <PageHeader title="GERİ QAYTARMA VƏ YA DƏYİŞDİRMƏ" txtmain="Etta.az" itempage="Geri qaytarma və ya dəyişdirmə"/>

          <section className="container-xl px-2 px-sm-3 py-2 py-sm-3 py-lg-4">
              <div className="row mx-n1 mx-sm-n2 mx-xl-n3">

                  <div className="col-12 col-lg-9 px-1 px-sm-2 px-xl-3 order-lg-1 mb-3 mb-lg-0">
                      <article className="article rounded-lg bg-white p-3 p-md-4">

                          <h2 className="article-title font-weight-bold mb-4">Geri qaytarma və ya dəyişdirmə</h2>

                          <div className="article-body">
                          <p><strong>ETTA.AZ </strong>- dan sifariş edilən məhsullar ciddi səbəb olmadan geri qaytarılmır və ya dəyişdirilmir!</p><p>&nbsp;</p><p>Azərbaycan Respublikası Nazirlər Kabinetinin 1998-ci il 21 may tarixli 114 nömrəli qərarı ilə təsdiq edilmişdir.</p><p>&nbsp;</p><p>Azərbaycan Respublikası ərazisində</p><p>pərakəndə ticarət obyektlərində</p><p>dəyişdirməli olmayan malların</p><p>&nbsp;</p><p>SİYAHISI</p><p>&nbsp;</p><p>1. Qızıl və qızıl məmulatları;</p><p>2. Qiymətli və yarımqiymətli metallardan, daşlardan hazırlanmış məlumatlar;</p><p>3. İstehsal qüsurları istisna olmaqla bütün növ parçalar və ölçü ilə satılan bəzi mallar (lentlər, tesmalar, haşiyələr);</p><p>4. Parfümer-kosmetika malları;</p><p>5. Kişi, qadın və uşaq çimərlik paltarları;</p><p>6. Bağça yaşlı və yeni doğulan uşaqlar üçün alt paltarları;</p><p>7. Məişət-kimyası malları;</p><p>8. Şəxsi gigiyena əşyaları (diş firçaları, daraqlar, biqudilər və s.);</p><p>9. Uşaq oyuncaqları;</p><p>10. İstehsal qüsurları istisna olmaqla istifadədə olmuş, üzərində yarlıklar olmayan kişi, qadın və uşaq corabları, alt paltarları;</p><p>11. Ərzaq üçün plastmasdan hazırlanmış məlumatlar;</p><p>12. Dəyəri ödənilmiş və mağazadan çıxarılmış (yararlılıq müdəti ərzində) ərzaq malları.</p><p>&nbsp;</p><p>Müştəri məhsulu sifariş etdikdən sonra təhvil alan zaman aşağıdakı hallarla rastlaşdığı təqdirdə dəyişdirmək və ya geri qaytarma hüququna malikdir:</p><p>&nbsp;</p><p>- Sifariş edilən məhsul çatdırılan məhsulla eynilik təşkil etmədiyi halda;</p><p>- Məhsul ciddi xarici və daxili deformasiyaya məruz qaldığı halda;</p><p>- Məhsulun orijinal olmadığı sübut edildiyi halda.</p>
                          </div>

                      </article>
                  </div>

                  <div className="col-12 col-lg-3 px-1 px-sm-2 px-xl-3">
                      <div className="shadow-lg rounded-lg sticky-top top-h15 overflow-hidden mb-3 mb-lg-0">
                          <div className="list-group list-group-flush">
                              <Link to="/about" className="list-group-item list-group-item-action d-flex align-items-center">
                                  Haqqımızda
                              </Link>
                              <Link to="/delivery" className="list-group-item list-group-item-action d-flex align-items-center">
                                  Çatdırılma
                              </Link>
                              <Link to="/contact" className="list-group-item list-group-item-action d-flex align-items-center ">
                                  Əlaqə
                              </Link>
                              <Link to="/refund" className="list-group-item list-group-item-action d-flex align-items-center bg-main">
                                  Geri qaytarma və ya dəyişdirmə
                              </Link>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
    <Footer />
    </>
  )
}

export default Refund