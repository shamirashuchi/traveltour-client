import React, { useContext } from 'react';
import useCommunity from '../../hooks/useCommunity';
import { AuthContext } from '../../Provider/Authprovider';

const Header = () => {
    const [community] = useCommunity();
    console.log(community);
    const {User, logOut} = useContext(AuthContext);
    console.log(User?.email);
    const Owner =community.filter(item => item.user === User?.email);
    console.log(Owner[0]?.user);
    const handlelogout = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary">
              <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/add_item">Add Post</a></li>
                    <li><a href="/add_community">Add Commmunity</a></li>
                    <li>
                        {
                            Owner[0]?.user && <a href="/req">Requested</a>
                        }
                    </li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl  text-white">Travel.com</a>
            </div>
            <div className="navbar-center hidden lg:flex  text-white">
                <ul className="menu menu-horizontal px-1">
                <li><a href="/home">Home</a></li>
                <li><a href="/add_item">Add Post</a></li>
                <li><a href="/add_community">Add Commmunity</a></li>
                <li>
                        {
                            Owner[0]?.user  && <a href="/req">Requested</a>
                        }
                </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/login" className='text-white mr-2'>Login</a>
                <a onClick={handlelogout} className="btn">Log Out</a>
            </div>
            </div>
        </div>
    );
};

export default Header;