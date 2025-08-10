import React, { useState } from "react";
import { use } from "react";
import AllServiceCard from "./AllServiceCard";

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
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  };

  // Sorting function
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    let sortedServices = [...Services];

    if (sortType === "asc") {
      sortedServices.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      sortedServices.sort((a, b) => b.price - a.price);
    }

    setAllServices(sortedServices);
  };

  return (
    <div>
      <div className="flex justify-center gap-2 my-10">
        {/* Search */}
        <div>
          <input
            type="text"
            value={searchText}
            placeholder="What do you want to search?"
            className="input w-md"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-secondary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Filter */}
        <div>
          <select className="select" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Photography">Photography</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Education">Education</option>
            <option value="Childcare">Childcare</option>
            <option value="Technology">Technology</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <select className="select" onChange={handleSortChange}>
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-3 gap-10 mb-40">
        {Services.map((allService) => (
          <AllServiceCard key={allService._id} allService={allService} />
        ))}
      </div>
    </div>
  );
};

export default AllServicesList;
