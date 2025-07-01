import React, { Suspense, use } from 'react';
import MyReviewList from './MyReviewList';
import { AuthContext } from '../../Context/AuthContext';
import UseReviewApi from '../../UseReviewApi';

const MyReview = () => {
    const {user}=use(AuthContext)
    const {MyReviewPromise}=UseReviewApi()


    return (
        <div>
            <h1 className='text-5xl text-center my-5'>My all review</h1>
            <Suspense fallback={'loading...'}>
            <MyReviewList MyReviewPromise={MyReviewPromise(user.email)}></MyReviewList>
            </Suspense>
        </div>
    );
};

export default MyReview;