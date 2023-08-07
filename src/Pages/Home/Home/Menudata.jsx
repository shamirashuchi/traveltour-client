import React from 'react';

const Menudata = ({item}) => {
    const {image,cost,stop_destination,start_destination,duration,role} = item;
    return (
        <div>
            <h2>{stop_destination}</h2>
        </div>
    );
};

export default Menudata;