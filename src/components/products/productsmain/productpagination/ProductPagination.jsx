import React from 'react'

const ProductPagination = () => {
  return (
    <>
          <nav aria-label="Page navigation" className="pt-2 pt-md-0">
              <ul className="pagination justify-content-center font-weight-bold m-0">
                  <li className="page-item mr-4 d-none d-sm-block disabled">
                      <a className="page-link rounded-pill border-0 shadow-lg text-main" tabIndex="-1" aria-disabled="true">
                          Geri
                      </a>
                  </li>
                  <li className="page-item active">
                      <a  className="page-link rounded-pill border-0 shadow-lg mx-1 text-main">1</a>
                  </li>
                  <li className="page-item">
                      <a  className="page-link rounded-pill border-0 shadow-lg mx-1 text-main">2</a>
                  </li>
                  <li className="page-item disabled">
                      <span className="page-link rounded-pill border-0 mx-1">...</span>
                  </li>
                  <li className="page-item">
                      <a className="page-link rounded-pill border-0 shadow-lg mx-1 text-main">3</a>
                  </li>
                  <li className="page-item">
                      <a  className="page-link rounded-pill border-0 shadow-lg mx-1 text-main">4</a>
                  </li>
                  <li className="page-item ml-4 d-none d-sm-block">
                      <a  className="page-link rounded-pill border-0 shadow-lg text-main">
                          İrəli
                      </a>
                  </li>
              </ul>
          </nav>
    </>
  )
}

export default ProductPagination