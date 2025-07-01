import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServicesDetails from "../Pages/ServicesDetails";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import MyReview from "../Pages/MyReview/MyReview";
import AddService from "../Pages/AddService/AddService";
import MyService from "../Pages/MyService/MyService";
import AllServices from "../Pages/AllServices/AllServices";
import MyServiceUpdate from "../Pages/MyService/MyServiceUpdate";
import MyReviewCradUpdate from "../Pages/MyReview/MyReviewCradUpdate";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    Component: MainLayOut,
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        index: true,
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        path: "/services/:id",
        Component: ServicesDetails,
        loader: ({ params }) =>fetch(`https://assignment-11-ecru-sigma.vercel.app/services/${params.id}`),
      },
      {
        path:'reviewPage/:id',
        element:<PrivateRoute><ReviewPage></ReviewPage></PrivateRoute>
      },
      {
        path:'/myReviews',
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
      }
      ,
      {
        path:'/addServices',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path:'/postedServices',
        element:<PrivateRoute><MyService></MyService></PrivateRoute>
      },
      {
        path:'/allServices',
        element:<AllServices></AllServices>
      },
      {
        path:"update/:id",
        loader:({params})=>fetch(`https://assignment-11-ecru-sigma.vercel.app/services/${params.id}`),
        element:<MyServiceUpdate></MyServiceUpdate>
      },
      {
        path:'/reviewUpdate/:id',
        loader:({params})=>fetch(`https://assignment-11-ecru-sigma.vercel.app/reviews/${params.id}`),
        Component:MyReviewCradUpdate,
      }
    ],
  },
]);

export default router;
