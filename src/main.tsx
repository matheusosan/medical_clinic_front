import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { router } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import { SidebarProvider } from "./context";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </SidebarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
