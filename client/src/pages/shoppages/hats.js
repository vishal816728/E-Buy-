import React from 'react'
import ItemCardDetails from '../../components/ItemCardDetails'
import './shoppage.css'
import hats from "../../data/hats.json"
import {useState} from "react"
import Pagination from '../../components/Pagination'

const Hats = () => {
    const [postperpage,setPostperpage]=useState(3)
    const [currentPage,setCurrentPage]=useState(1)
    const [datasend,setDataSend]=useState()
    var lastpostIndex=currentPage*postperpage
    var firstPostIndex=lastpostIndex-postperpage
    var currentposts=hats.slice(firstPostIndex,lastpostIndex)
    console.log(currentposts)
  return (
    <div className='sneakershopcontainer'>
         {/* <p style={{fontFamily:"monospace"}}>Sneakers</p> */}
        <ItemCardDetails sneakersdata={currentposts}/>
        <Pagination totalPosts={hats.length} postperpage={postperpage} setcurrentPage={setCurrentPage} name="hats" />
    </div>
  )
}

export default Hats