const router = require('express').Router();
const UserModel = require('../models/User')

router.post('/login', async(req,res)=>{
    const {username} = req.body;
    if(username){
        const existingUser = await UserModel.findOne({username})
        if(existingUser){
            return res.status(200).json({message:'user found',existingUser})
        } else{
            return res.status(500).json({message: 'user not found', existingUser})
        }
    }
})

router.post('/signup', async(req,res)=>{
    const {username, email, password} = req.body;
    const existingUser = await UserModel.findOne({username});
    const existingEmail = await UserModel.findOne({email});
    if(existingUser){
        return res.status(400).json({message: 'Username already exist',existingUser})
    } else if(existingUser.length < 4){
        return res
            .status(400)
            .json({message: 'username should have atleast 4 characters'});
    }
    if(existingEmail){
        return res.status(400).json({message: 'email already exist',existingEmail})
    }

    const newUser = new UserModel({
        username,
        password,
        email
    })

})

module.exports=router