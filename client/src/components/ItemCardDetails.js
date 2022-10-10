import React from 'react';
import { Link } from 'react-router-dom';
import "./itemcard.css"


const ItemCardDetails = (props) => {

  async function clickHandler(){
    console.log("rani kab ayegi tu")
  }
  return (
    <>
    {props.sneakersdata.map((item,index)=>
    <div className='Itemcarddetailscontainer' key={index}>
        <div className='imagecontainercard'>
             <img src={item.image} alt="product" />

        </div>
        <div className='contentcontainercard'>
            <div className="contentcard">
                 <h2>Puma Ultra Bolt-Blazing fast </h2>
                 <br></br>
                 <br></br>
                 <p>Footwear</p>
                 <p>⭐⭐⭐⭐</p>
                 <small>This is a amazing piece of pairs which lightens your speed at the light of speed</small>
                 <p className='text-decoration-line-through'>price:&nbsp;₹899</p>    
                 <h2>Price:&nbsp;₹{item.price}</h2>
            </div>
            <div>
                <button className='HomePageNewSaleBorderbutton m-2' onClick={clickHandler} >Add to Cart</button>
                <button className='HomePageNewSaleBorderbutton m-2' onClick={clickHandler} >Buy Now</button>
            </div>
        </div>
    </div>
)
    }
    </>
  )
}

export default ItemCardDetails