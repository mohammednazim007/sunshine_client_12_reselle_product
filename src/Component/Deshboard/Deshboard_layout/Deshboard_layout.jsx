import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Link_list from "../Link_list/Link_list";
import "./list_css.css";

const Deshboard_layout = () => {
  return (
    <div className="">
      {/* deshboard navbar */}
      <div className="deshboard_nav fixed h-[80px] w-full top-0 z-50">
        <div className="flex items-center justify-between mt-[21px] px-[2rem]">
          <label
            htmlFor="my-drawer"
            className="flex items-center justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </label>
          <p className="deshboardText font-bold">Welcome to deshboard</p>
        </div>
      </div>

      {/* =============== */}
      <div className="py-[80px]">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}

            {/* dynamic container content */}
            <div className="container">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay "></label>
            <ul className="list_bg menu p-4 w-80 text-base-content  ">
              {/* <!-- Sidebar content here --> */}
              <Link_list />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshboard_layout;
