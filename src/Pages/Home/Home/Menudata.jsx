import React from 'react';

const Menudata = ({item}) => {
    const {image,cost,stop_destination,start_destination,duration,role} = item;
    return (
        <div>
    <div>
        <img className='h-80 w-96' src={image} alt="" />
        <h2>{start_destination} to {stop_destination}</h2>
        <div className='flex'>
            <p>{duration}</p>
            <p className='ml-40 text-yellow-500'>{cost}</p>
        </div>
    </div>
</div>

    );
};

export default Menudata;