const contactModel=require("../models/contact.model")

async function ContactController(req,res){
    const {username,email,query}=req.body
    try{
       const newquery=new contactModel({
        username,
        email,
        query
       })        
       await newquery.save()
       res.send({
        result:true,
        message:"successfully query submitted"
       })
    }catch(err){

        res.status(400).send({
            result:false,
            message:err
        })
    }
}

module.exports=ContactController