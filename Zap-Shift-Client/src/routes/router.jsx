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
import SendParcel from "../pages/SendParcel/SendParcel";
import Story from "../pages/AboutUs/components/Story/Story";
import Mission from "../pages/AboutUs/components/Mission/Mission";
import Success from "../pages/AboutUs/components/Success/Success";
import TeamAndOthers from "../pages/AboutUs/components/TeamAndOthers/TeamAndOthers";
import Loading from "../components/Ui/Loading/Loading";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Deliveries from "../pages/Dashboard/Deliveries/Deliveries";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import Stores from "../pages/Dashboard/Stores/Stores";
import PricingPlan from "../pages/Dashboard/PricingPlan/PricingPlan";
import CoverageArea from "../pages/Dashboard/CoverageArea/CoverageArea";
import Parcels from "../pages/Dashboard/Parcels/Parcels";

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
        children: [
          {
            index: true,
            element: <Navigate to={"story"} replace />,
          },
          {
            path: "story",
            Component: Story,
          },
          {
            path: "mission",
            Component: Mission,
          },
          {
            path: "success",
            Component: Success,
          },
          {
            path: "team-and-others",
            Component: TeamAndOthers,
          },
        ],
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "send-parcel",
        Component: SendParcel,
        loader: () => fetch("./warehouses.json"),
        hydrateFallbackElement: <Loading />,
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
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={"overview"} replace />,
      },
      {
        path: "overview",
        Component: Dashboard,
      },
      {
        path: "parcels",
        Component: Parcels,
      },
      {
        path: "deliveries",
        Component: Deliveries,
      },
      {
        path: "invoices",
        Component: Invoices,
      },
      {
        path: "stores",
        Component: Stores,
      },
      {
        path: "pricing-plan",
        Component: PricingPlan,
      },
      {
        path: "coverage-area",
        Component: CoverageArea,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
