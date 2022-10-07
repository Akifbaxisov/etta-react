import React from 'react'

const ReviewContact = () => {
  return (
    <>
       <div className="p-3 p-sm-4 bg-light rounded-lg mb-3 mb-md-5">
            <div className="row justify-content-center">
                <form className="col-12 col-lg-9">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3 mb-md-4">
                            <label htmlFor="name" className="pl-3 font-weight-bold">Adı:</label>
                            <input type="text" className="form-control border-0 shadow rounded-pill" id="name"/>
                        </div>
                        <div className="col-12 col-sm-4 mb-3 mb-md-4">
                            <label htmlFor="email" className="pl-3 font-weight-bold">Email:</label>
                            <input type="email" className="form-control border-0 shadow rounded-pill" id="email"/>
                        </div>
                        <div className="col-12 col-sm-4 mb-3 mb-md-4">
                            <label htmlFor="tel" className="pl-3 font-weight-bold">Telefon:</label>
                            <input type="tel" className="form-control border-0 shadow rounded-pill" id="tel"/>
                        </div>
                        <div className="col-12 mb-3 mb-md-4">
                            <label htmlFor="comment" className="pl-3 font-weight-bold">Şərh:</label>
                            <textarea rows="4" cols="30" className="form-control border-0 shadow rounded-lg" id="comment"></textarea>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3 mb-sm-0">
                            <div className="btn bg-white rounded-pill p-0 d-block shadow">
                                <fieldset className="rating d-inline-block align-middle h-100">
                                    <input type="radio" className="ckbox" id="star5" name="rating" value="5"/>
                                    <label className="full" htmlFor="star5" data-toggle="tooltip" title="" aria-label="Çox yaxşı" data-original-title="Çox yaxşı"></label>
                                    <input type="radio" className="ckbox" id="star4" name="rating" value="4"/>
                                    <label className="full" htmlFor="star4" data-toggle="tooltip" title="" aria-label="Yaxşı" data-original-title="Yaxşı"></label>
                                    <input type="radio" className="ckbox" id="star3" name="rating" value="3"/>
                                    <label className="full" htmlFor="star3" data-toggle="tooltip" title="" aria-label="Orta" data-original-title="Orta"></label>
                                    <input type="radio" className="ckbox" id="star2" name="rating" value="2"/>
                                    <label className="full" htmlFor="star2" data-toggle="tooltip" title="" aria-label="Pis" data-original-title="Pis"></label>
                                    <input type="radio" className="ckbox" id="star1" name="rating" value="1"/>
                                    <label className="full" htmlFor="star1" data-toggle="tooltip" title="" aria-label="Çox pis" data-original-title="Çox pis"></label>
                                </fieldset>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 ml-auto">
                            <button className="btn btn-block bg-main shadow rounded-pill m-0">
                                Göndər
                            </button>
                        </div>
                    </div>      
                </form>
            </div>       
        </div>         
    </>
  )
}

export default ReviewContact