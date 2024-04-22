import {createPool} from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
export const dbconnect=createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'login',

}).promise();