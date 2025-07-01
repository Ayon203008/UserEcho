import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "./Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://assignment-11-ecru-sigma.vercel.app",
});

const UseAxiosSecure = () => {
  const { user } = use(AuthContext);
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
