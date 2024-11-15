import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"

const PaymentHistory = () => {
    // Function to format date to AM/PM
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };
  return (
    <div>
         <DashboardTitle title={"Payment History"} />
    </div>
  )
}

export default PaymentHistory