import { readFileSync } from 'fs';

const fileStyleCss = readFileSync('./app/admin/css/style.css');
const fileCss = readFileSync('./app/home/css/login.css');
// Importing Express
import express from 'express';
// Controller
import controller from '../controller/mycomtriller.js'
import myController from '../controller/mycomtriller.js';
// Router
const router = express.Router();

router.route('/style.css')
    .get((req , res) => {
    res.writeHead(200, {'content-type' : 'text/css'});
    res.write(fileStyleCss);
    // res.write('<h1>Homepage</h1>');
    res.end();
    console.log(req.url);
}).post().delete().put();

    router.route('/login.css')
    .get((req , res) => {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(fileCss);
        res.end();
    }).post().delete().put();

    router.route('/script.js')
    .get((req, res) => {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(fileJs);
        res.end();
    }).post().delete().put();
export default router;