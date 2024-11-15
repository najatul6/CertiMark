import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
const CheckOutForm = ({ applicationId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [applicant,setApplicant]=useState({})
  const [clientSecret,setClientSecret]=useState('')
  console.log(applicant);
  console.log("clientSecret:",clientSecret);
  useEffect(()=>{
    axiosSecure.get(`/applicants/${applicationId}`)
    .then(response => {
      const applicantData = response.data;
      setApplicant(applicantData); 
      const amount = parseFloat(applicantData.feeAmount);
      return axiosSecure.post('/create-payment-intent', { fee: amount });
    })
    .then((res) => {
      setClientSecret(res.data.clientSecret);
    })
    .catch(error => {
      toast.error("Failed to fetch applicant data");
      console.error(error);
    });
  },[applicationId, axiosSecure])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    //   Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CardElement
        className="py-4 border rounded-md px-2"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#3AAFA9",
              "::placeholder": {
                color: "#2B7A78",
              },
            },
            invalid: {
              color: "#FF0000",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className={`w-full border py-2 rounded-md text-xl mt-5 text-white duration-300 ${
    !stripe || !clientSecret
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-lightTeal hover:bg-teal-600'
  }`}
      >
        Pay
      </button>
    </form>
  );
};

CheckOutForm.propTypes = {
  applicationId: PropTypes.node,
};


export default CheckOutForm;
