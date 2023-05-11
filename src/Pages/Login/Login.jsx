import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import { Layout } from "../../Utils/Layout";
import { AutLogin, ClearError } from "../../Redux/action/authAction";
import { isAuthentication } from "../../Utils/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { auth, errors } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (auth) {
      alert.success(auth.message);
    }
  }, [alert, auth]);

  useEffect(() => {
    if (errors) {
      alert.error(errors);
    }
    dispatch(ClearError());
  }, [dispatch, alert, errors]);

  const redirectUser = () => {
    if (isAuthentication()) return navigate("/");
  };

  return (
    <Layout title="Login Page | Online Hotel Booking App">
      <div className="container">
        <div className="py-[80px] md:w-[800px] m-auto">
          {redirectUser()}
          <div className="bg-[#F9FAFC] rounded-[7px]">
            <div>
              <h4 className="text-[25px] font-OpenSans font-bold text-center py-[10px]">
                Welcome to Hotel Booking App :)
              </h4>
              <p className="text-[20px] font-Item font-medium md:px-[20px] pb-[50px]">
                To keep connected with us please login with your personal
                information by email address and password{" "}
                <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
              </p>
            </div>

            {/* Form */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                } else if (!values.password) {
                  errors.password = "Required";
                } else if (
                  !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/i.test(
                    values.password
                  )
                ) {
                  errors.password = "Strong password";
                }
                return errors;
              }}
              onSubmit={(e) => {
                dispatch(AutLogin(e.email, e.password));
              }}
            >
              {({
                errors,
                touched,
                values,
                handleChange,
                handleSubmit,
                handleBlur,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                      <MdAlternateEmail className="absolute ml-1 text-[20px]" />{" "}
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email Address"
                        required
                        className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      />
                    </span>
                    <div className="md:w-[80%] max-[767px]:w-[100%] m-auto">
                      <span className="font-sans font-bold text-[red] py-3">
                        {errors.email && touched.email && errors.email}
                      </span>
                    </div>
                  </div>
                  <br />
                  {/* Login input Password */}
                  <div>
                    <span className="flex items-center  relative md:w-[80%] max-[767px]:w-[100%] m-auto pb-[25px]">
                      <BsFillShieldLockFill className="absolute ml-1 text-[20px]" />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder="Password"
                        className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      />
                    </span>
                    <div className="md:w-[80%] max-[767px]:w-[100%] m-auto">
                      <span className="font-sans font-bold text-[red] pb-3">
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                  </div>

                  {/* accept login */}
                  <div className="md:w-[80%] max-[767px]:w-[100%] m-auto pb-[20px]">
                    <div>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        required
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor="checkbox"
                        className="font-Roboto font-semibold ml-[5px]"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="md:w-[80%] max-[767px]:w-[100%] m-auto pb-[50px] ">
                    <button
                      type="submit"
                      className="bg-[#006db1] font-OpenSans font-semibold text-white px-[20px] py-[5px] capitalize mr-[20px] rounded-[5px] inline-block cursor-pointer hover:bg-[#2e98da] duration-700 mt-2"
                    >
                      Login Now
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
