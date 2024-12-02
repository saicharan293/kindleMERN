const router = require('express').Router();
const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/login', async(req,res)=>{
    const {username, password} = req.body;
    const existingUser = await UserModel.findOne({username})
    if(username){
        if(!existingUser){
            return res.status(404).json({message: 'Invalid Credentials', existingUser})
        }
    }
    bcrypt.compare(password, existingUser.password,(err,data)=>{
        if(data){
            const token=jwt.sign({email:existingUser.username}, "mysecret",{expiresIn: "1d"});
            res.status(200).json({message:'login successful',id: existingUser.id, token})
        }else{
            return res.status(404).json({message: 'Invalid Credentials', existingUser})
        }
    })
})

router.post('/signup', async(req,res)=>{
    const {username, email, password} = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (username.length < 4) {
        return res.status(400).json({ message: 'Username must be at least 4 characters long' });
    }
    try {
        const existingUser = await UserModel.findOne({username});
        const existingEmail = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'Username already exist',existingUser})
        } 
        if(existingEmail){
            return res.status(400).json({message: 'email already exist',existingEmail})
        }
        bcrypt.genSalt(10,(err,salt)=>{
            if (err) {
                return res.status(500).json({ message: 'Error generating salt' });
            }
            bcrypt.hash(password,salt,async(err,hash)=>{
                if (err) {
                    return res.status(500).json({ message: 'Error hashing password' });
                }
                let createduser=await UserModel.create({
                    username,email,password:hash
                })
                let token=jwt.sign({username},'mysecret');
                res.cookie('token',token)
                await createduser.save();
                return res.status(200).json({message: "Sign up succesful",createduser})
            })
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Internal Server Error"})
    }

})

module.exports=router