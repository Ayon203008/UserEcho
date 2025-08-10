import React from "react";
import CountUp from "react-countup";

const CountUpUser = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 my-40 px-5">
      {[ 
        { end: 100, label: "Total Users" }, 
        { end: 36, label: "Total Services" }, 
        { end: 185, label: "Total Reviewers" },
      ].map(({ end, label }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-3xl shadow-xl p-10 w-72 h-80 hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <CountUp
            end={end}
            duration={5}
            className="text-7xl font-extrabold text-blue-500 drop-shadow-md"
          />
          <h2 className="mt-4 text-3xl font-semibold tracking-wide font-serif text-center">
            {label}
          </h2>
          <div className="mt-2 w-16 h-1 bg-green-400 rounded-full opacity-70"></div>
        </div>
      ))}
    </div>
  );
};

export default CountUpUser;
