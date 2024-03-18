import React from "react";
import image from "../../asset/project-mockup-example.jpeg";

const ProjectFile = ({ text }) => {
  return (
    <div className="md:flex mt-16 md:mt-[8rem] ">
      <div className="flex flex-1 mb-4 md:mb-0">
        <img src={image} alt="project img" />
      </div>
      <div className="flex flex-col flex-1 md:pr-20 justify-center md:ml-[6rem]">
        <h1 className="md:mb-10 mb-4 capitalize  font-bold md:text-3xl text-2xl">
          {text}
        </h1>
        <p className="md:text-xl text-[#808080] tracking-wider leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          amet rem ullam doloribus, magni at commodi voluptatum ipsum veritatis.
        </p>

        <button className="bg-[#0062b9] md:w-[12rem] w-[8rem] py-2 md:py-4 text-white uppercase tracking-wide font-bold rounded-md md:mt-[3rem] mt-4">
          Case study
        </button>
      </div>
    </div>
  );
};

export default ProjectFile;
