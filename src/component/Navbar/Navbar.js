import React, { useEffect, useState } from "react";
import Image from "../../asset/IMG_1314.jpg";
import Navlink from "./NavLink";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(false);
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className=" shadow-lg fixed top-0 left-0 w-full ">
        <div className="md:flex items-center justify-between py-4 md:px-20 px-0 text-gray-500  uppercase bg-slate-50">
          <div className="flex items-center gap-4 font-bold cursor-pointer md:pl-0 pl-7 md:text-xl ">
            <img className="w-16 rounded-full" src={Image} alt="..img" />
            <span className=" hover:text-blue-500">Muhammad Qasim</span>
          </div>
          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-slate-50 md:z-auto z-[-1] letf-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-490px]"
              }`}
            >
              {Navlink.map((nav, i) => (
                <li className="md:ml-12 md:text-xl font-bold md:my-0 my-7  hover:text-blue-500">
                  <Link key={i} to={nav.Link} smooth>
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute right-8 top-9 cursor-pointer md:hidden  hover:text-blue-500"
          >
            {open ? <IoIosClose /> : <IoIosMenu />}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
