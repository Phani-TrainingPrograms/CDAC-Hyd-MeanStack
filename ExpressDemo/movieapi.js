/*
install the packages: mysql2, express
*/

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 1234;

//////////////////Handling body requests//////////////////////////////////
app.use(express.urlencoded({extended : true}))//to have body content in the request of the http post operations. 
app.use(express.json())
app.use(cors())
////////////////////////////////MySQL Connection Code////////////////////////////////////////
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'SampleDb'
})

db.connect((err)=>{
    err == null ? console.log("Connected successfully"): console.log(err.message);
})
////////////////////////////////SQL Statements////////////////////////////////////////////////////////////
const getAllMovies = "SELECT * FROM MOVIE";
const getMovieById = "SELECT * FROM MOVIE WHERE ID = ?";
const insertMovie = "insert into movie(title, director, rating) values( ?, ?, ?);"
const updateMovie = "update movie set title =?, director =?, rating =? where id =?"
const deleteMovie = "delete from movie where id =?"
////////////////////////////////////END POINTS///////////////////////////////////////////////////////////////////
app.get("/movies", (req, res)=>{
    db.query(getAllMovies, (err, results)=>{
        if(err) return res.status(500).json({error : err.message})
        else res.json(results);
    })
})

app.get("/movies/:id", (req, res)=>{
    const { id } = req.params;
    db.query(getMovieById, id, (err, results)=>{
        if(err) return res.status(500).json({error : err.message})
        else res.json(results[0]);
    })
})

app.post("/movies", (req, res)=>{
    const {title, director, rating} = req.body;
    db.query(insertMovie, [title, director, rating], (err, results)=>{
        if(err) return res.status(500).json({error : err.message})
            else res.json({id : results.insertId, title, director, rating});
    })
})

app.put("/movies/:id", (req, res)=>{
    const { id } = req.params;
    const {title, director, rating } = req.body;
    db.query(updateMovie, [title, director, rating, id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message})
        else if(results.affectedRows == 0){
            return res.status(404).json({ "message" : "Movide not found to update"})
        }
        else
            return res.json({message : "Movie updated successfully"})
    })
})

app.delete("/movies/:id", (req, res)=>{
    return res.json({"message" :  "Do it URSELF"});
})


//middlewares like CORS, handling body content..
//APIs will be available. 

app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`)
})
