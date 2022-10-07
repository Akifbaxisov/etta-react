import React from 'react'
import SectionTitle from '../../home/sectiontitle/SectionTitle'
import CommentList from './commentlist/CommentList'
import ReviewContact from './reviewcontact/ReviewContact'

const CustomerReview = () => {
  return (
    <>
        <section className="container-xl p-2 px-sm-3 pt-sm-3 mb-3 mb-md-4">
            <div className="product reviews bg-white shadow-sm rounded-lg px-3 pt-3 px-sm-4 pt-sm-4 px-lg-5 pt-lg-5">
                <SectionTitle subtitle='MÜŞTƏRİLƏRİMİZDƏN' title='RƏYLƏR'/>
                <ReviewContact/>
                <CommentList/>
                <CommentList/>
                <CommentList/>
                <CommentList/>
            </div>
        </section>
    </>
  )
}

export default CustomerReview