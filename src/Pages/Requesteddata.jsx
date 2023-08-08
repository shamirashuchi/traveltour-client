import React from 'react';

const Requesteddata = ({item}) => {
    const {owner,email,photo,member,communityname} = item;
    return (
        <div className='card w-full lg:w-1/2 bg-base-100 shadow-2xl mt-10'>
            <div className='flex justify-between'>
            <h2 className='mt-2'>{email}</h2>
            <div className='flex justify-end'>
            <button className="btn btn-warning">Accepted</button>
            <button className="btn btn-active btn-secondary ml-5">Rejected</button>
            </div>
            </div>
        </div>
    );
};

export default Requesteddata;