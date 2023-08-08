import React, { useContext, useEffect,useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';
const Login = () => {
    const [disabled,setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate('/home');
        })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Embark on a journey of discovery as you explore new horizons and create lasting memories. Whether you're drawn to serene beaches, majestic mountains, or vibrant cities, let your wanderlust guide you to new experiences and cultures. Uncover hidden gems, savor local flavors, and embrace the thrill of the unknown. Your next adventure awaits!</p>
                </div>
                <div className="card lg:w-1/3 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered w-80"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-80" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input disabled={false} className="btn btn-primary w-80" type="submit" value="Login" />
                    </div>
                </form>
                <p><small>New Here?<Link to="/signup">create an account</Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;