import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [username,setUserName]=useState()
  const [email,setEmail]=useState()
  const [query,setQuery]=useState()

  const submitHandler=async (e)=>{
    e.preventDefault()
    const data=await axios.post('http://localhost:3003/api/contactquery',{
        username,
        email,
        query
    })
    console.log(data)
   const notify = () => toast('Thank you for submitting your Feedback', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      notify()
  }
  return (
    <div className="ContactFormMainContainer">
    <Form onSubmit={submitHandler}>
    <h3>Contact Us</h3>
    <small>For Any FeedBack or Complains</small>
    <Form.Group className="mb-3" controlId="formUserName">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="UserName" name="username" onChange={(e)=>setUserName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formtext">
      <Form.Label>Content</Form.Label>
      <Form.Control type="text" placeholder="Query" name="query" onChange={(e)=>setQuery(e.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
    <br />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
<ToastContainer />
  </Form>
  </div>
  )
}

export default Contact
