import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className='flex flex-col items-center md:flex-row lg:flex-row'>
            <div className='flex h-screen'>
            <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/1375792442/photo/coxs-bazaar-sea-beach-bangladesh.jpg?s=612x612&w=0&k=20&c=-tHB7770Zavp5GegSji62eMyYe8xVl8oEi7vfO4BHyU=" alt="" />
           </div>
           <div className='flex flex-col items-center lg:ml-8'>
                <h2 className='font-semibold text-4xl mb-4'>Get Started</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div>
                    <Link to="/login"><button className="btn btn-active btn-ghost w-48">Log in</button></Link>
                    </div>
                    <div className='sm:mb-6'>
                   <Link to="/signup"> <button className="btn btn-active btn-primary w-48">Sign up</button></Link>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Start;