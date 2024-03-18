import React from "react";
import ProjectFile from "./ProjectFile";

const Project = () => {
  return (
    <div id="projects" className="py-16 md:py-40 bg-white md:px-32 px-6">
      <div className="text-center md:w-2/3 mx-auto mb-16 md:mb-36">
        <h1 className="md:text-5xl text-3xl font-bold uppercase  md:tracking-widest tracking-wide md:mb-12 mb-6 ">
          projects
          <hr className="md:w-10 w-8 md:h-[.6rem] h-2 bg-[#0062b9]  rounded-full mx-auto md:mt-7 mt-3" />
        </h1>
        <p className="md:text-2xl text-[#777]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat
          minima dolores quis sit modi architecto.
        </p>
      </div>
      <div>
        <ProjectFile text="Project 1" />
        <ProjectFile text="Project 2" />
        <ProjectFile text="Project 3" />
      </div>
    </div>
  );
};

export default Project;
