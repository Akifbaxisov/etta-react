import React from 'react'
import Search from '../../../../images/icon/Search'
import BixCircle from '../../../../images/icon/BixCircle'

const SearchInput = () => {
    return (
        <>
            <div className="dropdown search-wrap">
                <span role="button" data-toggle="dropdown" data-target="#search" aria-haspopup="true" aria-expanded="false" className="header-button rounded-circle text-center text-main">
                    <Search />
                </span>
                <div className="dropdown-menu search dropdown-menu-right border-0 shadow-0 tr-3s" aria-labelledby="search" role="toolbar">
                    <form action="http://localhost:1234/" className="input-group">
                        <input type="search" className="form-control rounded-pill" placeholder="Axtar" />
                        <button type="reset" className="btn bg-white rounded-pill" data-toggle="dropdown" data-target="#search" aria-haspopup="true" aria-expanded="false">
                            <BixCircle />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchInput