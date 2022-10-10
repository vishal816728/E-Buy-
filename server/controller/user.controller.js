const userSignupModel=require('../models/userSignup.model')
const bcrypt=require('bcrypt')

async function userSignup(req,res){
    const {username,email,password}=req.body
      try {
           const data=await userSignupModel.findOne({email})
        //    console.log(data)
           if(data){
               res.status(404).send({
                  message:"User with this email already exists",
                  result:false
               })
           }else{
            const data=new userSignupModel({
                username,
                email,
                password:bcrypt.hashSync(password,10)
            })

            await data.save()
            res.send({
                message:"Successfully result",
                data:data,
                result:true
            })
           }
      } catch (error) {
          res.status(400).send({
            result:false,
            message:error
          })
      }
}

async function userLogin(req,res){
    const {email,password}=req.body
    try {
        const data=await userSignupModel.findOne({email})
        if(data){
            const checkpass=bcrypt.compareSync(password,data.password)
            if(checkpass){
                res.send({
                    message:"user Logged in successfully",
                    data:{
                       username:data.username,
                       email:data.email,
                       address_1:data.address_1,
                       address_2:data.address_2,
                       phone_no:data.phone_no 
                    },
                    result:true
                })
            }else{
                res.status(400).send({
                    result:false,
                    message:"email or password do not match"
                })
            }
        }else{
            res.status(400).send({
                result:false,
                message:"email or password do not match"
            })
        }
    } catch (error) {
        res.status(400).send({
            result:false,
            message:error
          })
    }
}

async function userUpdate(req,res){
    const {username,email,address_1,address_2,phone_no}=req.body
    try{
        const checkuser=await userSignupModel.findOne({email})
        if(checkuser){
            checkuser.username=username || checkuser.username
            checkuser.email=email || checkuser.email
            checkuser.address_1=address_1 || checkuser.address_1
            checkuser.address_2=address_2 || checkuser.address_2
            checkuser.phone_no=phone_no || checkuser.phone_no

            await checkuser.save()

            res.send({
                result:true,
                message:"Profile updated successfully"
            })
        }else{
            res.send({
                result:false,
                message:"email does not exist"
            })
        }
    }catch(err){
        res.status(400).send({
            result:false,
            message:err
          })
    }
}


module.exports={
    userSignup,
    userLogin,
    userUpdate
}