import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import "./index.css";
import "leaflet/dist/leaflet.css";
import AuthProvider from "./contexts/Auth/AuthProvider";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <Toaster />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
