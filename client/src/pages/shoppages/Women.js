import React from 'react'
import ItemCardDetails from '../../components/ItemCardDetails'
import './shoppage.css'
import women from "../../data/women.json"
import {useState} from "react"
import Pagination from '../../components/Pagination'

const Women = () => {
    const [postperpage,setPostperpage]=useState(3)
    const [currentPage,setCurrentPage]=useState(1)
    const [datasend,setDataSend]=useState()
    var lastpostIndex=currentPage*postperpage
    var firstPostIndex=lastpostIndex-postperpage
    var currentposts=women.slice(firstPostIndex,lastpostIndex)
    console.log(currentposts)
  return (
    <div className='sneakershopcontainer'>
         {/* <p style={{fontFamily:"monospace"}}>Sneakers</p> */}
        <ItemCardDetails sneakersdata={currentposts}/>
        <Pagination totalPosts={women.length} postperpage={postperpage} setcurrentPage={setCurrentPage} name="women" />
    </div>
  )
}

export default Women