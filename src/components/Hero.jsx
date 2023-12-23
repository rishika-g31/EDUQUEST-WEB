import React from "react";
import { FaPaperPlane, FaChalkboardTeacher, FaPencilAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import p1 from "../assets/p1 (1).png";
const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">
            Learn a new skill, launch a project, land your dream career.
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            One-on-One Mentorship
          </h1>

          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full h-[42vh]" src={p1} alt="" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className=" text-[1rem] text-indigo-500 font-bold">Our Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-gray-500">
              <FaPaperPlane className="mr-2 h-6 text-indigo-500" /> Ask Doubts
            </p>
            <p className="flex px-4 py-2 text-gray-500">
              <FaChalkboardTeacher className="mr-2 h-6 text-indigo-500" />
              Find Your Mentor
            </p>
            <p className="flex px-4 py-2 text-gray-500">
              <FaPencilAlt className="mr-2 h-6 text-indigo-500" />
              Apply for Mentorship
            </p>
            <p className="flex px-4 py-2 text-gray-500">
              <BsGraphUpArrow className="mr-2 h-6 text-indigo-500" />
              Level up Your Skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
