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
        element: <ApplyForCertificate />,
      },
      {
        path: "recommendationLetter",
        element: <LetterOfRecommendation />,
      },
      {
        path:"eVerification",
        element:<EVerification/>,
      },
      {
        path:"contactUs",
        element:<ContactUs/>,
      }

    ],
  },
  {
    path:"/dashboard",
    element:<DashBoardLayout/>,
    children:{

    }
  },
  {
    path:"/logIn",
    element:<LogIn/>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/forgetPassword",
    element:<ForgetPassword/>
  }
]);

export default Routes;
