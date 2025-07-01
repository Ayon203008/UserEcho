import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyServiceUpdate = () => {
  const service = useLoaderData();
  const { _id, name, title, date, category, price } = service;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedService = {
      title: form.title.value,
      name: form.name.value,
      price: form.price.value,
      category: form.category.value,
      date: form.date.value,
    };

    fetch(`https://assignment-11-ecru-sigma.vercel.app/services/${_id}`, {
      method: "PUT", // or "PATCH"
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedService)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Updated!", "Your service was updated successfully!", "success");
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-serif my-5">You can Update your data</h1>
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleUpdate}
          className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4"
        >
          <legend className="fieldset-legend text-2xl text-center">Update Your data</legend>

          <label className="label">Title</label>
          <input type="text" name="title" defaultValue={title} className="input w-full" />

          <label className="label">Name</label>
          <input type="text" name="name" defaultValue={name} className="input w-full" />

          <label className="label">Price</label>
          <input type="text" name="price" defaultValue={price} className="input w-full" />

          <label className="label">Category</label>
          <input type="text" name="category" defaultValue={category} className="input w-full" />

          <label className="label">Date</label>
          <input type="date" name="date" defaultValue={date} className="input w-full" />

          <button className="btn btn-neutral mt-4 w-full">Update</button>
        </form>
      </div>
    </div>
  );
};

export default MyServiceUpdate;
