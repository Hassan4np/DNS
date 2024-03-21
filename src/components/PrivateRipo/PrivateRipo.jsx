import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import RingLoader from "react-spinners/ClipLoader";
const PrivateRipo = ({ children }) => {
  const loc = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <h1>
        <RingLoader color="#36d7b7" />
      </h1>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={loc.pathname} to="/login"></Navigate>;
  }
};
PrivateRipo.propTypes = {
  children: PrivateRipo.node, // Add validation for the 'children' prop
};
export default PrivateRipo;
