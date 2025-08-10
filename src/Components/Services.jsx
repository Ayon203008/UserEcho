import React, { use } from 'react';
import ServiceCard from './ServiceCard';

const Services = ({servicesPromise}) => {

    const servics = use(servicesPromise)

    return (
        <div>
            <h1  className='text-6xl font-bold font-serif text-blue-400 drop-shadow-md text-center mb-20'>Our special Services</h1>
        <div className='grid grid-cols-3 gap-15 '>
            {
                servics.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
            </div>
    );
};

export default Services;