import useRole from "../../../hooks/useRole";
import AdminOverView from "../AdminDashboard/AdminOverView/AdminOverView";
import UserOverview from "../UserDashboard/UserOverview/UserOverview";

const OverView = () => {
  //  Get User Role from Data base
  const [userRole]=useRole()
  return <>{userRole ? <AdminOverView /> : <UserOverview />}</>;
};

export default OverView;
