import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Pricing from "../pages/Pricing/Pricing";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import Verification from "../pages/Auth/Verification/Verification";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import ErrorPage from "../pages/Error/ErrorPage";
import BeRider from "../pages/BeRider/BeRider";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "coverage",
        Component: Coverage,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "be-rider",
        element: (
          <PrivateRoutes>
            <BeRider />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"} replace />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget-password",
        Component: ForgetPassword,
      },
      {
        path: "verify",
        Component: Verification,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
