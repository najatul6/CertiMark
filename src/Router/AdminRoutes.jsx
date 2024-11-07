import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../Components/Shared/Loading/Loading";
import PropTypes from "prop-types";
const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isAdminLoading] = useRole();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (user && userRole) {
    return children;
  }

  return <Navigate to="/logIn" state={{ from: location }} />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoutes;
