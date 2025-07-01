import React, { use } from "react";
import UserIcon from "../../assets/user.png";
import { LuArrowBigUpDash } from "react-icons/lu";
import { AiTwotoneDelete } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthContext";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { NavLink } from "react-router";

const MyReviewCard = ({ review, handleDelete }) => {
  


 

  const { user } = use(AuthContext);

  return (
    <div className="bg-gray-700 p-5 border-2 rounded-2xl shadow-2xl flex gap-10 items-center">
      <div>
        <img
          src={user ? user.photoURL : UserIcon}
          alt="User"
          className="rounded-2xl w-[50px] h-[50px]"
        />
      </div>

      <div className="text-white">
        <h1 className="font-semibold font-sans">
          Title: {review.title}        </h1>
        <h1 className="font-semibold font-sans">
          Text Review: {review.textarea}
        </h1>
        <h1 className="font-semibold font-sans">Date: {review.date}</h1>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold font-sans">Rating:</span>
          <Rating
            initialRating={review.rating}
            readonly
            emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
            fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
          />
          <span className="text-white text-sm">({review.rating})</span>
        </div>

        <div className="flex gap-5 mt-5">
          <NavLink to={`/reviewUpdate/${review._id}`}>
            <button className="btn btn-sm btn-success">
              <LuArrowBigUpDash /> Update
            </button>
          </NavLink>
          <button
            onClick={() => handleDelete(review._id)}
            className="btn btn-sm btn-secondary"
          >
            <AiTwotoneDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
