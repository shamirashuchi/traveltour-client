import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2'
const Communitydata = ({item}) => {
    const {image,number_of_members,community} = item;
    const {User} = useContext(AuthContext);
    console.log(User?.email);
    const data = User?.email;
    const handleadduser = (item,data) =>{
        const owner = item.user;
        const email = data;
        const photo = item.image;
        const member = item.number_of_members;
        const communityname = item.community;
        const joinrequest = {owner,email,photo,member,communityname};
        console.log(joinrequest);

        fetch('http://localhost:2000/req',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(joinrequest)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Join request happens successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div>
    <div>
        <img className='h-80 w-96'  src={image} alt="" />
        <h2>{community} Community</h2>
        <div className='ml-5 lg:ml-0'>
        <button onClick={() => handleadduser(item,data)} className="btn btn-warning w-72 h-1">Join</button>
        </div>
    </div>
</div>

    );
};

export default Communitydata;