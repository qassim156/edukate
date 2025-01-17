import path from 'path'
import { fileURLToPath } from 'url';
// Workig with file stram
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
//Importing Express
import express from 'express';  
import cors from 'cors';
import dotenv from 'dotenv';

//importing route
import homeRoute from './routes/home.js'
import adminRoute from './routes/admin.js'
import cssRoute from './routes/css.js' 
// import studentRoute from './routes/student.js'
// import teacherRoute from './routes/teacher.js'
import { readFileSync } from 'fs'; 
 
dotenv.config();


const app = express();

app.use(express.json());
// app.use(express.static('../app/home'));
// app.use(cors());
app.use('/admin', adminRoute);
app.use('/css', cssRoute);
// app.use('/teacher', teacherRoute);
// app.use('/student', studentRoute); 
app.use('/', homeRoute);


    app.listen(process.env.PORT, () => {
        console.log('Server is running on port 3000');
    });
 