import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="py-40 bg-gray-100 px-32">
      <div className="text-center w-2/3 mx-auto mb-36">
        <h1 className="text-5xl font-bold uppercase s tracking-widest mb-12 ">
          About me
          <hr className="w-10 h-[.6rem] bg-[#0062b9]  rounded-full mx-auto mt-7" />
        </h1>
        <p className="text-2xl text-[#777]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat
          minima dolores quis sit modi architecto aspernatur cumque libero
          provident?
        </p>
      </div>
      <div className="flex ">
        <div className="flex flex-col flex-1 pr-20 ">
          <h1 className="mb-10 capitalize  font-bold text-3xl">
            get to know me!
          </h1>
          <p className="text-xl text-[#808080] tracking-wider leading-relaxed">
            Hey! It's <b>Muhammad Qasim</b> and I'm a{" "}
            <b>Frontend Web Developer</b>
            located in Los Angeles. I've done <b>remote</b> projects for
            agencies, consulted for startups, and collaborated with talented
            people to create <b>digital products</b> for both business and
            consumer use.
          </p>
          <p className="text-xl text-[#808080] mt-6 tracking-wider leading-relaxed">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to <b>contact</b> me here.
          </p>
          <button className="bg-[#0062b9] w-[12rem] py-[1rem] text-white uppercase tracking-wide text-[1.1rem] font-bold rounded-md mt-[3rem]">
            contact me
          </button>
        </div>
        <div className="flex flex-col flex-1 f">
          <h1 className="mb-10 capitalize ml-3 font-bold text-3xl">
            my skills
          </h1>
          <div className="flex flex-wrap">
            <Skills text="HTML" />
            <Skills text="CSS" />
            <Skills text="SASS" />
            <Skills text="Bootstrap" />
            <Skills text="Tailwind CSS" />
            <Skills text="JavaScript" />
            <Skills text="React" />
            <Skills text="Node JS" />
            <Skills text="MongoDB" />
            <Skills text="Python" />
            <Skills text="Git" />
            <Skills text="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
