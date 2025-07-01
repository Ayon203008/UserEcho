import React from 'react';
import { NavLink } from 'react-router';

const AllServiceCard = ({allService}) => {
    
    return (
        <div>
            <div className="card bg-base-100 w-96  p-5 border-2 shadow-2xl">
        <figure>
          <img
            src={allService.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {allService.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="card-title">
           Category : {allService.category}
            
          </h2>
          <h1 className="font-semibold">Price : {allService.price} $</h1>
          <p>
           {allService.description}
          </p>
          
          <NavLink to={`/services/${allService._id}`} className='btn btn-success mt-2'>See more</NavLink>
        </div>
      </div>
            
        </div>
    );
};

export default AllServiceCard;