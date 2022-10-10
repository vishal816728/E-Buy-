const express=require('express')
const router=express.Router()

const userController=require('../controller/user.controller')

router.post('/usersignup',userController.userSignup)

router.post('/userlogin',userController.userLogin)

router.put('/userupdate',userController.userUpdate)
module.exports=router