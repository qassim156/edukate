// Importing Express
import express from 'express';
// Model
import collection from '../models/user.js';

// Router
const router = express.Router();

router.post('/signup', async(req,res) => {
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