import path from 'path'
import { fileURLToPath } from 'url';
// Workig with file stram
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
//Importing Express
import express from 'express';  
import cors from 'cors';
import dotenv from 'dotenv';
///qassim

// import adminCollection from './models/admin.js';
// import studentCollection from './models/student.js';
// import teacherCollection from './models/teachers.js';
// import dataCollection from './models/data.js';

import userRoute from './routes/user.js';

const app = express();

app.use(express.json());
app.use(express.static('./app'));
// app.use(cors());        
app.use('/auth', userRoute);


    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
 
