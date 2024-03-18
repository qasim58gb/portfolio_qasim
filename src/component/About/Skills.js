import React from "react";

const Skills = ({ text }) => {
  return (
    <>
      <span className="bg-gray-200 rounded-md py-2 md:py-4 px-4 md:px-8 md:m-3 m-2 text-[#777] font-bold tracking-wider ">
        {text}
      </span>
    </>
  );
};

export default Skills;
