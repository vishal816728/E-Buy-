import React from 'react'
import "./HomePageNewSaleBorder.styles.css"
import sale from "../images/saleb.png"
import MyVerticallyCenteredModal from './Modal';

const HomePageNewSaleBorder = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='container1'>
       <h4>New Sale Arriving Soon</h4>
       <br/>
       <img src={sale} alt="salejpg" style={{backgroundSize:"cover"}}/>
        <button className='HomePageNewSaleBorderbutton'  onClick={() => setModalShow(true)}>Know More</button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default HomePageNewSaleBorder