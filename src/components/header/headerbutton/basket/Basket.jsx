import React from 'react'
import BixCircle from '../../../../images/icon/BixCircle'
import BasketItem from './BasketItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardPage from '../../../cardpage/CardPage'

const Basket = () => {

    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector( state => state.cart.totalAmount);


    // console.log(cartProducts);
    return (
        <>
                <div className="basket bg-white d-table shadow-lg overflow-hidden tr-3s">

                <div className="d-table-row">
                    <div className="basket-header d-flex align-items-center px-3 pl-md-4 py-1 py-md-2 shadow-lg">

                        <span className="h4 m-0 flex-grow-1">Səbət</span>

                        <span className="basket-toggle p-2 cursor-pointer" data-toggle="tooltip" data-placement="left" title="" data-original-title="Bağla">
                            <BixCircle />
                        </span>

                    </div>
                </div>

                <div className="d-table-row h-100">
                    <div className="basket-body h-100 overflow-auto">

                        {
                            cartProducts.length === 0 ? 
                            <div className="empty-basket d-flex justify-content-center flex-wrap flex-column align-items-center py-5 my-4 h-100 w-100 text-grey text-center" role="presentation">
                                <span className="h4 font-weight-bold d-block m-0 pt-3 w-100">Səbət boşdur</span>
                            </div> : cartProducts.map((item,index) =>(
                            <BasketItem item={item} key={index}/>
                            ))
                        }

                    </div>
                </div>
                <div className="d-table-row">
                    <div className="basket-footer px-3 pt-3 pt-sm-2 shadow-lg">
                        <div className="row no-gutters mx-n2 align-items-center">
                            <div className="col-12 col-sm-4 px-1 pb-3 pb-sm-2 text-center order-sm-1">
                                <small className="text-muted d-block">Ümumi məbəğ</small>
                                <span className="h5 m-0 font-weight-bold text-special d-block">{totalAmount} ₼</span>
                            </div>
                            <div className="col-6 col-sm-4 px-1 pb-2">
                                <button title="Davam et" className="basket-toggle btn btn-block bg-light rounded-pill">
                                    Davam et
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 px-1 pb-2 order-2">
                                <Link to="/cardpage" title="Səbətə get" className="btn btn-block bg-main rounded-pill">
                                    Səbətə get
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket