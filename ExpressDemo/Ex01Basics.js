const express = require('express');
const app = express(); 
const port = 1234;
const root = __dirname;
//body-parser module was earlier used for handling POST BODY. Now its a part of Express only.
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => res.send("Home Page"));
app.get("/Register", (req, res) => res.sendFile(root + "/RegPage.html"));
app.get("/Employees", (req, res) => res.send("Employee Page"));
app.get("/Customers", (req, res) => res.send("Customer Page"));
app.get("/details", (req, res)=>{
    const {txtName, emailAddress, location} = req.query;
    res.send(`<h1>Thanks Mr. ${txtName}</h1><hr/><p>U have been successfully registered</p><p>We shall inform other details thru UR email address ${emailAddress}`);
});

app.post("/details", (req, res)=>{
    console.log(req.body);
    const {txtName, emailAddress, location} = req.query;
    res.send(`<h1>Thanks Mr. ${txtName}</h1><hr/><p>U have been successfully registered using HTTP POST</p><p>We shall inform other details thru UR email address ${emailAddress}`);
})
app.listen(port, ()=>{
    console.log("server is running at " + port);
})
