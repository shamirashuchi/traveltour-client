import React, { useContext } from 'react';
import useReq from '../hooks/useReq';
import { AuthContext } from '../Provider/Authprovider';
import Requesteddata from './Requesteddata';
import Header from './Shared/Header';
import Footer from './Footer';

const Requested = () => {
    const [reserve] = useReq();
    console.log(reserve);
    const {User, logOut} = useContext(AuthContext);
    console.log(User?.email);
    const selected = reserve.filter(item => item.owner === User?.email);
    console.log(selected);
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center mt-20'>
          {
            selected.map(item => 
                    <Requesteddata
                key={item._id}
                item={item}
            ></Requesteddata>
            )
          }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Requested;