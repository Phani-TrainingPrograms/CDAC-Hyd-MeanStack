const express = require('express');
const sql = require('mysql2');

const app = express();
//////////////////////Handling POST////////////////////
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//////////////////////////Code for MYSQL CONNECTION////////////////////////////////
const db = sql.createConnection({
    host :'localhost',
    user : 'root',
    password :'root',
    database : 'sampledb'
});

db.connect((err)=>{
    if(err){
        console.log("Not conncted :" + err.message);
        return;
    }
    console.log("Connected to Database");
})

/////////////////////SQL STATEMENTS//////////////////////////////////////////
const getAll = "SELECT * From EMPLOYEE";
const getById = "SELECT * FROM EMPLOYEE WHERE id = ?"
const insert = "INSERT INTO EMPLOYEE(name, address, salary, empPic) values(?,?,?,?)";
const update = "update employee set name=?, address=?, salary=?, empPic=? where id=?";
/////////////////////////////////////////////////////////////////////////////
///////////REST END POINTS////////////////////////////////////
app.get("/employees", (req, res)=>{
    db.query(getAll, (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        res.json(results);
    })
})


app.get("/employees/:id", (req, res)=>{
    const { id } = req.params;
    db.query(getById, id, (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        res.json(results[0])
    })
})

app.post("/employees", (req, res)=>{
    const { name, address, salary, empPic } = req.body;
    db.query(insert, [name, address, salary, empPic], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        res.json({id : results.insertId, name, address, salary, empPic});
    })
})

//put for updating
app.put("/employees/:id", (req, res)=>{
    const { id} = req.params;
    const {name, address, salary, empPic} = req.body;
    db.query(update, [name, address, salary, empPic, id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        if(results.affectedRows > 0){
            res.json({"message" : "Employee details updated successfully"})
        }else{
            res.status(404).json({"message" : "Employee not found to update"});
        }
    })
});

//todo: Provide the delete feature and test it with POSTMAN....
//////////////////////////////////////////////////////////////
//9945205684 =>APIS are created and tested successfully. 
//Share a HTML page that consumes the APIs and displays the data in it. fetch API..
app.listen(1234, ()=>{
    console.log("server is up and running at 1234")
});
