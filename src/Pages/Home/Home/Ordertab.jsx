import React from 'react';
import Menudata from './Menudata';

const Ordertab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-0 lg:ml-0'>
          {
            items.map(item => 
                    <Menudata
                key={item._id}
                item={item}
            ></Menudata>
            )
          }
        </div>
    );
};

export default Ordertab;