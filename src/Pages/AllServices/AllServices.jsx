import React from "react";
import { Suspense } from "react";
import AllServicesList from "./AllServicesList";

const AllServices = () => {
  const allServicesPromise = fetch("https://assignment-11-ecru-sigma.vercel.app/allServices").then(
    (res) => res.json()
  );

  return (
    <div>
      <Suspense fallback={"Loading...."}>
        <AllServicesList
          allServicesPromise={allServicesPromise}
        ></AllServicesList>
      </Suspense>
    </div>
  );
};

export default AllServices;
