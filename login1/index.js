import express from 'express';
import bodyParser from 'body-parser';
import { insertelement } from './query.js';
import path from 'path';
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login2.html'));
});
app.post('/auth',async(req,res)=>{
    const update=await insertelement(req,res);
    console.log(update);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("succesfull");
})
