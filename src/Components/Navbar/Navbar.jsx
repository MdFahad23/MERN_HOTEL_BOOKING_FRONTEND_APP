import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

import { isAuthentication, signOut } from "../../Utils/auth";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#003580] py-[15px] align-middle">
      <div className="container flex justify-between items-center text-white">
        <NavLink
          to="/"
          style={{ color: "inherit", textDecoration: "none" }}
          className=" font-sans font-medium"
        >
          lamabooking
        </NavLink>
        <div>
          {!isAuthentication() && (
            <>
              <NavLink
                to="/register"
                className="mr-4 font-sans font-medium py-[5px] px-[10px] bg-[#fff] text-[#003580]"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="py-[5px] font-sans font-medium px-[10px] bg-[#fff] text-[#003580]"
              >
                Login
              </NavLink>
            </>
          )}
          {isAuthentication() && (
            <>
              <span
                className=" justify-center cursor-pointer flex items-center py-[5px] font-sans font-medium px-[10px] bg-[#fff] text-[#003580]"
                onClick={() => {
                  signOut(navigate("/login"));
                }}
              >
                <AiOutlineLogout className="mr-[8px]" /> Logout
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
