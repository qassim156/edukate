// Importing Express
import express from 'express';
// Model
import adminCollection from '../models/admin.js';
import userCollection from '../models/admin.js';

// Router
const router = express.Router();

const checkUserRole = (userid) => {

    if(userid === 'admin'){
        return 0;
    }else if(Number(userid.substr(0, 7)) === 2007171){
        return  1;
    }else{
        return 2;
    }
}

router.post('/signup', async(req,res) => {
    const data = await adminCollection.find();
    console.log(data)    
        if(req.body.userid === 'admin'){  
            if(req.body.password === 'admin'){  
                console.log("user is present");
            }
        }else if(req.body.userid === '2007171' ){
            console.log(userid);
            // const data = await adminCollection.find();
            // const data = await adminCollection.findOne({userid : req.body.userid});
        }else {
            const data = {
                userid : req.body.userid,  
                password : req.body.password
             };         
            await adminCollection.insertMany([data]);
        }
    res.send("done");
});

    export default router;