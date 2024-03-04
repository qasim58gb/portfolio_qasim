import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)),url(https://dopefolio.netlify.app/assets/svg/common-bg.svg)",
      }}
      id="contact"
      className="min-h-screen w-full flex items-start flex-col  text-white"
    >
      <div className="text-center w-2/3 mx-auto my-28">
        <h1 className="text-5xl font-bold uppercase  tracking-widest mb-12 ">
          Contact
          <hr className="w-10 h-[.6rem] bg-white  rounded-full mx-auto mt-7" />
        </h1>
        <p className="text-2xl ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat
          minima dolores quis sit modi architecto aspernatur cumque libero
          provident?
        </p>
      </div>
      <div className=" bg-white mx-auto w-[55%] rounded-[13px]">
        <form className="flex flex-col space-y-14 w-[90%] mx-auto p-12 text-[#333] ">
          <input
            className="bg-[#f0f0f0] p-[1.3rem] font-[600] text-[1.4rem] border-[1px] rounded-md"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="bg-[#f0f0f0] p-[1.3rem] font-[600] text-[1.4rem] border-[1px] rounded-md"
            type="email"
            placeholder="Enter your  email address"
          />
          <textarea
            className="bg-[#f0f0f0] p-[1.3rem] font-[600] text-[1.4rem] border-[1px] rounded-md"
            name="massege"
            cols="30"
            rows="10"
            placeholder="Enter your massege"
          ></textarea>
          <button className="bg-[#0062b9] ml-auto w-[12rem] py-[1rem] text-white uppercase tracking-wide text-[1.1rem] font-bold rounded-md mt-[3rem]">
            contact me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
