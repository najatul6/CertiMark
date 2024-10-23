import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes.jsx";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
        <Toaster />
        <RouterProvider router={Routes} />
    </AuthProvider>
  </HelmetProvider>

);
