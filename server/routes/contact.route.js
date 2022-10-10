const express=require('express')
const contactrouter=express.Router()
const contactRouter=require("../controller/contact.controller")


contactrouter.post('/contactquery',contactRouter)


module.exports=contactrouter
