import React from "react";
import ProjectFile from "./ProjectFile";

const Project = () => {
  return (
    <div id="projects" className="py-40 bg-white px-32">
      <div className="text-center w-2/3 mx-auto mb-36">
        <h1 className="text-5xl font-bold uppercase s tracking-widest mb-12 ">
          projects
          <hr className="w-10 h-[.6rem] bg-[#0062b9]  rounded-full mx-auto mt-7" />
        </h1>
        <p className="text-2xl text-[#777]">
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
