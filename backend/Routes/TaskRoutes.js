const router = require('express').Router();
const TaskModel = require('../models/Task');
const UserModel = require('../models/User');


router.post('/create', async(req,res)=>{
    try {
        const {title, description} = req.body;
        const { id } = req.headers;
        const newTask = new TaskModel({title, description})
        const saveTask = await newTask.save();
        const taskId = saveTask._id;
        await UserModel.findByIdAndUpdate(id, {$push: { tasks: taskId._id}})
        res.status(200).json({message:"task id received"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Internal Server Error"})
    }
})


module.exports = router;