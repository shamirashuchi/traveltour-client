import React from 'react';
import Swal from 'sweetalert2'
import Header from './Shared/Header';
import Footer from './Footer';
const AddCommunitydata = () => {
    const handleAddcommunity = event =>{
        event.preventDefault();
        const form = event.target;
        const user = form.user.value;
        const number_of_members = form.number_of_members.value;
        const community = form.community.value;
        const image = form.image.value;
        const newCommunity = {user,image,number_of_members,community};
        console.log(newCommunity);
        //send data to the server
        fetch('http://localhost:2000/community',{

         method: 'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(newCommunity)
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
            <h2 className="text-3xl font-extrabold">Add Community</h2>
            <form onSubmit={handleAddcommunity}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user" placeholder="user" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Community</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="community" placeholder="community" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                 <div className="md:flex mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Member</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="number_of_members" placeholder="number_of_members" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Done" className="btn btn-block bg-primary hover:bg-blue-950 text-white"/>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddCommunitydata;