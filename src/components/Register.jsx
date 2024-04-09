import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero flex flex-col justify-center items-center py-10  min-h-[calc(100vh-291px)]">
      <div className="card shrink-0 md:w-6/12 w-3/4 shadow-2xl bg-base-100">
        <h2 className="text-3xl text-center pt-6">
          Please <span className="text-[#267188]">Register</span> Here
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
              {...register("name", {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "name should be at least 3 character",
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
              <span className="label-text text-md">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered focus:border-[#267188] focus:outline-none"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "example@gmail.com",
                },
              })}
            />
            {errors?.email && (
              <span className="text-red-600 font-semibold">
                {errors.email.message}
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered focus:border-[#267188] focus:outline-none"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password should be 6 character long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "password contain at least one Upper case and one Lower case letter",
                },
              })}
            />
            {errors?.password && (
              <span className="text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="form-control mt-5">
            <button className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                Register
              </span>
            </button>
          </div>
        </form>

        <p className="text-center text-md py-3">
          Already have an account?{" "}
          <span className="text-[#267188] underline">
            <Link to="/login">Please Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
