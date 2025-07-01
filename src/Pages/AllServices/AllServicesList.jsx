import React from "react";
import { use } from "react";
import AllServiceCard from "./AllServiceCard";
import { useState } from "react";

const AllServicesList = ({ allServicesPromise }) => {
  const allServices = use(allServicesPromise);
  const [Services, setAllServices] = useState(allServices);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`https://assignment-11-ecru-sigma.vercel.app/searchServices?q=${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  };

  const handleFilterChange = (e) => {
  const selectedCategory = e.target.value;
  fetch(`https://assignment-11-ecru-sigma.vercel.app/servicesFilter?category=${selectedCategory}`)
    .then(res => res.json())
    .then(data => setAllServices(data));
};

  return (
    <div>
      <div className="flex justify-center gap-2 my-10">
        <div>
          <input
            type="text"
            value={searchText}
            placeholder="What do you want to search?"
            className="input w-md "
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-secondary " onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          <select  className="select" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Photography">Photography</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Education">Education</option>
            <option value="Childcare">Childcare</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mb-40">
        {Services.map((allService) => (
          <AllServiceCard allService={allService}></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServicesList;
