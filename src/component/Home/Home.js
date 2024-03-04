import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)),url(https://dopefolio.netlify.app/assets/svg/common-bg.svg)",
      }}
      id="home"
      className="h-screen flex items-center  text-white"
    >
      <div>
        <ul className="flex flex-col     divide-y-4 border-4 justify-start">
          <SocialIcon icon={<FaLinkedinIn />} />
          <SocialIcon icon={<FaGithub />} />
          <SocialIcon icon={<FaTwitter />} />
          <SocialIcon icon={<FaInstagramSquare />} />
          <SocialIcon icon={<FaWhatsappSquare />} />
        </ul>
      </div>
      <div className="flex justify-center w-screen mx-8 ">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold uppercase text-center tracking-widest leading-normal">
            Hey, My name is Muhammad Qasim
          </h1>
          <p className="text-center text-2xl w-2/3 mt-14 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            inventore iure praesentium sequi cupiditate voluptatibus explicabo.
            Totam non eos sed!
          </p>
          <button className="px-24 py-5 mt-16 bg-white text-black rounded-md text-2xl font-bold uppercase">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
