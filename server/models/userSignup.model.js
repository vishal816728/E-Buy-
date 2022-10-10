const mongoose=require('mongoose')

const userSignupSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        default:'1234'
    },
    address_1:{
      type:String,
      dafault:'NA'
    },
    address_2:{
        type:String,
        dafault:'NA'
    },
    phone_no:{
        type:Number,
        dafault:'NA'
    }
})

module.exports=mongoose.model('Usersignup',userSignupSchema)