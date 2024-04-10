import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const allInfo = useContext(AuthContext);
  return allInfo;
};

export default useAuth;
