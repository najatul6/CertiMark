import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes.jsx";
import "./index.css";
import Context from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Routes} />
    </Context>
  </StrictMode>
);
