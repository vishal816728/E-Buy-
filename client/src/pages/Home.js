import React from 'react'
import HomeCardComponent from '../components/HomeCardComponent'
import girls from "../images/girls.jpg"
import hats from "../images/hats.jpg"
import jackets from "../images/jackets.jpg"
import men from "../images/men.jpg"
import sneakers from "../images/sneakers.jpg"
import logo from "../images/e.png"
import HomePageNewSaleBorder from '../components/HomePageNewSaleBorder'
import "../components/HomeCardComponent.styles.css"
import Typewriter from "typewriter-effect"
import Carousel from "react-multi-carousel";
import image1 from "../images/c1.jpg"
import image2 from "../images/c2.jpg"
import image3 from "../images/c3.jpg"
import image4 from "../images/c4.jpg"
import image5 from "../images/c5.jpg"
import image6 from "../images/s1.jpg"
import image7 from "../images/s2.jpg"
import image8 from "../images/s3.jpg"
import image9 from "../images/s4.jpg"
import { Link } from 'react-router-dom'
import bannerimg from "../images/osb2.jpg"

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
   <div className="topmostbanner">
        <img src={bannerimg} alt="topbanner" />
   </div>
   <div className='mainHomeCardComponents'>
   <div className='firstcontainer'>
      <img src={logo} alt="logo" style={{marginBottom:"4px"}} />
      <Typewriter onInit={(typewriter)=>{
        typewriter.typeString("EveryThing you want is Here.").start()
      }}/>
      <Link className='text-decoration-none homecontainertextcolor' to='/shop/women/1'><HomeCardComponent name="Women" img={girls}/></Link>
      <Link className='text-decoration-none homecontainertextcolor' to='/shop/men/1'><HomeCardComponent name="Men" img={men}/></Link>
    </div>  
    <div>
      <Link className='text-decoration-none homecontainertextcolor' to='/shop/sneakers/1'><HomeCardComponent name="Sneakers" img={sneakers}/></Link>
      <Link className='text-decoration-none homecontainertextcolor' to='/shop/hats/1'><HomeCardComponent name="Hats" img={hats}/></Link>
      <Link className='text-decoration-none homecontainertextcolor' to='/shop/jackets/1'><HomeCardComponent name="Jackets" img={jackets}/></Link>
     
    </div>  
   </div>
   <div><HomePageNewSaleBorder />
   </div>
   <div>
      <p>Latest Arrivals</p>
      <br></br>
      <Carousel
      swipeable={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all 1"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>
     <img style={{backgroundSize:"cover",}} src={image1} width="200px" height="250px" alt="image1" />
  </div>
  <div><img style={{backgroundSize:"cover",}} src={image2} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image6} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image3} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image7} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image4} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image8} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image5} width="200px" height="250px" alt="image1" /></div>
  <div><img style={{backgroundSize:"cover",}} src={image9} width="200px" height="250px" alt="image1" /></div>
</Carousel>
<br /><br />
   </div>
   </>
  )
}

export default Home