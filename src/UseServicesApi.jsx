import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseServicesApi = () => {
  const axiosScure = UseAxiosSecure();
  const myServicesPromise = (email) => {
    return axiosScure.get(`/postedServices?email=${email}`, {}).then((res) => res.data);
  };
  return {
    myServicesPromise
  };
};

export default UseServicesApi;
