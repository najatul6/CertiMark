import { loadStripe } from "@stripe/stripe-js"
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"

// TODO: add publishable key 
const stripePromise=loadStripe('')
const Payment = () => {
  return (
    <div>
          <DashboardTitle title={"Payment"} />
          <div>
            
          </div>
    </div>
  )
}

export default Payment