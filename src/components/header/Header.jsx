import React from 'react'
import LogoLeft from './navbar/LogoLeft'
import NavBar from '../header/navbar/NavBar'
import HeaderButton from './headerbutton/HeaderButton'

const Header = () => {
    return (
        <>
            <header className="main-header sticky-top bg-white shadow-lg animated fadeIn">
                <nav className="navbar navbar-light navbar-expand-xl p-0 tr-3s">
                    <div className="container-xl px-0 px-xl-3">
                         {/*------------- <!-- Logo --> -------------*/}
                        <LogoLeft/>

                         {/*------------- <!-- Navbar --> -------------*/}
                        <NavBar/>
                        <div className="flex-grow-1 d-xl-none" role="separator"></div>
                        {/*------------- <!--Buttons--> -------------*/}
                        <HeaderButton />
                    </div>
                </nav>
            </header><div style={{ position: 'static' }}></div>
        </>
    )
}

export default Header