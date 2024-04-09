import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero flex justify-center items-center py-10 min-h-[calc(100vh-291px)]">
      <div className="card shrink-0 md:w-6/12 w-3/4 shadow-2xl bg-base-100">
        <h2 className="text-3xl text-center pt-6">
          Please <span className="text-[#267188]">Login</span> Here
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
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
              })}
            />
            {errors?.password && (
              <span className="text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-5">
            <button className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                Login
              </span>
            </button>
          </div>
        </form>

        <p className="text-center text-md py-3">
          Don’t have an account?{" "}
          <span className="text-[#267188] underline">
            <Link to="/register">Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
