import React from "react";
import Input from "./Input";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)),url(https://dopefolio.netlify.app/assets/svg/common-bg.svg)",
      }}
      id="contact"
      className="md:min-h-screen min-h-[70vh] w-full flex items-start flex-col  text-white px-6 py-16 md:py-40 md:px-0 "
    >
      <div className="text-center md:w-2/3 mx-auto md:mb-28 mb-14">
        <h1 className="text-3xl md:text-5xl font-bold uppercase  tracking-wide md:tracking-widest md:mb-12 mb-6 ">
          Contact
          <hr className="md:w-10 w-8 md:h-[.6rem] h-2 bg-white  rounded-full mx-auto md:mt-7 mt-3" />
        </h1>
        <p className="md:text-2xl md:px-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat
          minima dolores quis sit modi architecto aspernatur cumque libero
          provident?
        </p>
      </div>
      <div className=" bg-white md:mx-auto  w-full md:w-[55%] rounded-[13px]">
        <Input />
      </div>
    </div>
  );
};

export default Contact;
