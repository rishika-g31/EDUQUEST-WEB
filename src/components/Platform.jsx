import React from "react";
import { FaCheck } from "react-icons/fa";
const Platform = () => {
  return (
    <div name="platforms" className="w-full my-52">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center ">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500  text-center">
          Step up your career game plan, prep up interviews, job search &
          promotion. Your mentor will listen to you, give solutions drawn from
          their experience and take you where you want to be.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Introductory Call</h3>
              <p className="text-lg pt-2 pb-4 ">
                If you're looking for a mentor, and you're just not sure about
                how this all works
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Resume Feedback</h3>
              <p className="text-lg pt-2 pb-4 ">
                Having a good resume on hand when going on the job hunt is
                crucial
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Linkedin Feedback</h3>
              <p className="text-lg pt-2 pb-4 ">
                This session is designed to help you optimize your LinkedIn
                profile for professional networking and career advancement.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Portfolio Feedback</h3>
              <p className="text-lg pt-2 pb-4 ">
                Having a good portfolio on hand is key for any designer in the
                job market.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Career Strategy</h3>
              <p className="text-lg pt-2 pb-4 ">
                Sometimes, a strategy is needed to accomplish a future career
                change, or simply to get further in your current position
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Work Review</h3>
              <p className="text-lg pt-2 pb-4 ">
                Not sure about your newest design? Not sure if your code is as
                good as it can be.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Study Plan</h3>
              <p className="text-lg pt-2 pb-4 ">
                Looking to learn a new skill? The vast amount of resources on
                any topic on the internet can feel overwhelming
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <FaCheck className="text-green-900 mr-3 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Interview Preparation</h3>
              <p className="text-lg pt-2 pb-4 ">
                Some big interviews coming up? In this 1-hour session, a mentor
                with hiring experience will act as a technical interviewer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
