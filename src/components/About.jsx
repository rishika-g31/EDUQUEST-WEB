import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className=" text-4xl md:text-5xl font-bold">
            Trusted by Developers across the world
          </h2>
          <p className="text-2xl md:text-3xl py-8 text-gray-500">
            Learning is an important step for achieving dreams in a student’s
            journey. We encourage the student to explore the concept in depth
            instead of memorizing. The live lectures help us in learning the
            needs of the students and motivates the students to be creative and
            be passionate learners.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="font-bold text-4xl text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="font-bold text-4xl text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Ask Doubt</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="font-bold text-4xl text-indigo-600">100k+</p>
            <p className="text-gray-400 mt-2">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
