import express from 'express';

import student from '../models/student.js';
const app = express();


app.use(express.json());

class controller {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
  }
        one = async (req, res, next) => {
            const userid = req.body.userid;
            const user = await student.findOne({userid}).then(user =>
                res.status(200).json({
                  message: "User is available", user,
                })
              )
        }
        all = async (req, res, next) => {
            const data = await student.find()
            res.json(data);
        }
        register = async (req, res, next) => {
          let  {
            userid , password, firstname , lastname, age, dob, email, 
            gender, phone , address, department
          } = req.body;

          console.log("admin is creating student");          
          try {
            await student.insertMany([{
              userid , password, firstname , lastname, age, dob, email, 
              gender, phone , address, department
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

        login = async (req, res, next) => {
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

        update = async (req, res, next) => {
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
        
        delete = async (req, res, next) => {
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
}


export default controller;