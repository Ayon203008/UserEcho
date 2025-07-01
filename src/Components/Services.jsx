import React, { use } from 'react';
import ServiceCard from './ServiceCard';

const Services = ({servicesPromise}) => {

    const servics = use(servicesPromise)

    return (
        <div className='grid grid-cols-3 gap-15 '>
            {
                servics.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;