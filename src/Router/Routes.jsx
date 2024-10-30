import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ApplyForCertificate from "../pages/ApplyForCertificate/ApplyForCertificate";
import LetterOfRecommendation from "../pages/LetterOfRecommendation/LetterOfRecommendation";
import EVerification from "../pages/EVerification/EVerification";
import ContactUs from "../pages/ContactUs/ContactUs";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import DashBoardLayout from "../Layout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Shared/Profile/Profile";
import OverView from "../pages/Dashboard/AdminDashboard/OverView/OverView";
import UserManagement from "../pages/Dashboard/AdminDashboard/UserManagement/UserManagement";

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
        path: "applyCertificate",
        element: (
          <PrivateRoute>
            <ApplyForCertificate />
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
        path: "overview",
        element: <OverView />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "markSheet",
        element: <UserManagement />,
      },
      {
        path: "profile",
        element: <Profile />,
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
