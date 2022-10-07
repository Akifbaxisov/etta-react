import React from 'react'
import Whatsapp from '../../../../images/icon/Whatsapp'
import Instagram from '../../../../images/icon/Instagram'

const Social = () => {
    return (
        <>
            <a href="http://localhost:1234/#" role="button" className="social-share bg-white header-button rounded-circle">
                <Whatsapp />
                <span className="text-dark align-middle d-md-none">Whatsapp</span>
            </a>

            <a href="http://localhost:1234/#" role="button" className="social-share bg-white header-button rounded-circle">
                <Instagram />
                <span className="text-dark align-middle d-md-none ">Instagram</span>
            </a>
        </>
    )
}

export default Social