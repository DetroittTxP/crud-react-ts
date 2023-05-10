const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyparser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerData = require('./swaggerDOCS.json')
require('dotenv').config()


const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerData));

const db = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    database:process.env.MYSQL_DB
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

app.post('/insert',(req,res) => {
    const {id,user_name,user_id,user_password,user_email,user_tel} = req.body.FormData;
    db.query(
        'INSERT INTO users (id,user_name,user_id,user_password,user_email,user_tel) VALUES (?,?,?,?,?,?)',
        [id,user_name,user_id,user_password,user_email,user_tel],
        (err,result,fields) => {
             if(err)console.log(err);
             res.send({STATUS:'INSERT SUCCESSS'})
        }
    );
})

app.post('/delete',(req,res) => {
    const {id} = req.body
    db.query('DELETE FROM users WHERE id = ? ',
    [id],
    (err,results,field) =>{
        if(err){
            res.send(err)
        }
        res.send({STATUS:'DELETE SUCCESS'})
    }
    )

})

app.put('/edit/:id',(req,res) =>{
     const { id } = req.params;
     const  edit  = req.body; 

    db.query('UPDATE users SET user_name = ?, user_id = ?, user_password = ?, user_email = ?, user_tel = ? WHERE id = ?',
            [edit.user_name,edit.user_id,edit.user_password,edit.user_email,edit.user_tel,id],
            (err,results,fields) => {
                if(err){
                    res.send({STATUS:'UPDATE ERROR'})
                }
                res.send({STATUS:'UPDATE DATA SUCCESSFULLY'})
            }
    
        )

    
    
})



app.listen('4444',(err) => {
    if(err){
        console.log(err);
    }

    console.log('SUCCRESS');
})