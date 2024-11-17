import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const CheckOutForm = ({ applicationId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [applicant, setApplicant] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure
      .get(`/applicants/${applicationId}`)
      .then((response) => {
        const applicantData = response.data;
        setApplicant(applicantData);
        const fees = applicantData.feeAmount;
        // const amount = parseFloat(applicantData.feeAmount);
        const amount = fees / 120;
        return axiosSecure.post("/create-payment-intent", { fee: amount });
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        toast.error("Failed to fetch applicant data");
        setMessage("Failed to fetch applicant data");
        console.error(error);
      });
  }, [applicationId, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Set loading state to true when payment is being processed
    setLoading(true);

    //   Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      setMessage(error.message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: applicant?.name,
            email: applicant?.userEmail,
          },
        },
      });
    setLoading(false);
    if (confirmError) {
      console.log(confirmError);

      setMessage(confirmError.message);
    } else {
      console.log("paymentIntent", paymentIntent);
      // setMessage("An unexpected error occurred.");
      if (paymentIntent.status === "succeeded") {
        const applicantData = {
          Status: applicant?.Status,
          publishDate: applicant?.publishDate || "",
          RejectDate: applicant?.RejectDate || "",
          paymentId: paymentIntent?.id,
          paymentDate: new Date().toISOString(),
          fee: "paid",
        };
        const updateData = await axiosSecure.patch(
          `/applications/${applicant?._id}`,
          applicantData
        );
        if (updateData.data?.modifiedCount > 0) {
          navigate("/dashboard/applications");
          Swal.fire({
            title: "Payment Successful",
            text: `Your Transaction id: ${paymentIntent?.id}`,
            icon: "success",
          });
          console.log("updated payment::", updateData.data);
        }
      }
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
      <p className="text-red-600 font-bold font-montserrat">{message}</p>
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className={`w-full border py-2 rounded-md text-xl mt-5 text-white duration-300 ${
          !stripe || !clientSecret
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-lightTeal hover:bg-teal-600"
        }`}
      >
        {loading ? (
          <span className="flex justify-center items-center">
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
            <span className="ml-2">Processing...</span>
          </span>
        ) : (
          "Pay"
        )}
      </button>
    </form>
  );
};

CheckOutForm.propTypes = {
  applicationId: PropTypes.node,
};

export default CheckOutForm;
