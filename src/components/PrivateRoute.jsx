import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Authentication/Authcontext";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return <p className="h-screen justify-center items-center">Loading...</p>;

  if (!user) {
    Swal.fire({
      icon: "warning",
      title: "Access Denied",
      text: "Please log in to continue",
      confirmButtonColor: "#D4AF37",
    });

    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoute;
