import React from 'react'
import BiArrowRight from '../../../images/icon/BiArrowRight'
import { blogCardDetail } from '../../../DataJson'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
    {blogCardDetail.map((value) => {
        return (
            <div className="col-12 col-sm-6 px-1 px-sm-2 px-xl-3 mb-2 mb-xl-4 pb-sm-2">
                <div className="entry item position-relative scale-on-hover bg-white rounded-lg overflow-hidden h-100 tr-3s wow fadeInUp ripple-effect">
                    <Link to="/blogdetail" title="title" className="d-block">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={value.blogimg} alt="title" width="285" height="215" className="embed-responsive-item contain" />
                        </div>
                        <div className="p-3 p-md-4">
                            <h3 className="title line-clamp line-2 font-weight-bold text-dark">
                                {value.title}
                            </h3>
                            <p className="description line-clamp line-2 text-muted">
                                {value.descrip}
                            </p>
                            <small className="text-main font-weight-bold text-uppercase">
                                Davamını oxu
                                <BiArrowRight />
                            </small>
                        </div>
                    </Link>
                </div>
        </div>
        )
    })}
    </>
  )
}

export default BlogCard