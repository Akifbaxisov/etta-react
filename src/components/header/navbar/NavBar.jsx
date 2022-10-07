import React from 'react'
import { Outlet, Link, BrowserRouter as Router, } from 'react-router-dom'
import { useState } from 'react'
import ChevronRight from '../../../images/icon/ChevronRight'
import ChevronLeft from '../../../images/icon/ChevronLeft'


const NavBar = () => {

    const [dropdown,  setDropdown] = useState (false);

    function handleClick(event) {
        const id = event.currentTarget.id
        console.log(id)
        setDropdown(!dropdown);
    }

    return (
        <>
            <div className="collapse navbar-collapse tr-3s" id="mainNavbar" aria-labelledby="mainNavbarToggler">
                <ul className="navbar-nav pl-xl-3" role="menubar">

                    {/* --------  <!--Nav Menu-->   --------- */}
                    <li className="nav-item active d-xl-none" role="presentation">
                        <Link to='/' title="Ana səhifə" role="menuitem" className="nav-link ripple-effect">Ana səhifə</Link>
                    </li>
                    <li className="nav-item dropdown" role="presentation" >
                        <span  className="nav-link ripple-effect dropdown-toggle" onClick={handleClick} id="submenu-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Kateqoriyalar üzrə">
                            <span>Kateqoriyalar üzrə</span>
                        </span>
                        <div className={`${dropdown ? 'shown' : ''} dropdown-menu menu mega bg-white shadow border-0 p-0 tr-3s`}  role="menubar" aria-labelledby="submenu-1" data-display="dynamic">
                            <div className="container py-md-4">
                                <ul className="menu-list d-flex flex-wrap list-unstyled w-100 m-0 p-0 tr-3s" role="menu">
                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1">
                                        <ChevronLeft />
                                        Kateqoriyalar üzrə
                                    </li>
                                    <li role="presentation" className="list-col">

                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span onClick={handleClick} className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-1">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-1">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu sub title"></span>
                                                    <span  className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Sub menu title
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span  className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-2">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-2">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-2-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-2-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-2-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-3">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-3">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>

                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-3-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-3-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-3-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>

                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-4">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-4">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>

                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>

                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-4-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-4-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-4">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-4">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-4-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-4-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-1-4">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-1-4">
                                                <ChevronLeft />
                                                Sub menu title
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-1-4-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-1-4-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-1-4-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <div className="embed-responsive embed-responsive-1by1 bg-light mt-3 mt-xl-0">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown" role="presentation">
                        <span className="nav-link ripple-effect dropdown-toggle" onClick={handleClick} id="submenu-2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Problemlər üzrə">
                            <span>Problemlər üzrə</span>
                        </span>
                        <div className={`${dropdown ? 'shown' : ''} dropdown-menu menu mega bg-white shadow border-0 p-0 tr-3s`}  role="menubar" aria-labelledby="submenu-2" data-display="dynamic">
                            <div className="container py-md-4">
                                <ul className="menu-list d-flex flex-wrap list-unstyled w-100 m-0 p-0 tr-3s" role="menu">
                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2">
                                        <ChevronLeft />
                                        Kateqoriyalar üzrə
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">ÜZ</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-2-1">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-2-1">
                                                <ChevronLeft />
                                            </li>
                                            <li role="presentation">
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yagli</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Yağlı</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və quru</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Normal və quru</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və quru</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Normal və quru</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və quru</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Rəng bərabərsizliyi</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və quru</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu item</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">GÖZ</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-2-1">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-2-1">
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Mimiki Qırışlar</span>
                                                    <span onClick={handleClick} className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s">Normal və Quru</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s">Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Dərin Qırışlar</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Qara Halqalar və Şişkinlik</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">

                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Qıcıqlanma</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Qıcıqlanma</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Qıcıqlanma</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">BƏDƏN</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-2-1">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-2-1">
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sellülit</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Mikroçatlar</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Mikroçatlar</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="presentation" className="list-col">
                                        <span className="d-flex">
                                            <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">SAÇ</span>
                                            <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <ChevronRight />
                                            </span>
                                        </span>
                                        <ul className="submenu-list list-unstyled mb-xl-3 tr-3s" role="menu" aria-labelledby="submenu-2-1">
                                            <li className="get-back d-xl-none mb-2" role="presentation" data-menu="submenu-2-1">
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Yağlı Saçlar</span>
                                                    <span onClick={handleClick} className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Cansız</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Keratinli Saçlar</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Boyalı Saçlar</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Yağlı</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Normal və Quru </Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Həssas</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Rəng bərabərsizliyi</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>
                                            <li role="presentation">
                                                <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu item</Link>
                                            </li>

                                            <li role="presentation">
                                                <span className="d-flex">
                                                    <span className="nav-link toggle ripple-effect w-100" title="Sub menu title">Sub menu title</span>
                                                    <span className="btn btn-light dropdown-toggle d-lg-none" id="submenu-2-1-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <ChevronRight />
                                                    </span>
                                                </span>
                                                <ul className="submenu-list pl-0 tr-3s" role="menu" aria-labelledby="submenu-2-1-1">
                                                    <li className="get-back d-xl-none mb-2" role="button" data-menu="submenu-2-1-1">
                                                        <ChevronLeft />
                                                        Sub menu title
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                    <li role="presentation">
                                                        <Link to='/products' title="Sub menu item" role="menuitem" className="nav-link d-inline-flex ripple-effect tr-3s"> Sub menu sub item</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to='/blog' title="Blog" role="menuitem" className="nav-link ripple-effect">Blog</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="http://localhost:1234/brands.php" title="Brendlər" role="menuitem" className="nav-link ripple-effect">
                            Brendlər
                        </a>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar