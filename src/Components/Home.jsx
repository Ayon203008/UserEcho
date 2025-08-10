import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import Services from "./Services";
import About from "../About.jsx/About";
import Testimonial from "../Testimonial/Testimonial";
import MeetOurParents from "../MeetOurPartners/MeetOurParents";
import CountUpUser from "../CountUpUser/CountUpUser";

const Home = () => {
  const servicesPromise = fetch(
    "https://assignment-11-ecru-sigma.vercel.app/services/home"
  ).then((res) => res.json());
  return (
    <div className="mt-10 mb-30">
      <Banner></Banner>
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
        <Services servicesPromise={servicesPromise}></Services>
      </Suspense>
      <About></About>
      <MeetOurParents></MeetOurParents>
      <Testimonial></Testimonial>
      <CountUpUser></CountUpUser>
    </div>
  );
};

export default Home;
