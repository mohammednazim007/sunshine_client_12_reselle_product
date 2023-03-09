import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useProvider } from "../../context/Context_provider";
import "./signup.css";
import storeRegisterUser from "./store_user";

const Sign_up = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // get user state from firebase
  const { createUserByEamilPassword, loading, setLoading, signOutUser } =
    useProvider();

  //navigate user
  const navigate = useNavigate();

  //signup handler
  const SignupHandler = (data) => {
    createUserByEamilPassword(data.email, data.password)
      .then(() => {
        singOutAftetLogin();
        toast.success("Register successfull");

        //store register user fn
        storeRegisterUser(data);

        navigate("/signin");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // //sign out user after register
  const singOutAftetLogin = () => {
    signOutUser()
      .then(() => {
        setLoading(false);
        reset();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="sign_up">
      <div className="container py-3 md:py-24">
        <section className="flex items-center justify-center my-9">
          <form
            onSubmit={handleSubmit(SignupHandler)}
            className="w-full max-w-xl space-y-6 md:px-16 md:shadow-2xl p-4 py-16"
          >
            {/* first name */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  maxLength: 20,
                })}
                aria-invalid={errors.name ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="Username"
              />
              {errors.name?.type === "required" && (
                <small className="block text-red-400" role="alert">
                  First name is required
                </small>
              )}
            </div>
            {/* email */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="email"
              />
              {errors.email && (
                <small className="text-red-400" role="alert">
                  {errors.email.message}
                </small>
              )}
            </div>
            {/* password */}{" "}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "minmun length is 6 character",
                  },
                  maxLength: {
                    value: 10,
                    message: "maximum length is 10 character",
                  },
                  pattern: {
                    value: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/,
                    message:
                      "Your password must contain at least one special character.",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                placeholder="password"
              />

              {errors.password && (
                <small className="text-red-400" role="alert">
                  {errors.password.message}
                </small>
              )}
            </div>
            {/* drop down list for user role addmin, seller,buyer */}
            <div className="relative ">
              <span className="absolute top-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </span>

              <select
                {...register("role")}
                className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            {/* submit button */}
            <div className="mt-6 mx-auto text-center">
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-[#273c75]  rounded-md text-white"
              >
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <span>Already have an account?</span>
                <Link
                  to="/signin"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400 ml-2"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Sign_up;
