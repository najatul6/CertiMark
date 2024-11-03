import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LetterOfRecommendation from "../pages/LetterOfRecommendation/LetterOfRecommendation";
import EVerification from "../pages/EVerification/EVerification";
import ContactUs from "../pages/ContactUs/ContactUs";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import DashBoardLayout from "../Layout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute";
import Downloads from "../pages/Dashboard/UserDashboard/Downloads/Downloads";
import Profile from "../Components/Shared/Profile/Profile";
import ApplicationStatus from "../pages/Dashboard/UserDashboard/ApplicationStatus/ApplicationStatus";
import UserManagement from "../pages/Dashboard/AdminDashboard/UserManagement/UserManagement";
import VerifiedCertificates from "../pages/Dashboard/AdminDashboard/VerifiedCertificates/VerifiedCertificates";
import PendingApplications from "../pages/Dashboard/AdminDashboard/PendingApplications/PendingApplications";
import UserOverview from "../pages/Dashboard/UserDashboard/UserOverview/UserOverview";
import OverView from "../pages/Dashboard/OverView/OverView";
import Apply from "../pages/Apply/Apply";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "apply",
        element: (
          <PrivateRoute>
            <Apply />
          </PrivateRoute>
        ),
      },
      {
        path: "recommendationLetter",
        element: <LetterOfRecommendation />,
      },
      {
        path: "eVerification",
        element: <EVerification />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "overview",
        element: <OverView />,
      },

      // Admin Dashboard 
      
      {
        path:"pendingApplications",
        element:<PendingApplications />
      },
      {
        path:"verifiedCertificates",
        element:<VerifiedCertificates />
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "markSheet",
        element: <UserManagement />,
      },

      // User Dashboard 
      {
        path: "userOverview",
        element: <UserOverview />,
      },
      {
        path: "applications",
        element: <ApplicationStatus />,
      },
      {
        path:"downloads",
        element:<Downloads />,
      }
      
    ],
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
]);

export default Routes;
