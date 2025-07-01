import React, { use, useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import {  useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const ReviewPage = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(5);
    const { user } = use(AuthContext)

  const handleReview = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const textarea = e.target.textarea.value;

    const review = {
      id,
      date,
      textarea,
      applicant:user.email,
      rating,
    };
    axios
      .post("https://assignment-11-ecru-sigma.vercel.app/reviews", review)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleReview}
        className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4"
      >
        <legend className="fieldset-legend">Login</legend>

        {/* 🔸 Date input (unchanged, as you requested) */}
        <label className="label">Date</label>
        <input type="date" name="date" className="input w-full" required />

        {/* 🔸 Textarea for review */}
        <label className="label mt-4">Write your Review</label>
        <textarea
          placeholder="Review"
          className="textarea textarea-primary w-full"
          name="textarea"
          required
        ></textarea>

        <div className="mt-3">
          <div className="flex items-center gap-3">
            <div>
              <label className="label text-xl">Rating</label>
            </div>
            <div>
              <Rating
                initialRating={rating}
                onChange={(rate) => setRating(rate)}
                emptySymbol={<FaRegStar className="text-yellow-400 text-2xl" />}
                fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
              />
            </div>
          </div>
          <p className="text-sm mt-1 text-gray-500">
            Rating: {rating} out of 5
          </p>
        </div>

        <button className="btn btn-neutral mt-4">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;
