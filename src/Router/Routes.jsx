import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
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
import Downloads from "../pages/Dashboard/UserDashboard/Downloads/Downloads";
import Profile from "../Components/Shared/Profile/Profile";
import ApplicationStatus from "../pages/Dashboard/UserDashboard/ApplicationStatus/ApplicationStatus";
import UserManagement from "../pages/Dashboard/AdminDashboard/UserManagement/UserManagement";
import VerifiedCertificates from "../pages/Dashboard/AdminDashboard/VerifiedCertificates/VerifiedCertificates";
import PendingApplications from "../pages/Dashboard/AdminDashboard/PendingApplications/PendingApplications";
import RejectedApplications from "../pages/Dashboard/AdminDashboard/RejectedApplications/RejectedApplications";
import OverView from "../pages/Dashboard/OverView/OverView";
import Apply from "../pages/Apply/Apply";
import Payment from "../pages/Dashboard/UserDashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import CreateCertificate from "../pages/Dashboard/AdminDashboard/CreateCertificate/CreateCertificate";
import About from "../pages/About/About";
import Features from "../pages/Feature/Feature";

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
        path:"aboutUs",
        element:<About/>
      },
      {
        path:"features",
        element:<Features/>
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
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
        path: "pendingApplications",
        element: (
          <AdminRoutes>
            <PendingApplications />
          </AdminRoutes>
        ),
      },
      {
        path: "rejectedApplications",
        element: (
          <AdminRoutes>
            <RejectedApplications />
          </AdminRoutes>
        ),
      },
      {
        path: "verifiedCertificates",
        element: (
          <AdminRoutes>
            <VerifiedCertificates />
          </AdminRoutes>
        ),
      },
      {
        path: "user-management",
        element: (
          <AdminRoutes>
            <UserManagement />
          </AdminRoutes>
        ),
      },
      {
        path: "markSheet",
        element: (
          <AdminRoutes>
            <UserManagement />
          </AdminRoutes>
        ),
      },
      {
        path: "createCertificate/:applicationId",
        element: (
          <AdminRoutes>
            <CreateCertificate />
          </AdminRoutes>
        ),
      },

      // User Dashboard

      {
        path: "applications",
        element: <ApplicationStatus />,
      },
      {
        path: "payment/:applicationId",
        element: <Payment />,
      },
      {
        path: "downloads",
        element: <Downloads />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
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
