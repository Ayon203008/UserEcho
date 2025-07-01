import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import Swal from "sweetalert2";

const MyReviewCradUpdate = () => {
  const updateReview = useLoaderData();
  const { textarea, date, _id } = updateReview;
  const [rating, setRating] = useState(5);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      textarea: form.textarea.value,
      date: form.date.value,
      rating: rating,
    };
    fetch(`https://assignment-11-ecru-sigma.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
        console.log(data);
      });
  };

  return (
    <div className="flex justify-center my-20">
      <form
        onSubmit={handleUpdate}
        className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4"
      >
        <legend className="fieldset-legend">Update your review</legend>

        <label className="label">Date</label>
        <input
          type="date"
          name="date"
          defaultValue={date}
          className="input w-full"
        />

        <label className="label">Textarea</label>
        <textarea
          placeholder="Primary"
          name="textarea"
          defaultValue={textarea}
          className="textarea textarea-primary w-full"
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
        <button className="btn btn-neutral mt-4">Update</button>
      </form>
    </div>
  );
};

export default MyReviewCradUpdate;
