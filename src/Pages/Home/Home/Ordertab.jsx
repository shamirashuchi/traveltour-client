import React from 'react';
import Menudata from './Menudata';

const Ordertab = ({items}) => {
    return (
        <div>
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