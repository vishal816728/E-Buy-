import React from 'react'
import ItemCardDetails from '../../components/ItemCardDetails'
import './shoppage.css'
import men from "../../data/Men.json"
import {useState} from "react"
import Pagination from '../../components/Pagination'

const Men = () => {
    const [postperpage,setPostperpage]=useState(3)
    const [currentPage,setCurrentPage]=useState(1)
    const [datasend,setDataSend]=useState()
    var lastpostIndex=currentPage*postperpage
    var firstPostIndex=lastpostIndex-postperpage
    var currentposts=men.slice(firstPostIndex,lastpostIndex)
    console.log(currentposts)
  return (
    <div className='sneakershopcontainer'>
         {/* <p style={{fontFamily:"monospace"}}>Sneakers</p> */}
        <ItemCardDetails sneakersdata={currentposts}/>
        <Pagination totalPosts={men.length} postperpage={postperpage} setcurrentPage={setCurrentPage} name="men" />
    </div>
  )
}

export default Men