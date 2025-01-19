// Importing Express
import express from 'express';
// Model
import adminCollection from '../models/admin.js';
import userCollection from '../models/admin.js';

// Router
const router = express.Router();

router.post('/signup', async(req,res) => {

        console.log

        if(req.body.userid === 'admin' && req.body.password === 'admin'){
            
          

            console.log("user is present");
        }else{
            const data = {
                userid : req.body.username,  
                password : req.body.password
             };        
            await adminCollection.insertMany([data]);
        }
    res.send("done");
});

    export default router;