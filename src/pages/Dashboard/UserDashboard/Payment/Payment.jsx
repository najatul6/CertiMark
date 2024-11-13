import { loadStripe } from "@stripe/stripe-js"
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import { Elements } from "@stripe/react-stripe-js"

// TODO: add publishable key 
const stripePromise=loadStripe('')
const Payment = () => {
  return (
    <div>
          <DashboardTitle title={"Payment"} />
          <div>
            <Elements stripe={stripePromise}>

            </Elements>
          </div>
    </div>
  )
}

export default Payment