// Importing Express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

//importing jwt
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'
// Model
import adminCollection from '../models/admin.js';
import studentCollection from '../models/student.js';
import teacherCollection from '../models/teachers.js';

const app = express();
// Router
app.use(express.json());
const router = express.Router();
app.use(cookieParser());

function checkUserRole(userid){
    
        userid = "" + userid;
        if(userid === 'admin'){

            return 0;

        }else if(userid.substring(0, 2) === 'TD'){

            console.log("user is teacher");
            return 1;

        }else if(userid.substring(0, 2) === 'ED'){ 

            console.log("user is student");
            return 2;

        }else{
            console.log("user is not available");
            return 3;
        } 
}

router.post('/login', async(req,res) => {
        console.log(req.body);
        const user = checkUserRole(req.body.userid); 
        console.log(user);

        if(user == 0){
            const data = await adminCollection.findOne({userid: req.body.userid});

            if(data.password === req.body.password){
                console.log(data);
                res.redirect('/admin');
            }else{
                res.redirect("/");
            }          

        }else if(user == 1){
            const data = await teacherCollection.findOne({userid: req.body.userid});

            console.log(data);
            res.redirect('/teacher');

        }else if(user == 2){
            const data = await studentCollection.findOne({userid: req.body.userid});

            console.log(data);
            res.redirect('/student');

        }else{
            
        }
});


    export default router;


    