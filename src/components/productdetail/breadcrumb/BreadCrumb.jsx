import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <>
          <div className="page-header py-4 text-center shadow-sm"></div>
          <nav aria-label="breadcrumb" className="bg-white p-2">
              <ol className="breadcrumb p-0 m-0 bg-transparent justify-content-center small">
                  <li className="breadcrumb-item">
                      <Link to='/' className="text-main">Etta.az</Link>
                  </li>
                  <li className="breadcrumb-item">
                      <Link to='/products' className="text-main">Category Name</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                      Bioselüloz qırışa qarşı ləkələr
                  </li>
              </ol>
          </nav>
    </>
  )
}

export default BreadCrumb