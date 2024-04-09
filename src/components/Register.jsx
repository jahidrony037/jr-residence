import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <div>
      <h2>Register Page</h2>
    </div>
  );
};

export default Register;
