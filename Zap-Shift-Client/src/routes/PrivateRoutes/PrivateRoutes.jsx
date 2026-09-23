import { Navigate, useLocation } from "react-router";
import Loading from "../../components/Ui/Loading/Loading";
import useAuth from "../../hooks/useAuth";

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;

  if (!user) return <Navigate state={location?.pathname} to={"/auth/login"} />

  return children;
}

export default PrivateRoutes;
