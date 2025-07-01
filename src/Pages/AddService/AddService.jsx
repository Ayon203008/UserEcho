import React from "react";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = use(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const image = from.image.value;
    const title = from.title.value;
    const price = from.price.value;
    const category = from.category.value;
    const name = from.name.value;
    const date = from.date.value;
    const website = from.website.value;
    const description = from.description.value;
    console.log(
      email,
      image,
      title,
      price,
      category,
      name,
      date,
      website,
      description
    );

    const addServices = {
      User_email:email,
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
            title: "Your services has been submited",
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
    <div className="flex justify-center my-10">
      <form
        onSubmit={handleAddService}
        className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4"
      >
        <legend className="fieldset-legend text-4xl text-center font-serif">
          {" "}
          Add your Service
        </legend>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          className="input w-full"
          placeholder="Email"
        />

        <label className="label">image Url</label>
        <input
          type="url"
          name="image"
          className="input w-full"
          placeholder="image"
        />

        <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="title"
        />

        <label className="label">Price</label>
        <input
          type="text"
          name="price"
          className="input w-full"
          placeholder="Price"
        />

        <label className="label">Category</label>
        <input
          type="text"
          name="category"
          className="input w-full"
          placeholder="Category"
        />

        <label className="label">Compnay Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Compnay name"
        />

        <label className="label">Website Link</label>
        <input
          type="url"
          name="website"
          className="input w-full"
          placeholder="Link"
        />

        <label className="label">Date</label>
        <input type="date" name="date" className="input w-full" />

        <label className="label">Description</label>
        <textarea
          placeholder="Description"
          name="description"
          className="textarea textarea-primary w-full"
        ></textarea>

        <button className="btn btn-neutral mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
