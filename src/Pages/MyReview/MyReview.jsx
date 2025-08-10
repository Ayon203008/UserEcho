import React, { Suspense, use } from "react";
import MyReviewList from "./MyReviewList";
import { AuthContext } from "../../Context/AuthContext";
import UseReviewApi from "../../UseReviewApi";

const MyReview = () => {
  const { user } = use(AuthContext);
  const { MyReviewPromise } = UseReviewApi();

  return (
    <div>
      <h1 className="text-5xl text-center my-5">My all review</h1>
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
        <MyReviewList
          MyReviewPromise={MyReviewPromise(user.email)}
        ></MyReviewList>
      </Suspense>
    </div>
  );
};

export default MyReview;
