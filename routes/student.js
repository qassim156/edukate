// Importing Express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
// Router
const router = express.Router();

router.get('/', function (req, res) {

   
});

    export default router;


    