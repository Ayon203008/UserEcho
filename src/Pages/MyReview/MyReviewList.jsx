import React, { use, useState } from 'react';
import MyReviewCard from './MyReviewCard';
import Swal from 'sweetalert2';

const MyReviewList = ({MyReviewPromise}) => {
  
    const reviews = use(MyReviewPromise)
    const [allReview,setallReview]=useState(reviews)
    const handleDelete = (_id) => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`https://assignment-11-ecru-sigma.vercel.app/reviews/${_id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((data) => {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                    console.log(data);
                    if (data.deletedCount > 0) {
                   
                      const remaingReviews = allReview.filter((r) => r._id != _id);
                      setallReview(remaingReviews);
                    }
                  });
              }
            });
          };
    
 

    return (
        <div className='grid grid-cols-2 gap-20'>
            {allReview.map(review=><MyReviewCard key={review._id} handleDelete={handleDelete} review={review}></MyReviewCard>)}
        </div>
    );
};

export default MyReviewList;