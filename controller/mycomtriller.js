import express from 'express';
const app = express();
import path from 'path';

export default class myController{
    static async apiPost(req, res, next){
        try{
            res.sendFile(path.join(__dirname, './app/home','index.html'));
            console.log("qassim");
        }catch{

        }
    }



    
}