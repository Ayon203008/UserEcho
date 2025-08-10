import React from "react";
import { NavLink } from "react-router";

const ServiceCard = ({ service }) => {
  const { title, image, category, _id, description, price } = service;
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Title & Badge */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-100">{title}</h2>
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
        </div>

        {/* Category */}
        <p className="text-sm text-gray-400">
          <span className="font-medium text-gray-200">Category:</span> {category}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-green-400">${price}</p>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>

        {/* Button */}
        <NavLink
          to={`/services/${_id}`}
          className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors duration-300"
        >
          See More
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
