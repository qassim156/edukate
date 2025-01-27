import express from 'express';

import admin from '../models/admin.js';
import student from '../models/student.js';
// import teacher from '../models/teachers.js';
const app = express();


app.use(express.json());
class controller {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
  }
  
        registerStudent = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
          phoneNumer, email, age, regDate} = req.body;
          console.log("admin is creating student");
          
          
          try {
            await student.insertMany([{
              userid, password, firstName, lastName, address, 
              phoneNumer, email, age, regDate
            
            }]).then(user =>
              res.status(200).json({
                message: "Student successfully created",
                user,
              })
            )
          } catch (err) {
            console.log(err);
            res.status(401).json({
              message: "User not successful created",
              error: err.mesage,
            })
          }
        }

        loginStudent = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
          phoneNumer, email, age, regDate} = req.body;
          console.log("admin is creating student");

            try {
              const user = await student.findOne({ 
                userid, password });
              if (!user) {
                res.status(401).json({
                  message: "Login not successful",
                  error: "User not found",
                })
              } else {
                res.status(200).json({
                  message: "Login successful",
                  user,
                })
              }
            } catch (error) {
              res.status(400).json({
                message: "An error occurred",
                error: error.message,
              })
            }
            
        }

        updateStudent = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
            phoneNumer, email, age, regDate} = req.body;
            console.log("admin is creating student");
  
              try {
                const user = await student.findOne({ 
                  userid, password });
                if (!user) {
                  res.status(401).json({
                    message: "Login not successful",
                    error: "User not found",
                  })
                } else {
                  res.status(200).json({
                    message: "Login successful",
                    user,
                  })
                }
              } catch (error) {
                res.status(400).json({
                  message: "An error occurred",
                  error: error.message,
                })
              }        
        }
        
        deleteStudent = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
            phoneNumer, email, age, regDate} = req.body;
            console.log("admin is creating student");
  
              try {
                const user = await student.findOne({ 
                  userid, password });
                if (!user) {
                  res.status(401).json({
                    message: "Login not successful",
                    error: "User not found",
                  })
                } else {
                  res.status(200).json({
                    message: "Login successful",
                    user,
                  })
                }
              } catch (error) {
                res.status(400).json({
                  message: "An error occurred",
                  error: error.message,
                })
              }      
        }

      registerTeacher = async (req, res, next) => {
        const {userid, password , firstName, lastName, address, 
          phoneNumer, email, age} = req.body;
          console.log("admin is creating student");
          
          
          try {
            
            await teacher.insertMany([{

              userid, password, firstName, lastName, address, 
              phoneNumer, email, age
            
            }]).then(user =>
              res.status(200).json({
                message: "Student successfully created",
                user,
              })
            )
          } catch (err) {
            res.status(401).json({
              message: "User not successful created",
              error: err.mesage,
            })
          }
  }
}


export default controller;