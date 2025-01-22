// Importing Express
import express from 'express';
//importing jwt
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'
// Model
import adminCollection from '../models/admin.js';
import studentCollection from '../models/student.js';
import teacherCollection from '../models/teachers.js';
import userCollection from '../models/admin.js';

const app = express();
// Router
const router = express.Router();
app.use(cookieParser());
const checkUserRole = (userid) => {

    if(userid === 'admin'){
        return 0;
    }else if((userid.substring(0, 2)) == 'TD'){
        return  1;
    }else if(userid.substring(0, 2) === 'ED'){ 
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

                const token = jwt.sign({userid: data.userid,
                                        name: data.password
                }, 'qmcode', { expiresIn: "4h"});

        res.cookie('token', token, {
            httpOnly: true
        })
        res.redirect("/admin");

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


    