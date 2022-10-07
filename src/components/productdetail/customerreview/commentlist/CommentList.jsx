import React from 'react'
import BiStar from '../../../../images/icon/BiStar'

const CommentList = () => {
  return (
    <>
        <div className="comments-list row no-gutters justify-content-center mx-sm-4">
            <div className="col-12 col-lg-9">
                <div className="comment pl-sm-4 mb-3 mb-md-5">
                    <div className="comment-body bg-light position-relative p-3 px-md-4">
                        <span className="d-inline-block font-weight-bold mb-2">User name</span>
                        <small className="d-inline-block mb-2 float-right">05.09.2020, 12:00</small>
                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iste mollitia
                        necessitatibus sint tempora? Corporis earum odio quis vitae voluptatem.</p>
                    </div>
                    <div className="stars mb-3 mb-md-4 ml-2 pl-sm-3">
                        <BiStar/>
                        <BiStar/>
                        <BiStar/>
                        <BiStar/>
                        <BiStar className="text-grey"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CommentList