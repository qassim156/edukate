// Importing Express
import express from 'express';
// Model
import adminCollection from '../models/admin.js';
import studentCollection from '../models/student.js';
import teacherCollection from '../models/teachers.js';
import userCollection from '../models/admin.js';

// Router
const router = express.Router();

const checkUserRole = (userid) => {

    if(userid === 'admin'){
        return 0;
    }else if(userid.substr(0, 2) === 'TD'){
        return  1;
    }else if(userid.substr(0, 2) === 'ED'){ 
        return  2;
    }else{
        return 3;
    }
}

router.post('/login', async(req,res) => {
        const data = await adminCollection.find();
       
        const userRole = checkUserRole(req.body.userid);
       
        if(userRole == 0){  
            if(req.body.password === 'admin'){  
                
                console.log("user is admin");
                const data = await adminCollection.findOne({userid : req.body.userid});

            }
        }else if(userRole == 1){

            console.log("user is teacher");
            // const data = await adminCollection.find();
            const data = await teacherCollection.findOne({userid : req.body.userid});

        }else if(userRole == 2){

            console.log("user is student");
            const data = await studentCollection.findOne({userid : req.body.userid});

        }else {

            console.log("User not found");
            const data = {
                userid : req.body.userid,  
                password : req.body.password
             };

            await adminCollection.insertMany([data]);
        }
    res.send("done");
});


router.post('/signup', async(req,res) => {

    const data = await adminCollection.find();
   
    const userRole = checkUserRole(req.body.userid);
   
    if(userRole == 0){  
        if(req.body.password === 'admin'){  
            
            console.log("user is admin");
            const data = await adminCollection.findOne({userid : req.body.userid});

        }
    }else if(userRole == 1){

        console.log("user is teacher");
        const data = await teacherCollection.findOne({userid : req.body.userid});

    }else if(userRole == 2){

        console.log("user is student");
        const data = await studentCollection.findOne({userid : req.body.userid});

    }else {

        console.log("User not found");
        const data = {
            userid : req.body.userid,  
            password : req.body.password
         };
         
        await adminCollection.insertMany([data]);
    }
res.send("done");
});

    export default router;