import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {Link} from "react-router-dom"

const Profile = () => {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [address_1,setAddress1]=useState()
    const [address_2,setAddress2]=useState()
    const [phone_no,setPhone_no]=useState()

    async function submitHandler(e){
           e.preventDefault()
             
           const data=await axios.put('http://localhost:3003/api/userupdate',{
            username,
            email,
            address_1,
            address_2,
            phone_no
           })
           alert("successfully updated the Profile")
           console.log(data)
    }
  return (
    <div className='profileContainer'>
        
        <Form onSubmit={submitHandler}>
    <h3>Edit Your Profile xyz...</h3>
    <Form.Group className="mb-3" controlId="formuserName">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="Enter UserName" name="username" onChange={(e)=>setUsername(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formuserMail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" required placeholder="Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formuserAddress">
      <Form.Label>Address_1</Form.Label>
      <Form.Control type="text" placeholder="Enter Address_1" name="address_1" onChange={(e)=>setAddress1(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formuserAddress">
      <Form.Label>Address_2</Form.Label>
      <Form.Control type="text" placeholder="Enter Address_2" name="address_2" onChange={(e)=>setAddress2(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formuserphone">
      <Form.Label>Phone No</Form.Label>
      <Form.Control type="number" placeholder="Enter phone_no" name="phone_no" onChange={(e)=>setPhone_no(e.target.value)} />
    </Form.Group>
     

    <Button variant="secondary" type="submit">
      Submit
    </Button>
    <Link to="/user/profilepage"><Button variant="danger">See Your Profile</Button></Link>
    <br />
    {/* <div className="m-1"> */}
    {/* <small>Don't Have an Account?<Link to="/signup">SignUp Here</Link></small></div> */}
  </Form>
  </div>
  )
}

export default Profile