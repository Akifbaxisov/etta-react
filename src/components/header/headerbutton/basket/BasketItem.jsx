import React from 'react'
import BiDashCircle from '../../../../images/icon/BiDashCircle'
import BiPlusCircle from '../../../../images/icon/BiPlusCircle'
import BiTrash from '../../../../images/icon/BiTrash'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../../store/shoppingcard/cartSlice'

const BasketItem = ({item}) => {

    const {id, proname, imgcover, price, quantity, totalPrice} = item

    const dispatch = useDispatch()

    const incrementitem = () => {
        dispatch(cartActions.addItem({
            id,
            proname,
            imgcover,
            price
        }))
    }

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

  return (
    <>
          <div className="basket-list border-top">
              <div className="list-item row no-gutters border-bottom py-3">
                  <div className="col-3 pl-3 pl-md-4">
                      <div className="embed-responsive embed-responsive-1by1 rounded-circle bg-white shadow-sm">
                          <img src={imgcover} alt="REXALINE" className="embed-responsive-item p-1 rounded-circle" />
                      </div>
                  </div>
                  <div className="col-9 px-3 d-flex align-items-center flex-wrap">
                      <div className="d-flex flex-column w-100">
                          <div className="d-flex w-100">
                              <a  title="REXALINE" className="h5 font-weight-bold mb-2 line-clamp line-1 text-dark w-100">
                                  {proname}
                              </a>
                              <span className="h6 mb-2 text-main text-nowrap">{totalPrice} ₼</span>
                          </div>
                          <div className="d-flex w-100 pr-md-1">
                              <div className="d-flex w-100 font-weight-bold">
                                  <div className="input-group align-items-center">
                                      <div className="input-group-prepend cursor-pointer" onClick={decreaseItem}>
                                          <BiDashCircle />
                                      </div>
                                      <input type="text" className="form-control mx-1 rounded-pill" placeholder={quantity} aria-label="Count" default={1} />
                                      <div className="input-group-prepend cursor-pointer" onClick={incrementitem}>
                                          <BiPlusCircle />
                                      </div>
                                  </div>
                                  <small className="text-secondary pl-3 text-nowrap d-flex align-items-center w-100">
                                      {quantity} x
                                  </small>
                                  <small className="text-secondary  text-nowrap d-flex align-items-center w-100">
                                      75 ml
                                  </small>

                              </div>
                              <small className="d-flex align-items-center text-danger cursor-pointer" onClick={deleteItem}>
                                  <BiTrash />
                                  Sil
                              </small>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
    </>
  )
}

export default BasketItem