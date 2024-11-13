import { loadStripe } from "@stripe/stripe-js";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  return (
    <div>
      <DashboardTitle title={"Payment"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
