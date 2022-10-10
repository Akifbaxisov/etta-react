import React from 'react'
import PersonalInformation from './PersonalInformation'
import DeliveryInformation from './DeliveryInformation'
import Orders from './Orders'
import PaymentTypeList from './PaymentTypeList'

const CheckOutContent = () => {
  return (
    <>
      <section className="container-xl px-2 px-sm-3 py-2 py-sm-3 py-lg-4">
          <form action="https://etta.az/payment/pay" method="POST" id="checkoutForm" encType="multipart/form-data">
          <input type="hidden" name="_token" defaultValue="Y2a3t6cXQ1xyKI8HMcwfDlmwvla8Ap7ohF9hFPN2"/> 
          <input type="hidden" name="paymenttypeid" id="paymenttypeid" />
          <input type="hidden" name="cardtypeid" id="cardtypeid" defaultValue="bolkart" />
          <input type="hidden" name="cardamounttxb" id="cardamounttxb" defaultValue="32" />
          <input type="hidden" name="deliveryamounttxb" id="deliveryamounttxb" />
          {/* <!-- Checkout Area --> */}
          <div className="row mx-n1 mx-sm-n2 mx-xl-n3">
              {/* <!-- Personal Info And Delivery Info --> */}
                <div className="col-12 col-lg-8 px-1 px-sm-2 px-xl-3 mb-2 mb-sm-3 mb-lg-0">

                  {/* <!-- Persolnal Info --> */}

                      <PersonalInformation />

                  {/* <!-- End Personal Info --> */}

                  {/* <!-- Delivery Info --> */}

                      <DeliveryInformation />

                  {/* <!-- End Delivery Info --> */}

                  {/* <!-- End Personal Info And Delivery Info --> */}

                  {/* <!-- Payment --> */}

                      <PaymentTypeList />

                  {/* <!-- End Payment --> */}
                </div>
                  {/* <!-- End Checkout Area --> */}
                  {/* <!-- Orders --> */}
                  <div className="col-12 col-lg-4 px-1 px-sm-2 px-xl-3">

                      <Orders />

                  </div>
                 {/* <!-- End Orders --> */}
          </div>          
        </form>
      </section>
    </>
  )
}

export default CheckOutContent