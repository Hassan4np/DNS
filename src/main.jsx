import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <div className="max-w-screen-xl mx-auto">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
    </QueryClientProvider>
  </React.StrictMode>
);
