import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const UpdateProfile = () => {
  const { user, updateUser, setIsLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photo } = data;
    // console.log(name, photo);
    if (name === user.displayName) {
      return toast.warn("update name already exits in name field!");
    }
    updateUser(name, photo)
      .then(() => {
        setIsLoading(false);
        toast.success("update profile successfully done");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
        data-aos="zoom-in"
        data-aos-duration="1000"
      className="hero flex lg:flex-row flex-col  justify-center items-center gap-11 py-10 min-h-[calc(100vh-291px)]"
    >
      <Helmet>
        <title>update-profile</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h2 className="text-xl font-bold">Name: {user?.displayName}</h2>
      </div>
      <div className="card shrink-0 md:w-6/12 w-3/4 shadow-2xl bg-base-100">
        <h2 className="text-3xl text-center pt-6">
          <span className="text-[#267188]">Update</span> Your Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered focus:border-[#267188] focus:outline-none"
              defaultValue={`${user ? `${user?.displayName}` : "name"}`}
              {...register("name", {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "name have at least 3 character long",
                },
                maxLength: {
                  value: 20,
                  message: "name should be 20 character maximum",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z]).+$/,
                  message: "name has one Upper case or one Lower case letter",
                },
              })}
            />
            {errors?.name && (
              <span className="text-red-600 font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo URL"
              className="input input-bordered focus:border-[#267188] focus:outline-none"
              defaultValue={`${
                user
                  ? `${user?.photoURL}`
                  : "https://lh3.googleusercontent.com/ogw/AF2bZygL7FdZadPsU_kq5JLk4iGvvTHz0m-tgJZsBCDL=s32-c-mo"
              }`}
              {...register("photo", {
                required: "Photo URL is Required",
              })}
            />
          </div>
          {errors?.photo && (
            <span className="text-red-600">{errors.photo.message}</span>
          )}

          <div className="form-control mt-5">
            <button className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                Update Profile
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
