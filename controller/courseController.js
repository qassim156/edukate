import express from 'express';

import courses from '../models/courses.js';
const app = express();


app.use(express.json());

class controller {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
  }

            one = async (req, res, next) => {
                const  { id } = req.params;

                await courses.findOne({topicid : id}).then(course =>
                    res.status(200).json({
                    message: "Course Found",
                    course,
                    })
                )
            }
            all = async (req, res, next) => {
                                
                await courses.find().then(data => {
                  res.status(200).json(data);
                  
                });
            }
            
        register = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
          phoneNumer, email, age, regDate} = req.body;
          console.log("admin is creating teacher");
          
          
          try {
            await teacher.insertMany([{
              userid, password, firstName, lastName, address, 
              phoneNumer, email, age, regDate
            
            }]).then(user =>
              res.status(200).json({
                message: "teacher successfully created",
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

        update = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
            phoneNumer, email, age, regDate} = req.body;
            console.log("admin is creating teacher");
  
              try {
                const user = await teacher.findOne({ 
                  userid, password });
                if (!user) {
                  res.status(401).json({
                    message: "Login not successful",
                    error: "User not found",
                  })
                } else {
                  res.status(200).json({
                    message: "Login successful",
                    user : user
                  })
                }
              } catch (error) {
                res.status(400).json({
                  message: "An error occurred",
                  error: error.message,
                })
              }        
        }
        
        delete = async (req, res, next) => {
          const {userid, password , firstName, lastName, address, 
            phoneNumer, email, age, regDate} = req.body;
            console.log("admin is creating teacher");
  
              try {
                const user = await teacher.findOne({ 
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
}
export default controller;