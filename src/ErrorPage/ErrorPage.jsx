import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <img src='https://i.ibb.co/vCCFGKNm/2480259.jpg' className='w-full h-[700px] object-cover'/>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;