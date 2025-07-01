import React from "react";
import { NavLink } from "react-router";

const ServiceCard = ({ service }) => {
  const { title, image, category, _id,description,price } = service;
  return (
    <div>
      <div className="card bg-base-100 w-96  p-5 border-2 shadow-2xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="card-title">
           Category : {category}
            
          </h2>
          <h1 className="font-semibold">Price : {price} $</h1>
          <p>
           {description}
          </p>
          
          <NavLink to={`/services/${_id}`} className='btn btn-success mt-2'>See more</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
