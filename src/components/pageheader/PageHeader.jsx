import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = (props) => {
  return (
    <>
            <section className="page-header py-3 py-md-5 text-center shadow-sm">
                <div className="container-xl">
                    <span className="page-title d-block font-weight-bolder text-uppercase text-special mb-0">
                      {props.title}
                    </span>
                </div>
            </section>
            <nav aria-label="breadcrumb" className="bg-white p-2">
                <ol className="breadcrumb p-0 m-0 bg-transparent justify-content-center small">
                    <li className="breadcrumb-item">
                        <Link to='/' className="text-main">{props.txtmain}</Link>
                    </li>
            
                    <li className="breadcrumb-item active" aria-current="page">
                        {props.itempage}
                    </li>
                </ol>
            </nav>
    </>
  )
}

export default PageHeader