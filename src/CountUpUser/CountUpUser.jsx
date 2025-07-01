import React from "react";
import CountUp from "react-countup";

const CountUpUser = () => {
  return (
    <div className="flex gap-5 my-40">
      <div className="flex gap-5 p-5 border-2 items-center bg-gray-800 rounded-4xl">
        <div>
          <CountUp
            end={100}
            duration={5}
            className="text-8xl font-semibold text-green-600"
          ></CountUp>
        </div>
        <div>
          <h1 className="text-5xl font-semibold font-serif">Total User</h1>
        </div>
      </div>
      <div className="flex gap-5 p-5 border-2 items-center bg-gray-800 rounded-4xl">
        <div>
          <CountUp
            end={36}
            duration={5}
            className="text-8xl font-semibold text-green-600 "
          ></CountUp>
        </div>
        <div>
          <h1 className="text-5xl font-semibold font-serif">Total Services</h1>
        </div>
      </div>
      <div className="flex gap-5 p-5 border-2 items-center bg-gray-800 rounded-4xl">
        <div>
          <CountUp
            end={185}
            duration={5}
            className="text-8xl font-semibold text-green-600"
          ></CountUp>
        </div>
        <div>
          <h1 className="text-5xl font-semibold font-serif">Total Reviwer</h1>
        </div>
      </div>
    </div>
  );
};

export default CountUpUser;
