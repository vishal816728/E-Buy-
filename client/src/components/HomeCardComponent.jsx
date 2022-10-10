import React from 'react'



const HomeCardComponent = (props) => {
  return (
    <div className="categoriesContainer" style={{backgroundImage:`url(${props.img})`}}>
    <div className='category-container'>
         <div className="category-body-container">
           <h2>{props.name}</h2>
           <p>Shop Now</p>
         </div>
    </div>
</div>
  )
}

export default HomeCardComponent