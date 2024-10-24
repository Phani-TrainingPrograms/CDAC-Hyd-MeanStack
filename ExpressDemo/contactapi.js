/**
 * tablename: Contact
 * Database: 
 * Columns: id, fullname, emailaddress, phoneno, image
 */

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 1234;
///////////////Add some middlewares///////////////////////
//////////////////Handling body requests//////////////////////////////////
app.use(express.urlencoded({extended : true}))//to have body content in the request of the http post operations. 
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root', 
    database : 'SampleDb'
})

db.connect((err)=>{
    err == null ? console.log("Connected to database") : console.err(err.message)
})

//////////////////SQL statements///////////////////////////////////////////
const getAll = 'SELECT * From Contact';
const getById = "SELECT * FROM contact where id =?"
const insert = "insert into Contact (fullname, emailaddress, phoneno, image) values(?, ?, ?, ?)"
///////////////////////End points/////////////////////////////////////////////////////
app.get("/contacts", (req, res)=>{
    console.log(req.url);
    db.query(getAll, (err, results)=>{
        if(err) return res.status(500).json({error : err.message})
        else
            res.json(results);
    })
})

app.get("/contacts/:id", (req, res)=>{
    const { id } = req.params;
    db.query(getById, id, (err, results)=>{
        if(err) 
            return res.status(500).json({error : err.message})
        else
            res.json(results[0]);
    })
})

app.post("/contacts", (req, res)=>{
    const { fullname, emailaddress , phoneno, image } = req.body;
    db.query(insert, [fullname, emailaddress, phoneno, image], (err, results)=>{
        if(err) 
            return res.status(500).json({error : err.message})
        else if(results.affectedRows == 0){
            return res.status(500).json({error : "Failed to insert the record"})
        }else res.json({id : results.insertId, fullname, emailaddress, phoneno, image });
    })

})

app.put("/contacts/:id", (req, res)=>{
    //get the id from the params
    //get the data from the body. 
    //call the db Query to update the record. 
    //return the json result. 
})
app.delete("/contacts/:id", (req, res)=>{
    res.json({message: "Do It UrSelf"})
})

app.listen(port, ()=> 
    console.log(`Server running at ${port}`)
)