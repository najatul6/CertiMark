import { loadStripe } from "@stripe/stripe-js";
import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const { applicationId } = useParams();

  return (
    <div>
      <DashboardTitle title={"Payment"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm applicationId={applicationId}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
