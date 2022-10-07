import React from 'react'

const DeliveryInformation = () => {
  return (
    <>
          <div className="rounded-lg bg-white px-3 pt-3 px-md-4 pt-md-4 mb-2 mb-sm-3">
              <h2 className="h4 mb-4 font-weight-bold">Çatdırılma məlumatları</h2>
              <div className="row mx-n2">
                  <div className="col-12 col-sm-4 px-1 px-sm-2 mb-3 mb-md-4">
                      <label for="country" className="pl-2" style={{fontWeight: "600"}}>Şəhər</label>
                      <select name="region_id" id="region_id" className="form-control rounded-pill border-0 shadow-lg region" required oninvalid="this.setCustomValidity('Məlumatları daxil edin.')" oninput="this.setCustomValidity('')">
                          <option value="">Seçin</option>
                          <option value="100003"
                          >
                              Binəqədi rayonu</option>
                          <option value="101016"
                          >
                              Xocəsən qəsəbəsi</option>
                          <option value="101026"
                          >
                              Sulutəpə qəsəbəsi</option>
                          <option value="500003"
                          >
                              Sabunçu rayonu</option>
                          <option value="102016"
                          >
                              Biləcəri qəsəbəsi</option>
                          <option value="103016"
                          >
                              Binəqədi qəsəbəsi</option>
                          <option value="104016"
                          >
                              28 May qəsəbəsi</option>
                          <option value="105016"
                          >
                              M. Ə. Rəsulzadə qəsəbəsi</option>
                          <option value="106016"
                          >
                              1 saylı sahə inzibati ərazi dairəsi</option>
                          <option value="107016"
                          >
                              2 saylı sahə inzibati ərazi dairəsi</option>
                          <option value="107016"
                          >
                              2 saylı sahə inzibati ərazi dairəsi</option>
                          <option value="200003"
                          >
                              Qaradağ rayonu</option>
                          <option value="201016"
                          >
                              Ələt qəsəbəsi</option>
                          <option value="200003"
                          >
                              Qaradağ rayonu</option>
                          <option value="201026"
                          >
                              Baş Ələt qəsəbəsi</option>
                          <option value="201036"
                          >
                              Kotal qəsəbəsi</option>
                          <option value="2"
                          >
                              Bakı şəhəri</option>
                          <option value="40800001"
                          >
                              Göyçay rayonu</option>
                          <option value="90200002"
                          >
                              Mingəçevir şəhəri</option>
                          <option value="91100002"
                          >
                              Şirvan şəhəri</option>
                          <option value="60800001"
                          >
                              Ağcabədi rayonu</option>
                          <option value="90300001"
                          >
                              Ağdaş rayonu</option>
                          <option value="60700001"
                          >
                              Beyləqan rayonu</option>
                          <option value="61000001"
                          >
                              Bərdə rayonu</option>
                          <option value="80800001"
                          >
                              Biləsuvar rayonu</option>
                          <option value="91000001"
                          >
                              Hacıqabul rayonu</option>
                          <option value="90700001"
                          >
                              İmişli rayonu</option>
                          <option value="90600001"
                          >
                              Kürdəmir rayonu</option>
                          <option value="80700001"
                          >
                              Neftçala rayonu</option>
                          <option value="90800001"
                          >
                              Saatlı rayonu</option>
                          <option value="90900001"
                          >
                              Sabirabad rayonu</option>
                          <option value="80900001"
                          >
                              Salyan rayonu</option>
                          <option value="90400001"
                          >
                              Ucar rayonu</option>
                          <option value="90100001"
                          >
                              Yevlax şəhəri</option>
                          <option value="90500001"
                          >
                              Zərdab rayonu</option>
                          <option value="30900002"
                          >
                              Sumqayıt şəhəri</option>
                          <option value="30815016"
                          >
                              Saray qəsəbəsi</option>
                          <option value="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option value="324016"
                          >
                              Zirə qəsəbəsi</option>
                          <option value="50200001"
                          >
                              Ağstafa rayonu</option>
                          <option value="50600001"
                          >
                              Daşkəsən rayonu</option>
                          <option value="50500001"
                          >
                              Gədəbəy rayonu</option>
                          <option value="20000002"
                          >
                              Gəncə şəhəri</option>
                          <option value="50900001"
                          >
                              Goranboy rayonu</option>
                          <option value="50800001"
                          >
                              Göygöl rayonu</option>
                          <option value="50100001"
                          >
                              Qazax rayonu</option>
                          <option value="50338016"
                          >
                              Qovlar şəhəri</option>
                          <option value="51000002"
                          >
                              Naftalan şəhəri</option>
                          <option value="50700001"
                          >
                              Samux rayonu</option>
                          <option value="50400001"
                          >
                              Şəmkir rayonu</option>
                          <option value="50300001"
                          >
                              Tovuz rayonu</option>
                          <option value="50933014"
                          >
                              Dəliməmmədli şəhəri</option>
                          <option value="30800001"
                          >
                              Abşeron rayonu</option>
                          <option value="30600001"
                          >
                              Xızı rayonu</option>
                          <option value="30900002"
                          >
                              Sumqayıt şəhəri</option>
                          <option value="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option value="40100001"
                          >
                              Balakən rayonu</option>
                          <option value="40300001"
                          >
                              Qax rayonu</option>
                          <option value="40600001"
                          >
                              Qəbələ rayonu</option>
                          <option value="40500001"
                          >
                              Oğuz rayonu</option>
                          <option value="40200001"
                          >
                              Zaqatala rayonu</option>
                          <option value="40400001"
                          >
                              Şəki şəhəri</option>
                          <option value="80100001"
                          >
                              Astara rayonu</option>
                          <option value="80600001"
                          >
                              Cəlilabad rayonu</option>
                          <option value="80300001"
                          >
                              Lerik rayonu</option>
                          <option value="80200001"
                          >
                              Lənkəran şəhəri</option>
                          <option value="80500001"
                          >
                              Masallı rayonu</option>
                          <option value="80400001"
                          >
                              Yardımlı rayonu</option>
                          <option value="80226014"
                          >
                              Liman şəhəri</option>
                          <option value="80602014"
                          >
                              Göytəpə şəhəri</option>
                          <option value="30400001"
                          >
                              Şabran rayonu</option>
                          <option value="30200001"
                          >
                              Xaçmaz rayonu</option>
                          <option value="30300001"
                          >
                              Quba rayonu</option>
                          <option value="30100001"
                          >
                              Qusar rayonu</option>
                          <option value="30500001"
                          >
                              Siyəzən rayonu</option>
                          <option value="30202014"
                          >
                              Xudat şəhəri</option>
                          <option value="40900001"
                          >
                              Ağsu rayonu</option>
                          <option value="40700001"
                          >
                              İsmayıllı rayonu</option>
                          <option value="30700001"
                          >
                              Qobustan rayonu</option>
                          <option value="30701014"
                          >
                              Qobustan şəhəri</option>
                          <option value="41001014"
                          >
                              Şamaxı şəhəri</option>
                          <option value="10400002"
                          >
                              Naxçıvan şəhəri</option>
                          <option value="10300001"
                          >
                              Babək rayonu</option>
                          <option value="10600001"
                          >
                              Culfa rayonu</option>
                          <option value="10800001"
                          >
                              Kəngərli rayonu</option>
                          <option value="10700001"
                          >
                              Ordubad rayonu</option>
                          <option value="10100001"
                          >
                              Sədərək rayonu</option>
                          <option value="10500001"
                          >
                              Şahbuz rayonu</option>
                          <option value="10200001"
                          >
                              Şərur rayonu</option>
                          <option value="30801014"
                          >
                              Xırdalan şəhəri</option>
                          <option value="603016"
                          >
                              Hövsan qəsəbəsi</option>
                          <option value="10000000"
                          >
                              Naxçıvan Muxtar Respublikası</option>
                          <option value="800003"
                          >
                              Nəsimi rayonu</option>
                          <option value="1100003"
                          >
                              Yasamal rayonu</option>
                          <option value="400003"
                          >
                              Səbail rayonu</option>
                      </select>
                  </div>
                  <div className="col-12 col-sm-12 px-1 px-sm-2 mb-3 mb-md-4">
                      <label for="address" className="pl-2" style="font-weight: 600">Ünvan</label>
                      <input type="text" name="address" className="form-control rounded-pill border-0 shadow-lg" id="address" value="" required oninvalid="this.setCustomValidity('Məlumatları daxil edin.')" oninput="this.setCustomValidity('')" />
                      <input type="hidden" name="address2" id="address2" className="form-control rounded-pill border-0 shadow-lg" />
                  </div>
                </div>
            </div>
    </>
  )
}

export default DeliveryInformation