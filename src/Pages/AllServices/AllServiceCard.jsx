import React from 'react';
import { NavLink } from 'react-router';

const AllServiceCard = ({ allService }) => {
  return (
    <div className="max-w-sm bg-gray-800 rounded-xl border border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={allService.image}
          alt={allService.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-100 mb-1">{allService.title}</h2>
        <p className="text-sm text-gray-400 mb-3">{allService.category}</p>

        <p className="text-xl font-bold text-green-400 mb-3">${allService.price}</p>

        <p className="text-gray-300 text-sm mb-5 line-clamp-3">{allService.description}</p>

        {/* Button */}
        <NavLink
          to={`/services/${allService._id}`}
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-900 text-white font-medium py-2 rounded-lg transition-colors duration-300"
        >
          See More
        </NavLink>
      </div>
    </div>
  );
};

export default AllServiceCard;
