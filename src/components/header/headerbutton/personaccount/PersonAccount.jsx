import React from 'react'
import BiPerson from '../../../../images/icon/BiPerson'
import BiBoxArrow from '../../../../images/icon/BiBoxArrow'

const PersonAccount = () => {
    return (
        <>
            <div className="dropdown-menu menu dropdown-menu-right border-0 shadow tr-3s" aria-labelledby="profile" role="toolbar">

                <a href="http://localhost:1234/account.php" title="Şəxsi hesabım" className="dropdown-item" type="button">
                    <BiPerson />
                    <span className="pl-3">Şəxsi hesabım</span>
                </a>

                <div className="dropdown-divider" role="separator"></div>

                <a href="http://localhost:1234/#" title="Çıxış" className="dropdown-item" type="button">
                    <BiBoxArrow />
                    <span className="pl-3">Çıxış</span>
                </a>

            </div>
        </>
    )
}

export default PersonAccount