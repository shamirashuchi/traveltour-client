import React from 'react';
import Swal from 'sweetalert2'
import Header from './Shared/Header';
import Footer from './Footer';
const Postdata = () => {
    const handleAddPost = event =>{
        event.preventDefault();
        const form = event.target;
        const start_destination = form.start_destination.value;
        const cost = form.cost.value;
        const stop_destination = form.stop_destination.value;
        const image = form.image.value;
        const duration = form.duration.value;
        const Details = form.Details.value;
        const newpost = {start_destination,cost,stop_destination,image,duration,Details};
        console.log(newpost);
        //send data to the server
        fetch('http://localhost:2000/item',{

         method: 'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(newpost)
        })
        //client side receive the response or result
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Post Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add Post</h2>
            <form onSubmit={handleAddPost}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Start</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="start_destination" placeholder="Start location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 md:h-20">
                        <label className="label">
                            <span className="label-text">Destination</span>
                        </label>
                        <label className="input-group">
                        <select name="stop_destination" className="input input-bordered w-full" id="cars">
                            <option value="Rangamati">Rangamati</option>
                            <option value="CoxsBazar">CoxsBazar</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Bandarban">Bandarban</option>
                        </select>
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="duration" placeholder="duration" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Post" className="btn btn-block bg-primary hover:bg-blue-950 text-white"/>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Postdata;