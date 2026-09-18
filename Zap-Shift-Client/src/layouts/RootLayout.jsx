import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

function RootLayout() {
  return (
    <div className="w-5/6 py-7 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
