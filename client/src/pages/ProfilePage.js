import React from 'react'
import {Link} from "react-router-dom"
import user from "../images/user.png"

const ProfilePage = () => {

    const data=JSON.parse(localStorage.getItem('userlogindetailsNormal'))
 
  return (
    <div className="ProfilePageMainContainer">
        <div className='profilepagecardcontainer'>
             <img src={user} className='mb-1' alt="user" width="30px" height="30px" />
          <h4>UserName:&nbsp;{data.data.data.username}</h4>
          <p>Email:&nbsp;{data.data.data.email}</p>
          <p>Address-1:&nbsp;{data.data.data.address_1}</p>
          <p>Address-2:&nbsp;{data.data.data.address_2}</p>
          <p>Phone-No.:&nbsp;{data.data.data.phone_no}</p>
          <Link to="/user/profile"><button className="profilepagebtn">Edit Profile</button></Link>
        </div>  
    </div>
  )
}

export default ProfilePage