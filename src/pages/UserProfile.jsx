import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col justify-center items-center min-h-[calc(100vh-291px)] gap-6"
    >
      <Helmet>
        <title>user-profile</title>
      </Helmet>
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src={user?.photoURL} />
        </div>
      </div>

      <h3 className="text-xl">
        <span className="font-bold">Name : </span> {user?.displayName}
      </h3>
      <h3 className="text-xl">
        <span className="font-bold">Email : </span> {user?.email}
      </h3>
    </div>
  );
};

export default UserProfile;
