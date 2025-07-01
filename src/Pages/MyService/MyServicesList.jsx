import React, { useState } from "react";
import { use } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const MyServicesList = ({ myServicesPromise }) => {
  const myServics = use(myServicesPromise);
  const [service, setService] = useState(myServics);

  // ✅ Handle Delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-ecru-sigma.vercel.app/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your service has been deleted.", "success");
            const remaining = service.filter((s) => s._id !== _id);
            setService(remaining);
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full my-20">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {service.map((s, index) => (
            <tr key={s._id}>
              <td>{index + 1}</td>
              <td>{s.title}</td>
              <td>{s.name}</td>
              <td>{s.category}</td>
              <td>{s.price}</td>
              <td>{s.date}</td>
              <td>
                <NavLink to={`/update/${s._id}`}>

                <button className="btn btn-sm btn-success">Update</button>
                </NavLink>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleDelete(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyServicesList;
