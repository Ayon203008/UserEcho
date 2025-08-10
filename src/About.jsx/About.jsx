import Lottie from "lottie-react";
import React from "react";
import aboutLottie from "../assets/aboutLottie.json";
import { MdVerified } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mt-40 mb-40 px-8 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl text-gray-300 max-w-7xl mx-auto">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <h1 className="text-4xl font-mono mb-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold select-none">
          What's in the app?
        </h1>
        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          Empower your voice with trusted reviews
        </h2>

        <div className="space-y-5 text-lg md:text-xl">
          {[
            "Verified service-based reviews",
            "Save time, build trust faster",
            "AI-powered sentiment analysis",
            "Easy-to-use feedback system",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <MdVerified className="text-green-400 text-4xl flex-shrink-0" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-lg bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 p-6 rounded-3xl shadow-xl">
          <Lottie animationData={aboutLottie} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
