import React from 'react'

const DeliveryInformation = (e) => {
  return (
    <>
          <div className="rounded-lg bg-white px-3 pt-3 px-md-4 pt-md-4 mb-2 mb-sm-3">
              <h2 className="h4 mb-4 font-weight-bold">Çatdırılma məlumatları</h2>
              <div className="row mx-n2">
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label htmlFor="country" className="pl-2" style={{fontWeight: "600"}}>Şəhər</label>
                      <select name="region_id" id="region_id" className="form-control rounded-pill border-0 shadow-lg region" required onInvalid={e => e.target.setCustomValidity('Məlumatları daxil edin.')} onInput={e => e.target.setCustomValidity('')}>
                          <option defaultValue="">Seçin</option>
                          <option defaultValue="100003"
                          >
                              Binəqədi rayonu</option>
                          <option defaultValue="101016"
                          >
                              Xocəsən qəsəbəsi</option>
                          <option defaultValue="101026"
                          >
                              Sulutəpə qəsəbəsi</option>
                          <option defaultValue="500003"
                          >
                              Sabunçu rayonu</option>
                          <option defaultValue="102016"
                          >
                              Biləcəri qəsəbəsi</option>
                          <option defaultValue="103016"
                          >
                              Binəqədi qəsəbəsi</option>
                          <option defaultValue="104016"
                          >
                              28 May qəsəbəsi</option>
                          <option defaultValue="105016"
                          >
                              M. Ə. Rəsulzadə qəsəbəsi</option>
                          <option defaultValue="106016"
                          >
                              1 saylı sahə inzibati ərazi dairəsi</option>
                          <option defaultValue="107016"
                          >
                              2 saylı sahə inzibati ərazi dairəsi</option>
                          <option defaultValue="107016"
                          >
                              2 saylı sahə inzibati ərazi dairəsi</option>
                          <option defaultValue="200003"
                          >
                              Qaradağ rayonu</option>
                          <option defaultValue="201016"
                          >
                              Ələt qəsəbəsi</option>
                          <option defaultValue="200003"
                          >
                              Qaradağ rayonu</option>
                          <option defaultValue="201026"
                          >
                              Baş Ələt qəsəbəsi</option>
                          <option defaultValue="201036"
                          >
                              Kotal qəsəbəsi</option>
                          <option defaultValue="2"
                          >
                              Bakı şəhəri</option>
                          <option defaultValue="40800001"
                          >
                              Göyçay rayonu</option>
                          <option defaultValue="90200002"
                          >
                              Mingəçevir şəhəri</option>
                          <option defaultValue="91100002"
                          >
                              Şirvan şəhəri</option>
                          <option defaultValue="60800001"
                          >
                              Ağcabədi rayonu</option>
                          <option defaultValue="90300001"
                          >
                              Ağdaş rayonu</option>
                          <option defaultValue="60700001"
                          >
                              Beyləqan rayonu</option>
                          <option defaultValue="61000001"
                          >
                              Bərdə rayonu</option>
                          <option defaultValue="80800001"
                          >
                              Biləsuvar rayonu</option>
                          <option defaultValue="91000001"
                          >
                              Hacıqabul rayonu</option>
                          <option defaultValue="90700001"
                          >
                              İmişli rayonu</option>
                          <option defaultValue="90600001"
                          >
                              Kürdəmir rayonu</option>
                          <option defaultValue="80700001"
                          >
                              Neftçala rayonu</option>
                          <option defaultValue="90800001"
                          >
                              Saatlı rayonu</option>
                          <option defaultValue="90900001"
                          >
                              Sabirabad rayonu</option>
                          <option defaultValue="80900001"
                          >
                              Salyan rayonu</option>
                          <option defaultValue="90400001"
                          >
                              Ucar rayonu</option>
                          <option defaultValue="90100001"
                          >
                              Yevlax şəhəri</option>
                          <option defaultValue="90500001"
                          >
                              Zərdab rayonu</option>
                          <option defaultValue="30900002"
                          >
                              Sumqayıt şəhəri</option>
                          <option defaultValue="30815016"
                          >
                              Saray qəsəbəsi</option>
                          <option defaultValue="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option defaultValue="324016"
                          >
                              Zirə qəsəbəsi</option>
                          <option defaultValue="50200001"
                          >
                              Ağstafa rayonu</option>
                          <option defaultValue="50600001"
                          >
                              Daşkəsən rayonu</option>
                          <option defaultValue="50500001"
                          >
                              Gədəbəy rayonu</option>
                          <option defaultValue="20000002"
                          >
                              Gəncə şəhəri</option>
                          <option defaultValue="50900001"
                          >
                              Goranboy rayonu</option>
                          <option defaultValue="50800001"
                          >
                              Göygöl rayonu</option>
                          <option defaultValue="50100001"
                          >
                              Qazax rayonu</option>
                          <option defaultValue="50338016"
                          >
                              Qovlar şəhəri</option>
                          <option defaultValue="51000002"
                          >
                              Naftalan şəhəri</option>
                          <option defaultValue="50700001"
                          >
                              Samux rayonu</option>
                          <option defaultValue="50400001"
                          >
                              Şəmkir rayonu</option>
                          <option defaultValue="50300001"
                          >
                              Tovuz rayonu</option>
                          <option defaultValue="50933014"
                          >
                              Dəliməmmədli şəhəri</option>
                          <option defaultValue="30800001"
                          >
                              Abşeron rayonu</option>
                          <option defaultValue="30600001"
                          >
                              Xızı rayonu</option>
                          <option defaultValue="30900002"
                          >
                              Sumqayıt şəhəri</option>
                          <option defaultValue="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option defaultValue="40100001"
                          >
                              Balakən rayonu</option>
                          <option defaultValue="40300001"
                          >
                              Qax rayonu</option>
                          <option defaultValue="40600001"
                          >
                              Qəbələ rayonu</option>
                          <option defaultValue="40500001"
                          >
                              Oğuz rayonu</option>
                          <option defaultValue="40200001"
                          >
                              Zaqatala rayonu</option>
                          <option defaultValue="40400001"
                          >
                              Şəki şəhəri</option>
                          <option defaultValue="80100001"
                          >
                              Astara rayonu</option>
                          <option defaultValue="80600001"
                          >
                              Cəlilabad rayonu</option>
                          <option defaultValue="80300001"
                          >
                              Lerik rayonu</option>
                          <option defaultValue="80200001"
                          >
                              Lənkəran şəhəri</option>
                          <option defaultValue="80500001"
                          >
                              Masallı rayonu</option>
                          <option defaultValue="80400001"
                          >
                              Yardımlı rayonu</option>
                          <option defaultValue="80226014"
                          >
                              Liman şəhəri</option>
                          <option defaultValue="80602014"
                          >
                              Göytəpə şəhəri</option>
                          <option defaultValue="30400001"
                          >
                              Şabran rayonu</option>
                          <option defaultValue="30200001"
                          >
                              Xaçmaz rayonu</option>
                          <option defaultValue="30300001"
                          >
                              Quba rayonu</option>
                          <option defaultValue="30100001"
                          >
                              Qusar rayonu</option>
                          <option defaultValue="30500001"
                          >
                              Siyəzən rayonu</option>
                          <option defaultValue="30202014"
                          >
                              Xudat şəhəri</option>
                          <option defaultValue="40900001"
                          >
                              Ağsu rayonu</option>
                          <option defaultValue="40700001"
                          >
                              İsmayıllı rayonu</option>
                          <option defaultValue="30700001"
                          >
                              Qobustan rayonu</option>
                          <option defaultValue="30701014"
                          >
                              Qobustan şəhəri</option>
                          <option defaultValue="41001014"
                          >
                              Şamaxı şəhəri</option>
                          <option defaultValue="10400002"
                          >
                              Naxçıvan şəhəri</option>
                          <option defaultValue="10300001"
                          >
                              Babək rayonu</option>
                          <option defaultValue="10600001"
                          >
                              Culfa rayonu</option>
                          <option defaultValue="10800001"
                          >
                              Kəngərli rayonu</option>
                          <option defaultValue="10700001"
                          >
                              Ordubad rayonu</option>
                          <option defaultValue="10100001"
                          >
                              Sədərək rayonu</option>
                          <option defaultValue="10500001"
                          >
                              Şahbuz rayonu</option>
                          <option defaultValue="10200001"
                          >
                              Şərur rayonu</option>
                          <option defaultValue="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option defaultValue="603016"
                          >
                              Hövsan qəsəbəsi</option>
                          <option defaultValue="10000000"
                          >
                              Naxçıvan Muxtar Respublikası</option>
                          <option defaultValue="800003"
                          >
                              Nəsimi rayonu</option>
                          <option defaultValue="1100003"
                          >
                              Yasamal rayonu</option>
                          <option defaultValue="400003"
                          >
                              Səbail rayonu</option>
                      </select>
                  </div>
                  <div className="col-12 col-sm-12 px-1 px-sm-2 mb-3 mb-md-4">
                      <label htmlFor="address" className="pl-2" style={{fontWeight: "600"}}>Ünvan</label>
                      <input type="text" name="address" className="form-control rounded-pill border-0 shadow-lg" id="address" defaultValue="" required onInvalid={e => e.target.setCustomValidity('Məlumatları daxil edin.')} onInput={e => e.target.setCustomValidity('')}/>
                      <input type="hidden" name="address2" id="address2" className="form-control rounded-pill border-0 shadow-lg" />
                  </div>
                </div>
            </div>
    </>
  )
}

export default DeliveryInformation