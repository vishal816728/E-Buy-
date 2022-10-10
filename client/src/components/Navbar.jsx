import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/e.png"
import {Link} from "react-router-dom"
import user from "../images/user.png"
import {useState} from "react"
import { useContext } from "react"
import {UserContext} from "../contexts/user.context"
import {signOutUser} from "../utils/firebase.utils"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


var cuser=''
function Navbar1() {
  const [loginstatus,setLoginStatus]=useState(false)
  const {currentUser,setCurrentUser}=useContext(UserContext)
  cuser=currentUser
  // console.log(cuser.data.data.username)
  const  popover = (
    <Popover id="popover-basic">
      
      <Popover.Header as="h3">Profile</Popover.Header>
      <Popover.Body>
        {cuser?
        <div className='popoverContainer'>
             <small>Hello</small>
             <h3 className="text-center">{cuser.data.data.username}</h3>
             <small>It's great to see you again</small>
             <Link to="/user/profile"><button className="popoverbtn" disabled={cuser?false:true}>Edit Your Profile</button></Link>
        </div>:
        <div>Login to See Details</div>
        }
      </Popover.Body>
    </Popover>
  );
  return (
    <Navbar bg="light" className="navbarStyles" expand="lg">
      <Container>
      <img src={logo} alt="e-commerce logo" width="25px" height="25px" /><Navbar.Brand><Link className='text-decoration-none text-dark linknavbarstyle' to="/">&nbsp;&nbsp;&nbsp;&nbsp;E-Buy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-1">
            <Link to="/shop" className='text-decoration-none text-dark linknavbarstyle'>Shop</Link>
            <Link to="/contact" className='text-decoration-none text-dark linknavbarstyle'>Contact</Link>
            <Link to="/services" className='text-decoration-none text-dark linknavbarstyle'>Services</Link>
            <Link to="/about" className='text-decoration-none text-dark linknavbarstyle'>About</Link>
            <Link className="text-decoration-none text-dark linknavbarstyle">Cart</Link>
          </Nav>
          <Nav className="navbarRightSideuser">
              <div className="navbariconimage">
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <img src={user} alt="default user" width="25px" height="25px" />
                </OverlayTrigger>     
              </div>&nbsp;&nbsp;&nbsp;<small>{loginstatus?'Demi Francis Lovoto':<Link className='text-decoration-none text-dark ml-0 linknavbarstyle' to="/signin">{currentUser?<span onClick={async()=>{
                await signOutUser()
                setCurrentUser(null)
                localStorage.removeItem('userlogindetailsNormal')
                window.location.reload()
              }} >LogOut</span>:"Login"}</Link>}</small>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;