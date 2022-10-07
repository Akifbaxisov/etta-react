import React from 'react'
import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import BiList from '../../../images/icon/BiList'
const LogoLeft = () => {
    return (
        <>
            <button className="navbar-toggler border-0 collapsed" type="button" id="mainNavbarToggler" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Main Navbar Toggler">
                <BiList/>
            </button>

            {/* ---------- <!--Loqo--> ----------- */}
            <Link to="/" className="navbar-brand py-0 px-0 mr-0 mr-xl-5 text-main font-weight-bold ripple-effect"><img src={Logo} alt="Etta.az" height="40" /></Link>
        </>
    )
}

export default LogoLeft