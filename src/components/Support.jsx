import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import support from "../assets/support.jpg";
const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className=" text-3xl pt-8 text-slate-300 text-center">SUPPORT</h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Find The Right Guidance
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Your online mentor can elevate your career or be a shoulder to lean
            on. Get a personalized mentoring program, including curated study
            plans, regular check-ins, and unlimited actionable support. Be part
            of an online mentor community that spans across the globe.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-28 text-black">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <div className="max-w-[35px] bg-indigo-600 py-2 px-2 mt-[-3rem] rounded-lg">
                <FaPhoneAlt className=" text-white   " />
              </div>
              <h3 className="font-bold text-2xl my-6">Talk-It-Out</h3>
              <p className="text-gray-600 text-xl">
                When you’re stuck in a logjam, be it a design flaw, code defect,
                or career decision, skip the endless back-and-forth of essays
                and talk it out with your mentor on call.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <div className="max-w-[35px] bg-indigo-600 py-2 px-2 mt-[-3rem] rounded-lg">
                <AiOutlineGlobal className=" text-white   " />
              </div>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Get invaluable knowledge from veterans and founders. Through
                effective mentorship. Get an action plan, and gain wisdom from
                consistent mentoring sessions.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <div className="max-w-[35px] bg-indigo-600 py-2 px-2 mt-[-3rem] rounded-lg">
                <MdQueryStats className=" text-white   " />
              </div>
              <h3 className="font-bold text-2xl my-6">Expert mentorship</h3>
              <p className="text-gray-600 text-xl">
                Ask questions, kick the tires on a new idea, or discuss
                professional progress and improvements in your online mentoring
                sessions with unlimited messaging.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <FaArrowRight className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
