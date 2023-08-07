import React from 'react';

const Communitydata = ({item}) => {
    const {image,number_of_members,community} = item;
    return (
        <div>
    <div>
        <img className='h-80 w-96'  src={image} alt="" />
        <h2>{community} Community</h2>
        <div className='ml-5'>
        <button className="btn btn-warning w-80 h-1">Join</button>
        </div>
    </div>
</div>

    );
};

export default Communitydata;