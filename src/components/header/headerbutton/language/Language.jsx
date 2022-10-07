import React from 'react'
import lang1 from '../../../../images/az.svg'
import lang2 from '../../../../images/en.svg'

const Language = () => {
    return (
        <>
            <div className="dropdown-menu menu language dropdown-menu-right border-0 shadow tr-3s" aria-labelledby="language" role="toolbar">

                <a href="http://localhost:1234/#" title="Azərbaycanca" className="dropdown-item" type="button">
                    <img loading="lazy" alt="Azərbaycanca" height="17" className="mr-3" src={lang1} />
                </a>

                <a href="http://localhost:1234/#" title="English" className="dropdown-item" type="button">
                    <img loading="lazy" alt="English" height="17" className="mr-3" src={lang2} />
                </a>

            </div>
        </>
    )
}

export default Language