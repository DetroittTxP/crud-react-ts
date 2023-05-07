const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyparser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'customerdata'
})

db.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log('CONNTECT TO DB SUCCESSS');
})

app.get('/',(req,res) => {
    res.send({START: 'SUCCESSSSS'})
})

app.get('/users',(req,res) => {

    db.query('SELECT * FROM users',(err,result,field) => {
        if(err){
            console.log(err);
        }

        res.json(result)
    })
})



app.listen('4444',(err) => {
    if(err){
        console.log(err);
    }

    console.log('SUCCRESS');
})