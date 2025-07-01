import React from "react";
import { Suspense } from "react";
import MyServicesList from "./MyServicesList";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import UseServicesApi from "../../UseServicesApi";



const MyService = () => {
  const { user } = use(AuthContext);
  const {myServicesPromise}=UseServicesApi()

  return (
    <div>
      <h1 className="text-4xl text-center my-2">My All Services</h1>
      <Suspense>
        {
          <MyServicesList
            myServicesPromise={myServicesPromise(user.email)} 
          ></MyServicesList>
        }
      </Suspense>
    </div>
  );
};

export default MyService;
