import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
  const [username,setUsername]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const submitHandler=async (e)=>{
    e.preventDefault()
    const data=await axios.post('http://localhost:3003/api/usersignup',{
         username,
         email,
         password
    })
    //  console.log(data)
     const notify = () => toast('Great! Now Login to Your Account', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      notify()
     
     setTimeout(()=>{navigate("/signin")},2000)
  }
  return (
    <div className="SignupFormMainContainer">
    <Form onSubmit={submitHandler}>
    <h3>E-Buy SignUp</h3>
    <small>Sign up to get the Exciting Offers</small>
    <Form.Group className="mb-3" controlId="formUserName">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="UserName" name="username" onChange={(e)=>setUsername(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="userpassword" onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <ToastContainer />
    <br />
    <div className="m-1">
    <small>Already Have an Account?<Link to="/signin">Login Here</Link></small></div>
  </Form>
  </div>
  )
}

export default Signup