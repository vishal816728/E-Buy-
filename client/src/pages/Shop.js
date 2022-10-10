import React from 'react'
import "./shop.css"
import {Link} from "react-router-dom"
import MenData from "../data/Men.json"
import WomenData from "../data/women.json"
import hats from "../data/hats.json"
import data from "../data/sneakers.json"
import jackets from "../data/jackets.json"
 
const Shop = () => {
 var id=1
   
  return (
      <div className='shopMainContainer'>
      <div className='flex flex-row littleNavbar'>
         <a href="#sneakers">Sneakers</a>
         <a href="#men">Men</a>
         <a href="#women">Women</a>
         <a href="#hats">Hats</a>
         <a href="#jackets">Jackets</a>
      </div>
      
       <div className='shoeContainer'>
       <br />
       <h2 id="sneakers">Sneakers</h2>
       <div className='showimgcontainer'>
      {
         data.slice(0,8).map(item=> 
           <img src={item.image} alt={item.id} width="250px" height="250px" />
         )
      }
      </div>
      <div className='bordertodivide'>
       <Link className='text-decoration-none' to={`/shop/sneakers/${id}`}>See More</Link>
       </div>
      </div>
      <div className='shoeContainer'>
       <br />
       <h2 id="men">Men</h2>
       <div className='showimgcontainer'>
      {
         MenData.slice(0,8).map(item=> 
           <img src={item.image} alt={item.id} width="250px" height="250px" />
         )
      }
      </div>
      <div className='bordertodivide'>
      <Link className='text-decoration-none' to={`/shop/men/${id}`}>See More</Link>
       </div>
      </div>
      <div className='shoeContainer'>
       <br />
       <h2 id='women'>WoMen</h2>
       <div className='showimgcontainer'>
      {
        WomenData.slice(0,8).map(item=> 
           <img src={item.image} alt={item.id} width="250px" height="250px" />
         )
      }
      </div>
      <div className='bordertodivide'>
      <Link className='text-decoration-none' to={`/shop/women/${id}`}>See More</Link>
       </div>
      </div>
      <div className='shoeContainer'>
       <br />
       <h2 id="hats">Hats</h2>
       <div className='showimgcontainer'>
      {
        hats.slice(0,8).map(item=> 
           <img src={item.image} alt={item.id} width="250px" height="250px" />
         )
      }
      </div>
      <div className='bordertodivide'>
      <Link className='text-decoration-none' to={`/shop/hats/${id}`}>See More</Link>
       </div>
      </div>
      <div className='shoeContainer'>
       <br />
       <h2 id="jackets">Jackets</h2>
       <div className='showimgcontainer'>
      {
        jackets.slice(0,8).map(item=> 
           <img src={item.image} alt={item.id} width="250px" height="250px" />
         )
      }
      </div>
      <div className='bordertodividelast'>
      <Link className='text-decoration-none' to={`/shop/jackets/${id}`}>See More</Link>
       </div>
       <a className='text-decoration-none ' href="#sneakers">Back to Top</a>
      </div>
      </div>
  )
}

export default Shop