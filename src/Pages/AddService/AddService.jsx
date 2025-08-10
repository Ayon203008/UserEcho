import React from "react";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = use(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const image = form.image.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const name = form.name.value;
    const date = form.date.value;
    const website = form.website.value;
    const description = form.description.value;

    const addServices = {
      User_email: email,
      image,
      title,
      price,
      category,
      name,
      date,
      website,
      description,
    };

    axios
      .post("https://assignment-11-ecru-sigma.vercel.app/services", addServices)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your service has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <div className="flex justify-center my-10 px-4">
      <form
        onSubmit={handleAddService}
        className="w-full max-w-xl bg-gray-900 text-gray-200 rounded-3xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-indigo-400">
          Add Your Service
        </h2>

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user?.email || ""}
          readOnly
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Image URL</label>
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price in USD"
          min="0"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Company Name</label>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Website Link</label>
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          name="date"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
        />

        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          name="description"
          placeholder="Write a brief description"
          rows="5"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-white font-semibold py-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
