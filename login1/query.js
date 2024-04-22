import {dbconnect} from './database.js';
export const insertelement=async(req,res)=>{
    const username=req.body.username;
    const pass=req.body.password;
    await dbconnect.query(`INSERT INTO custo (name,pass)
    VALUES (?,?)`, [username,pass]);
  res.redirect('/');
    return "hello";
};
