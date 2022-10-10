import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { signInWIthGooglePopup,createUserDocumentFromAuth } from '../utils/firebase.utils';
import {useState} from "react"
import axios from "axios"
import {UserContext} from "../contexts/user.context"
import { useContext } from 'react';


const SignIn = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  
  const navigate=useNavigate()

  const {currentUser,setCurrentUser}=useContext(UserContext)
  const logGoogleUser=async()=>{
    const {user}=await signInWIthGooglePopup()
    createUserDocumentFromAuth(user)
    // const userDocRef=await createUserDocumentFromAuth(user)
    // // console.log(user)
    // // console.log(userDocRef)
    const userdata={data:{data:{username:''}}}
    userdata.data.data.username=user.displayName
    userdata.email=user.email
    setCurrentUser(userdata)
    localStorage.setItem('userlogindetailsNormal',JSON.stringify(user))
   await axios.post('http://localhost:3003/api/usersignup',{
      username:user.displayName,
      email:user.email,
      password:'1234'
 })
    navigate("/")

  }

 const normalLogin=async (e)  =>{
      e.preventDefault()
      const data=await axios.post('http://localhost:3003/api/userlogin',{
           email,
           password
      })
      // console.log(data)
      setCurrentUser(data)
      localStorage.setItem('userlogindetailsNormal',JSON.stringify(data))
      navigate("/")
 }
  return (
    <div className="FormMainContainer">
    <Form onSubmit={normalLogin}>
    <h3>E-Buy Login</h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <br />
    <div className="m-1">
    <small>Don't Have an Account?<Link to="/signup">SignUp Here</Link></small></div>
  </Form>
  <div>
  <small>Login With Google Here?</small><button className="googleloginbtn" onClick={logGoogleUser}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>&nbsp;Google</button>
  </div>
  </div>
  )
}

export default SignIn

// limit a number of elements using map method

//    let ar=[3,42,2,1,4,23,5,2,32,9,43,12,42,12]
// ar.slice(0,5).map(item=>console.log(item))
