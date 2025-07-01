import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseReviewApi = () => {
  const axiosScure = UseAxiosSecure();

  const MyReviewPromise = (email) => {
    return axiosScure.get(`/reviews?email=${email}`, {}).then((res) => res.data);
  };

  return {
    MyReviewPromise
  };
};

export default UseReviewApi;
