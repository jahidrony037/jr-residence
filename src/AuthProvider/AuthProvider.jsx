import PropTypes from "prop-types";
import { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allInfo = {
    name: "jahid rony",
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
