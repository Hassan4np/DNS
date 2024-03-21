import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useAuth = () => {
  const Authcontext = useContext(AuthContext);
  return Authcontext;
};

export default useAuth;
