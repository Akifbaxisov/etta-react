import React from 'react'
import BiChevronDown from '../../../../images/icon/BiChevronDown'

const ProAccordion = () => {
  return (
    <>
          <div className='text pt-2 border-top'>
              <div className="accordion" id="accordionExample">
                  <div className="card border-0">
                      <div className="card-header border-0 bg-white p-0" id="featuresHeading">
                          <h2 className="mb-0 p-2 p-md-3 d-flex ripple-effect cursor-pointer" data-toggle="collapse" data-target="#featuresCollapse" aria-expanded="true" aria-controls="featuresCollapse">
                              <span className="w-100">Özəllikləri</span>
                              <BiChevronDown />
                          </h2>
                      </div>

                      <div id="featuresCollapse" className="collapse show" aria-labelledby="featuresHeading" data-parent="#accordionExample">
                          <div className="card-body py-0">
                              <ul>
                                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, consectetur dicta
                                      dolorem esse maiores nostrum placeat quae unde! Aspernatur consectetur culpa ea, error et
                                      facere labore minus odio repellendus.</li>

                                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda deserunt
                                      distinctio doloribus dolorum earum expedita facilis fugiat, illum ipsa, iusto labore laborum
                                      maxime mollitia nihil nisi obcaecati perferendis placeat possimus quae rerum saepe sit soluta
                                      velit voluptas voluptatem voluptatum.</li>

                                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda deserunt
                                      distinctio doloribus</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="card border-0">
                      <div className="card-header border-0 bg-white p-0" id="rulesOfUseHeading">
                          <h2 className="mb-0 p-2 p-md-3 d-flex ripple-effect cursor-pointer" data-toggle="collapse" data-target="#rulesOfUseCollapse" aria-expanded="false" aria-controls="rulesOfUseCollapse">
                              <span className="w-100">İstifadə qaydaları</span>
                              <BiChevronDown />
                          </h2>
                      </div>

                      <div id="rulesOfUseCollapse" className="collapse" aria-labelledby="rulesOfUseHeading" data-parent="#accordionExample">
                          <div className="card-body py-0">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, beatae dolore
                                  excepturi natus nemo possimus reiciendis repudiandae sed tempore.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur
                                  dolorum nostrum odit quos sed. Amet architecto culpa dignissimos ea, enim
                                  exercitationem ipsam labore magnam nobis, nostrum odio omnis praesentium
                                  recusandae reiciendis rem! Est labore nemo perspiciatis quaerat recusandae sunt.</p>
                          </div>
                      </div>
                  </div>
                  <div className="card border-0">
                      <div className="card-header border-0 bg-white p-0" id="compositionHeading">
                          <h2 className="mb-0 p-2 p-md-3 d-flex ripple-effect cursor-pointer" data-toggle="collapse" data-target="#compositionCollapse" aria-expanded="false" aria-controls="compositionCollapse">
                              <span className="w-100">Tərkibi</span>
                              <BiChevronDown />
                          </h2>
                      </div>
                      <div id="compositionCollapse" className="collapse" aria-labelledby="compositionHeading" data-parent="#accordionExample">
                          <div className="card-body py-0">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, beatae dolore
                                  excepturi natus nemo possimus reiciendis repudiandae sed tempore.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur
                                  dolorum nostrum odit quos sed. Amet architecto culpa dignissimos ea, enim
                                  exercitationem ipsam labore magnam nobis, nostrum odio omnis praesentium
                                  recusandae reiciendis rem! Est labore nemo perspiciatis quaerat recusandae sunt.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ProAccordion