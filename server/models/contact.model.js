const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Contactquery',contactSchema)