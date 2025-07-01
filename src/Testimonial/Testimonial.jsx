import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="mb-20 px-5">
   
      <div className="text-center">
        <h1 className="inline-block mb-5 text-xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 text-gray-900 px-6 py-2 rounded-full shadow-md">
          Testimonial
        </h1>
      </div>

     
      <div className="text-center mb-10 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
          What users say about our app
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl mx-auto p-10 md:p-16 border-t-8 border-indigo-300">
        

        <div className="flex gap-2 justify-center pb-5">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-3xl text-yellow-400" />
          ))}
        </div>

        <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed text-center mb-10">
          “Excellent Experience! I had a fantastic time using this website! The interface is clean,
          fast, and super easy to navigate. I found what I needed within minutes. 
          Customer support was also very responsive and helpful. Highly recommended for 
          anyone looking for a smooth and user-friendly experience!”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src="https://i.ibb.co/gLcXdtcW/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg"
            alt="User"
            className="w-[80px] h-[80px] rounded-full object-cover border-4 border-indigo-300"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Francois Mercer</h1>
            <p className="italic text-gray-600">Content Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
