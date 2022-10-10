import React from 'react'
import ItemCardDetails from '../../components/ItemCardDetails'
import './shoppage.css'
import sneakersdata from "../../data/sneakers.json"
import {useState} from "react"
import Pagination from '../../components/Pagination'

const Sneakers = () => {
    const [postperpage,setPostperpage]=useState(3)
    const [currentPage,setCurrentPage]=useState(1)
    const [datasend,setDataSend]=useState()
    var lastpostIndex=currentPage*postperpage
    var firstPostIndex=lastpostIndex-postperpage
    var currentposts=sneakersdata.slice(firstPostIndex,lastpostIndex)
  return (
    <div className='sneakershopcontainer'>
         {/* <p style={{fontFamily:"monospace"}}>Sneakers</p> */}
        <ItemCardDetails sneakersdata={currentposts} />
        <Pagination totalPosts={sneakersdata.length} postperpage={postperpage} setcurrentPage={setCurrentPage} name="sneakers" />
    </div>
  )
}

export default Sneakers