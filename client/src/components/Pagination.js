import React, { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    const btnref=useRef(null)
    // console.log(btnref)
    let pages=[]

    for(let i=1;i<=Math.ceil(props.totalPosts/props.postperpage);i++){
        pages.push(i)
    }
  return (
    <div>
        {
            pages.map((page,index)=>{
                return <Link to={`/shop/${props.name}/${page}`}><button ref={btnref} className='paginationbtn' key={index} onClick={()=>{props.setcurrentPage(page)}}>{page}</button></Link>
            })
        }
    </div>
  )
}

export default Pagination