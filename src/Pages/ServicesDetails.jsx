import React from "react";
import { NavLink, useLoaderData } from "react-router";

const ServicesDetails = () => {
  const { title, image, category, _id, description,   price } =useLoaderData();

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-10">
            <img
              src={image}
              className="max-w-full rounded-lg w-[800px] h-[400px] shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <h1 className="text-3xl mt-5 font-semibold">
              Category: {category}
            </h1>
          
            <h1 className="text-3xl mt-5 font-semibold">Price : {price}$</h1>
            <p className="py-6">{description}</p>
            <NavLink to={`/reviewPage/${_id}`}>
              <button className="btn btn-primary">Give a Review</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
