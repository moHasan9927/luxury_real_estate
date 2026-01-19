import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Authentication/Authcontext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return <p className="h-screen justify-center items-center">Loading...</p>;
  return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
