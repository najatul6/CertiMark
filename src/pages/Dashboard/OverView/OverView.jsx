import AdminOverView from "../AdminDashboard/AdminOverView/AdminOverView";
import UserOverview from "../UserDashboard/UserOverview/UserOverview";

const OverView = () => {
  const isAdmin = true;
  return <>{isAdmin ? <AdminOverView /> : <UserOverview />}</>;
};

export default OverView;
