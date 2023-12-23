import React from "react";
import { FaCheck } from "react-icons/fa";
const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[550px] bg-slate-900 absolute mix-blend-overlay">
        <div className="max-w-[1240px] mx-auto py-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-slate-100 text-center ">
            We provide a wealth of industry veterans and comprehensive mentoring
            packages.
          </h3>
          <p className="text-2xl text-center text-slate-200 pt-8">
            Pick from a curated collection of mentors and services. Try them out
            for 7 days with no obligation. Found your mentoring sessions useful?
            Move to a low-cost, monthly mentoring subscription.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white relative rounded-2xl  p-8 m-6 text-slate-900 shadow-2xl">
            <spand className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              basic
            </spand>
            <div className="">
              <p className="text-5xl font-bold py-4 flex">
                $29
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-1xl py-4 text-slate-500">
              Strategy to accomplish a future career or get further in your
              current position.
            </p>
            <div className="text-2xl">
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Intro Session
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Interview Guidance
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Career Strategy
              </p>

              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white relative rounded-2xl  p-8 m-6 text-slate-900 shadow-2xl">
            <spand className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </spand>
            <div className="">
              <p className="text-5xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-1xl py-4 text-slate-500">
              Working to build a good portfolio and resume in the job market
            </p>
            <div className="text-2xl">
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Intro Session
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                CV Review
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Portfolio Review
              </p>

              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white relative rounded-2xl  p-8 m-6 text-slate-900 shadow-2xl">
            <spand className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </spand>
            <div className="">
              <p className="text-5xl font-bold py-4 flex">
                $79
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-1xl py-4 text-slate-500">
              A mentor with startup, fundraising, and entrepreneurship
              experience.
            </p>
            <div className="text-2xl">
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Intro Session
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Pitch Deck Review
              </p>
              <p className="flex py-2">
                <FaCheck className="mr-5 text-green-900" />
                Launch Plan
              </p>

              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
