import React from "react";
import Skills from "./Skills";
// import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div id="about" className="md:py-40 py-16 bg-gray-100 md:px-32 px-6">
      <div className="text-center md:w-2/3 mx-auto md:mb-36 mb-16">
        <h1 className="md:text-5xl text-3xl font-bold uppercase  md:tracking-widest tracking-wide md:mb-12 mb-6 ">
          About me
          <hr className="md:w-10 w-8 md:h-[.6rem] h-2 bg-[#0062b9]  rounded-full mx-auto md:mt-7 mt-3" />
        </h1>
        <p className="md:text-2xl text-[#777]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat
          minima dolores quis sit modi architecto aspernatur cumque libero
          provident?
        </p>
      </div>
      <div className="md:flex ">
        <div className="flex flex-col  flex-1 md:pr-20  ">
          <h1 className="md:mb-10 mb-4 capitalize  font-bold md:text-3xl text-2xl">
            get to know me!
          </h1>
          <p className="md:text-xl text-[#808080] tracking-wider leading-relaxed">
            Hey! It's <b>Muhammad Qasim</b> and I'm a{" "}
            <b>Frontend Web Developer</b>
            located in Los Angeles. I've done <b>remote</b> projects for
            agencies, consulted for startups, and collaborated with talented
            people to create <b>digital products</b> for both business and
            consumer use.
          </p>
          <p className="md:text-xl text-[#808080] mt-6 tracking-wider leading-relaxed">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to <b>contact</b> me here.
          </p>
          <button className="bg-[#0062b9] md:w-[12rem] w-[8rem]  md:py-4 py-2 text-white uppercase tracking-wide  font-bold rounded-md mt-[3rem]">
            contact me
          </button>
        </div>
        <div className="flex flex-col flex-1 md:mt-0 mt-16 ">
          <h1 className="mb-10 capitalize md:ml-3 ml-0 font-bold text-2xl md:text-3xl">
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
