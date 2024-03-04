import React from "react";
import Image from "../../asset/IMG_1314.jpg";
import Navlink from "./NavLink";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full justify-between items-center  text-1xl font-bold text-gray-500 uppercase px-20 py-5 sticky top-0 bg-slate-50">
        <div className="flex items-center space-x-3  hover:text-blue-500 cursor-pointer">
          <img src={Image} className="size-14 rounded-full" alt="logo" />
          <h1>Muhammad Qasim</h1>
        </div>
        <div className="flex space-x-20">
          {Navlink.map((nav, i) => (
            <Link
              className="list-none hover: hover:text-blue-500 cursor-pointer"
              key={i}
              to={nav.Link}
              smooth
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
