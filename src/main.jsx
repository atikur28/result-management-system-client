import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CreatedRouter from "./layout/CreatedRouter";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={CreatedRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
