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
    path:"/logIn",
    element:<LogIn/>,
  },
  {
    path:"/register",
    element:<Register/>,
  }
]);

export default Routes;
