import Lottie from "lottie-react";
import React from "react";
import aboutLottie from "../assets/aboutLottie.json";
import { MdVerified } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-40 mb-40 px-6 py-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-xl rounded-3xl mx-5">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-mono mb-5 bg-gray-400 text-white inline-block px-4 py-2 rounded-xl shadow-md">
          What's in the app?
        </h1>
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Empower your voice with trusted reviews
        </h1>

        <div className="space-y-4 text-xl text-gray-800">
          <div className="flex items-center gap-3">
            <MdVerified className="text-3xl text-green-700" />
            <span>Verified service-based reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <MdVerified className="text-3xl text-green-700" />
            <span>Save time, build trust faster</span>
          </div>
          <div className="flex items-center gap-3">
            <MdVerified className="text-3xl text-green-700" />
            <span>AI-powered sentiment analysis</span>
          </div>
          <div className="flex items-center gap-3">
            <MdVerified className="text-3xl text-green-700" />
            <span>Easy-to-use feedback system</span>
          </div>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow-lg">
          <Lottie animationData={aboutLottie} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
