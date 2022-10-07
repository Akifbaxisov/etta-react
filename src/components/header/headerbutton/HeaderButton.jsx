import React, { useState } from 'react'
import BiBasket from '../../../images/icon/BiBasket'
import BiHeart from '../../../images/icon/BiHeart'
import BiPerson from '../../../images/icon/BiPerson'
import BiPersonCircle from '../../../images/icon/BiPersonCircle'
import BiChevronDown from '../../../images/icon/BiChevronDown'
import Basket from './basket/Basket'
import PersonAccount from './personaccount/PersonAccount'
import Language from './language/Language'
import Social from './social/Social'
import SearchInput from './search/SearchInput'
import Registration from './registration/Registration'
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../../store/shoppingcard/cartUiSlice'

const HeaderButton = () => {
   
   const totalQuantity = useSelector(state=> state.cart.totalQuantity);
   const dispatch = useDispatch()


   const toggleCart = () => {
    dispatch(cartUiActions.toggle())
   }

   const showCart = useSelector (state => state.cartUi.cartIsVisible)
   
    return (
        <>
            <div className="header-buttons d-flex position-relative">
                {/*-----------<!--Axtarış-->-------------*/}
                <SearchInput/>
                <div className="fixed-wrap d-flex font-weight-bold text-center">

                    {/*------------ Sosial-hesablar --------------*/}
                    <Social />
                    {/*------------Səbət--------------*/}

                    <span onClick={toggleCart} role="button" title="" data-target="#basket"   className="basket-toggle header-button tooltip-toggle rounded-circle text-main" data-original-title="Səbətim">
                        <small className="badge badge-pill badge-danger">{totalQuantity}</small>
                        <BiBasket />
                        <span className="text-dark d-md-none align-middle">Səbət</span>
                    </span>
                </div>
              <Basket />
                {/* -------------- İstək siyahısı -------------- */}
                <span role="button" title="" data-target="#wishlist" hidden="" className="header-button tooltip-toggle rounded-circle text-center text-main font-weight-bold" data-original-title="İstək siyahısı">
                    <small className="badge badge-pill badge-danger">2</small>
                    <BiHeart />
                </span>
                {/* -------------- Şəxsi hesaba giriş -------------- */}
                <span role="button" title="" data-toggle="modal" data-target="#registration" className="header-button tooltip-toggle rounded-circle text-center text-main font-weight-bold" data-original-title="Şəxsi hesaba giriş">
                    <BiPerson />
                </span>
                <Registration/>
                {/* -------------- Şəxsi hesab linkləri -------------- */}
                <div className="dropdown">
                    <span role="button" title="Şəxsi hesabım" data-toggle="dropdown" data-target="#profile" aria-haspopup="true" aria-expanded="false" className="header-button rounded-circle text-center text-main font-weight-bold">
                        <BiPersonCircle />
                    </span>
                    <PersonAccount />
                </div>
                {/* -------------- Dil Secimleri -------------- */}
                <div className="dropdown mx-2 mr-sm-0">
                    <span role="button" data-toggle="dropdown" data-target="#language" aria-haspopup="true" aria-expanded="false" className="header-button rounded-circle text-center text-main text-nowrap font-weight-bold">
                        AZ
                        <BiChevronDown />
                    </span>
                    <Language />
                </div>
            </div>
        </>
    )
}

export default HeaderButton