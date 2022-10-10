import React from "react";
import { Container } from "react-bootstrap";
import './footer.css'


const Footer = () => {
    const date=new Date()
    const getYear=date.getFullYear()
return (
	<div className='p-2 footerclass'>

	   E-Buy&nbsp; &copy;{getYear}
	</div>

);
};
export default Footer;
