import React from "react";
import image from "../../asset/project-mockup-example.jpeg";

const ProjectFile = ({ text }) => {
  return (
    <div className="flex mt-[8rem] ">
      <div className="flex flex-1">
        <img src={image} alt="project img" />
      </div>
      <div className="flex flex-col flex-1 pr-20 justify-center ml-[6rem]">
        <h1 className="mb-10 capitalize  font-bold text-3xl">{text}</h1>
        <p className="text-xl text-[#808080] tracking-wider leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          amet rem ullam doloribus, magni at commodi voluptatum ipsum veritatis.
        </p>

        <button className="bg-[#0062b9] w-[12rem] py-[1rem] text-white uppercase tracking-wide text-[1.1rem] font-bold rounded-md mt-[3rem]">
          Case study
        </button>
      </div>
    </div>
  );
};

export default ProjectFile;
