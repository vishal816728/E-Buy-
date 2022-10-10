const express=require('express')
const app=express()
const cors=require('cors')
const init=require('./config/database')
const router=require('../server/routes/user.routes')
const contactrouter = require('./routes/contact.route')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/api/",router)
app.use("/api/",contactrouter)

// initializing the db
init()

app.get("/",(req,res)=>{
    res.send("boy")
})

app.listen(3003,()=>{
    console.log("port is listening on 3003")
})