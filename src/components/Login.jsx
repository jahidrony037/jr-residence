import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, handleGoogleLogin, handleGithubLogin, setIsLoggedIn } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { password, email } = data;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("User Login Successful");
          setIsLoggedIn(true);

          location.state ? navigate(`${location.state}`) : navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });

    reset();
  };

  const handleLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;

        if (user) {
          setIsLoggedIn(true);
          toast.success("user login successfully done");
          location.state ? navigate(`${location.state}`) : navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="hero flex flex-col justify-center items-center py-10 min-h-[calc(100vh-291px)]"
    >
      <Helmet>
        <title>login</title>
      </Helmet>
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
            <div className="relative w-full">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered w-full focus:border-[#267188] focus:outline-none"
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
              {showPassword ? (
                <LuEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                  size={30}
                />
              ) : (
                <LuEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                  size={30}
                />
              )}
            </div>
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
        <div className="h-[1px] border-[1px] border-solid border-[#267188] w-3/4 mx-auto mt-10  "></div>
        <div className=" flex flex-col lg:w-1/2 mx-auto mt-5 mb-5">
          <button
            onClick={() => handleLogin(handleGoogleLogin)}
            className="btn border-[#267188] text-[#267188]"
          >
            <FcGoogle size={35} />
            Login with Google
          </button>
          <div className="flex justify-center items-center w-full">
            <div className="border-[1px] h-[1px] w-full border-[#267188]"></div>
            <div className="px-1">or</div>
            <div className="border-[1px] h-[1px] w-full border-[#267188]"></div>
          </div>
          <button
            onClick={() => handleLogin(handleGithubLogin)}
            className="btn border-[#267188] btn-outline text-[#267188]"
          >
            <IoLogoGithub size={35} />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
