import React from 'react'
import Login from '../../../../images/login-bg.jpg'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <>
            <div className="modal fade" style={{paddingTop:'42px', paddingRight:'0px'}} id="registration"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <div className="embed-responsive embed-responsive-21by9">
                            <img className="embed-responsive-item" src={Login}/>
                                <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                                    <div className="clearfix text-center p-3">

                                        <span className="h2 font-weight-bold text-main d-none d-sm-block pb-4">Dünyanı birlikdə gəzək!</span>

                                        <button type="reset" className="btn btn-primary badge-pill shadow-big px-3 my-1 ml-auto">
                                            Facebook ilə daxil ol
                                        </button>
                                        <button type="submit" className="btn bg-special badge-pill shadow-big px-3 my-1 mr-auto">
                                            Google ilə daxil ol
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <ul className="nav main-tab justify-content-center shadow-sm text-center" role="tablist">
                            <li className="nav-item w-50" role="presentation">
                                <a href="#sign-in-tabpanel" title="Daxil ol" role="tab" id="sign-in-tab" data-toggle="pill" aria-controls="sign-in-tabpanel" aria-selected="true" className="nav-link py-2 active">
                                    Daxil ol
                                </a>
                            </li>

                            <li className="nav-item w-50" role="presentation">
                                <a href="#registration-tabpanel" title="Yeni qeydiyyat" role="tab" id="registration-tab" data-toggle="pill" aria-controls="registration-tabpanel" aria-selected="false" className="nav-link py-2">
                                    Yeni qeydiyyat
                                </a>
                            </li>

                        </ul>

                        <div className="tab-content">
                            <form className="tab-pane fade show active" id="sign-in-tabpanel" aria-labelledby="sign-in-tab">

                                <div className="modal-body p-4">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="user-name">İstifadəçi adı</label>
                                            <input type="text" className="form-control badge-pill" id="user-name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="password">Şifrə</label>
                                            <input type="password" className="form-control badge-pill" id="password"/>
                                        </div>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="remember-me"/>
                                            <label className="custom-control-label" htmlFor="remember-me">Yadda saxla</label>
                                    </div>
                                </div>

                                <div className="modal-footer py-2">
                                    <button type="reset" className="btn btn-light badge-pill px-3 ml-auto" data-dismiss="modal">Ləğv et</button>
                                    <button type="submit" className="btn bg-main badge-pill px-3 mr-auto">Daxil ol</button>
                                </div>

                            </form>

                            <form className="tab-pane fade" id="registration-tabpanel" aria-labelledby="registration-tab">

                                <div className="modal-body p-4">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="r-user-name">İstifadəçi adı</label>
                                            <input type="text" className="form-control badge-pill" id="r-user-name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="r-email">Email</label>
                                            <input type="email" className="form-control badge-pill" id="r-email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="r-password">Şifrə</label>
                                            <input type="password" className="form-control badge-pill" id="r-password"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="r-password-repair">Şifrənin təkrarı</label>
                                            <input type="password" className="form-control badge-pill" id="r-password-repair"/>
                                        </div>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="accept-rules"/>
                                            <label className="custom-control-label" htmlFor="accept-rules">
                                                <a href="http://localhost:1234/#" title="İstifadə şərtləri" rel="noopener noreferrer" target="_blank">
                                                    İstifadə şərtlərini
                                                </a>
                                                qəbul edirəm
                                            </label>
                                    </div>
                                </div>

                                <div className="modal-footer py-2">
                                    <button type="reset" className="btn btn-light badge-pill px-3 ml-auto" data-dismiss="modal">Ləğv et</button>
                                    <button type="submit" className="btn bg-special badge-pill px-3 mr-auto">Qeydiyyatı tamamla</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration