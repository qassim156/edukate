// Importing Express
import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
// Model
import collection from '../models/user.js';

// Controller
import controller from '../controller/mycomtriller.js'
import myController from '../controller/mycomtriller.js';

// Router
const router = express.Router();


router.post('/signup', async(req,res) => {
    // const {username, email, password } = req.body;

    // const user = User.find({email})
    // if(user){
    //     res.status(400).json({success: false, message: "User already exists"});
    // }

    // const  hashpassword = await bcrypt.hash(password, 10);
    // const newUser = new User({
    //     username,
    //     email,
    //     password: hashpassword
    // });
    
    // await newUser.save();
    // res.status(200).json({success: true, data: newUser});
    try{
        const allData = await collection.find();
        const checkName = await collection.findOne({username:req.body.name});
        const checkEmail = await collection.findOne({email:req.body.email});

        if(checkName && checkEmail){
            console.log("user is present");
        }else{
            const data = {
                username : req.body.username, 
                email : req.body.email, 
                password : req.body.password
             };        
            await collection.insertMany([data]);
        }
        console.log(allData);
    res.send("done");
    }catch{

    }

});

    export default router;