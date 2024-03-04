import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SocialIcon = ({ icon }) => {
  return (
    <BrowserRouter>
      <>
        <li className=" p-4 hover:bg-blue-500 cursor-pointer">
          <Link to="/" className="text-3xl ">
            {icon}
          </Link>
        </li>
      </>
    </BrowserRouter>
  );
};

export default SocialIcon;
