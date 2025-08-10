import React from "react";
import { NavLink, useLoaderData } from "react-router";

const ServicesDetails = () => {
  const { title, image, category, _id, description, price } = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4 py-10">
      <div className="hero-content flex flex-col lg:flex-row bg-gray-800 rounded-2xl shadow-xl max-w-7xl p-8 lg:p-16">
        <div className="mr-0 lg:mr-16 mb-8 lg:mb-0 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full max-w-[700px] h-[400px] object-cover shadow-2xl border border-gray-700"
          />
        </div>

        <div className="flex flex-col justify-center max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-indigo-400">{title}</h1>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-300">
            Category: <span className="text-gray-300">{category}</span>
          </h2>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
            Price: <span className="text-green-400">${price}</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">{description}</p>

          <NavLink to={`/reviewPage/${_id}`}>
            <button
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-indigo-500/50"
            >
              Give a Review
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
