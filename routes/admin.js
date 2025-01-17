import { readFileSync } from 'fs';

const homePage = readFileSync('./app/admin/index.html');
const fileCss = readFileSync('./app/admin/css/style.css');
const fileJs = readFileSync('./app/admin/js/script.js');
const fileIcon = readFileSync('./app/home/images/bg1.jpg');
const classHtml = readFileSync('./app/admin/classes.html');

// Importing Express
import express from 'express';
// Controller
import controller from '../controller/mycomtriller.js'
import myController from '../controller/mycomtriller.js';
// Router
const router = express.Router();

router.route('/')
    .get((req , res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(homePage);
    // res.write('<h1>Homepage</h1>');
    res.end();
    console.log(req.url);
    }).post()
    .delete()
    .put();


    router.route('/login.css')
    .get((req , res) => {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(fileCss);
        res.end();
    }).post().delete().put();

    router.route('/classes.html')
    .get((req , res) => {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(classHtml);
        res.end();
    }).post().delete().put();

    router.route('/script.js')
    .get((req, res) => {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(fileJs);
        res.end();
    }).post().delete().put();
    
    router.route('/bg1.jpg')
        .get((req , res) => {
        res.writeHead(200, {'content-type' : 'image/jpeg'});
        res.write(fileIcon);
        res.end();
        console.log(req.url);
    
    }).post().delete().put();

export default router;