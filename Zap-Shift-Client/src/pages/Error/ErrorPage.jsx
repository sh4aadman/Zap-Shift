import { Link } from "react-router";
import errorImage from "../../assets/Error.png";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

function ErrorPage() {
  return (
    <div className="w-5/6 py-7 mx-auto">
      <Navbar />
      <div className="my-8 py-20 max-h-screen rounded-4xl bg-white flex flex-col items-center">
        <img src={errorImage} alt="error-page-image" />
        <Link to={"/"} className="px-7 py-4 rounded-xl bg-primary font-bold text-xl text-[#1F1F1F]">
          Go Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
