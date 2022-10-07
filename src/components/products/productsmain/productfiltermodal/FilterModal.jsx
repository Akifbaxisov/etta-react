import React from 'react'
import BiFilter from '../../../../images/icon/BiFilter'
import BiSliders from '../../../../images/icon/BiSliders'

const FilterModal = () => {
    return (
        <>
                <div className="bg-white shadow-sm rounded-lg d-lg-none mb-2 mb-sm-3">
                    <div className="row no-gutters">
                        <div className="col-6">
                            <button type="button" data-toggle="modal" data-target="#filter-modal" className="btn bg-white btn-block rounded-lg text-left p-2 p-sm-3">
                                <BiSliders/>
                                <span className="w-100 font-weight-bold align-middle">
                                    Filtirləmə
                                </span>
                            </button>
                        </div>
                        <div className="col-6 border-left">
                            <div className="btn-group w-100">
                                <button type="button" className="btn bg-white d-flex rounded-lg text-left p-2 p-sm-3 rounded-pill" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                    <span className="w-100 text-right font-weight-bold align-middle">Öncə ucuz</span>
                                    <BiFilter/>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right shadow-lg rounded-lg border-0 mt-2 mt-sm-3">
                                    <button className="dropdown-item" type="button">Öncə ucuz</button>
                                    <button className="dropdown-item" type="button">Öncə baha</button>
                                    <button className="dropdown-item" type="button">Endirimli</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-filter-wrap modal fade shadow-sm" id="filter-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog m-0 my-sm-2 mx-sm-auto m-lg-0">
                        <form className="modal-content border-0">
                            <div className="modal-header p-lg-2 px-lg-3 shadow-sm border-0 align-items-center">
                                <BiSliders/>
                                <h5 className="modal-title font-weight-bolder">Filtir</h5>
                                <button type="button" className="close d-lg-none" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="filter-wrap">
                                    <span className="d-block mb-2 font-weight-bolder">
                                        Alt katagoriyalar
                                    </span>
                                    <ul className="list-unstyled p-0 border-bottom pb-3 mb-3">
                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-1
                                            </a>
                                        </li>
                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-2
                                            </a>
                                        </li>
                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-3
                                            </a>
                                        </li>
                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-4
                                            </a>
                                        </li>

                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-5
                                            </a>
                                        </li>

                                        <li role="presentation" className="nav-item">
                                            <a href="http://localhost:1234/category.php#" className="nav-link font-14 text-dark py-1 pl-2 ripple-effect rounded-pill">
                                                Sub Category name 1-6
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="filter-wrap">
                                    <span className="d-block mb-2 font-weight-bolder">
                                        Brendlər
                                    </span>
                                    <div className="border-bottom pb-3 mb-3">
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                <label className="custom-control-label" htmlFor="customCheck1">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                <label className="custom-control-label" htmlFor="customCheck2">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                                <label className="custom-control-label" htmlFor="customCheck3">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                                <label className="custom-control-label" htmlFor="customCheck4">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                                <label className="custom-control-label" htmlFor="customCheck5">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                                <label className="custom-control-label" htmlFor="customCheck6">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                                <label className="custom-control-label" htmlFor="customCheck7">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                                                <label className="custom-control-label" htmlFor="customCheck8">Brand name</label>
                                        </div>
                                        <div className="custom-control custom-checkbox py-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck9"/>
                                                <label className="custom-control-label" htmlFor="customCheck9">Brand name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-wrap">
                                    <span className="d-block mb-2 font-weight-bolder">
                                        Qiymət araliğı
                                    </span>
                                    <div className="mb-2">
                                        <div className="slider slider-horizontal" id="">
                                            <div className="slider-track">
                                                <div className="slider-track-low" ></div>
                                                <div className="slider-selection" ></div>
                                                <div className="slider-track-high"></div>
                                            </div>
                                            <div className="tooltip tooltip-main bs-tooltip-top" role="presentation">
                                                <div className="arrow"></div>
                                                <div className="tooltip-inner">30 : 70</div>
                                            </div>
                                            <div className="tooltip tooltip-min bs-tooltip-top" role="presentation">
                                                <div className="arrow"></div>
                                                <div className="tooltip-inner">30</div>
                                            </div>
                                            <div className="tooltip tooltip-max bs-tooltip-top" role="presentation">
                                                <div className="arrow"></div>
                                                <div className="tooltip-inner">70</div>
                                            </div>
                                            <div className="slider-handle min-slider-handle round" role="slider" aria-valuemin="5" aria-valuemax="100"
                                                aria-valuenow="30" tabIndex="0"></div>
                                            <div className="slider-handle max-slider-handle round" role="slider" aria-valuemin="5" aria-valuemax="100"
                                                aria-valuenow="70" tabIndex="0"></div>
                                        </div>
                                        <input id="filter" type="text" defaultValue={"30,70"} data-slider-min="5" data-slider-max="100" data-slider-step="5"
                                        data-slider-value="[30,70]" data-value="30,70" style={{display: "none"}}/>
                                    </div>
                                    <div className="form-row mb-2 text-center font-weight-bold">
                                        <div className="col-6 mb-3">
                                            <span id="minVal">30</span> ₼
                                        </div>
                                        <div className="col-6 mb-3">
                                            <span id="maxVal">70</span> ₼
                                        </div>
                                    </div>
                                    <div className="custom-control custom-checkbox m-0">
                                        <input type="checkbox" className="custom-control-input" id="onlyDiscounted"/>
                                            <label className="custom-control-label" htmlFor="onlyDiscounted">
                                                Yanlızca endirimli mallar
                                            </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer py-2">
                                <button type="reset" className="btn btn-light rounded-pill" data-dismiss="modal">
                                    Sıfırla
                                </button>
                                <div className="flex-grow-1" role="separator"></div>
                                <button type="submit" className="btn bg-main rounded-pill" id="filter-btn">
                                    Filtirlə
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default FilterModal