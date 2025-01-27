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

//controllers
import controller from '../controller/mycontroller.js';
import studentController from '../controller/studentController.js';
import teacherController from '../controller/teacherController.js';

const mystudent = new studentController();
const myteacher = new teacherController();
// const myController = new controller();

const app = express();
// Router
app.use(express.json());
const router = express.Router();
app.use(cookieParser());

function checkUserRole(userid){
    
        userid = "" + userid;
        if(userid === 'admin'){

            return 0;

        }else if(userid.substring(0, 2) === 'ED'){ 

            console.log("user is student");
            return 1;

        }else{
            console.log("user is not available");
            return 3;
        } 
}

router.post('/login', async(req,res) => {
        console.log(req.body);
        const user = checkUserRole(req.body.userid); 
        console.log(user);
        var password = 'admin';
        if(user == 0){
            

            if(password === req.body.password){
                
                res.json({isAdmin: true});
            }else{
                res.redirect("/");
            }          

        }else if(user == 1){
            const data = await studentCollection.findOne({userid: req.body.userid});
            if(data.password === req.body.password){
                
                res.json({isAdmin: false});
            }else{
                res.redirect("/");
            }
            console.log(data);
        } else{
            
        }
});

router.get('/admin/home', async(req,res) => {
    res.redirect("/admin");
});

// DataBase Calls

router.get('/student/all', async(req,res) => {
    const data = await adminCollection.find();
    console.log(data);
    res.json(data);
});
router.post('/student/user', async(req,res) => {
    const data = await adminCollection.findOne({userid: req.body.userid});
    console.log(data);
    res.json(data);
});

// student
router.post('/student/register', mystudent.register);
router.post('/student/login', mystudent.login);
router.put('/student/update', mystudent.update);
router.delete('/student/delete', mystudent.delete);

// teacher
router.post('/teacher/register', myteacher.register);
router.post('/teacher/login', myteacher.login);
router.put('/teacher/update', myteacher.update);
router.delete('/teacher/delete', myteacher.delete);

export default router; 