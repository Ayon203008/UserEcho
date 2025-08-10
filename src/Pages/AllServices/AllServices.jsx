import React from "react";
import { Suspense } from "react";
import AllServicesList from "./AllServicesList";

const AllServices = () => {
  const allServicesPromise = fetch(
    "https://assignment-11-ecru-sigma.vercel.app/allServices"
  ).then((res) => res.json());

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span>
          </div>
        }
      >
        <AllServicesList
          allServicesPromise={allServicesPromise}
        ></AllServicesList>
      </Suspense>
    </div>
  );
};

export default AllServices;
