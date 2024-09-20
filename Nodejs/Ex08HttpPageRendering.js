const http = require('http');
const fs = require('fs');
const parse = require('url').parse; //For handling GET methods...
const qs = require('querystring');//For handling HTTPPOST Methods...

const port = 1234;

//root dir from where we should get the html files:
const root = __dirname;

function renderPage(filename, res){
    const file = root + filename;
    fs.createReadStream(file).pipe(res);
}

function processPost(req, res){
    let inputs = "";
    req.on("data", (result)=>{
        inputs = result.toString()
        console.log(inputs);
    })

    req.on("end", ()=>{
        console.log("Now processing the inputs");
        const data = qs.parse(inputs);
        const msg= `<h1>Registration Successful using POST</h1><hr/>
            <p>Welcome to Mr. ${data.txtName}</p>
            <p>UR Registered Email Address:  ${data.emailAddress}</p>
            <p>UR Base Location selected is: ${data.location}</p>
        `;
        res.end(msg);
        return;
    })
}
function process(req, res){
    //res object is used to send data to the Browser
    //req object is used to process the incomming request from the browser into UR application. 
    if(req.url == '/favicon.ico'){
        return;
    }
    if(req.method =="POST"){
        processPost(req, res);
        return;
    }
    //handle the GET of the Form:
    const inputs = parse(req.url, true).query;
    if(inputs.txtName != undefined){
        const msg= `<h1>Registration Successful using GET</h1><hr/>
            <p>Welcome to Mr. ${inputs.txtName}</p>
            <p>UR Registered Email Address:  ${inputs.emailAddress}</p>
            <p>UR Base Location selected is: ${inputs.location}</p>
        `;
        res.end(msg);
        return;
    }


    switch(req.url){
        case '/Register' : renderPage("/RegPage.html", res); break;  
        case "/details" : res.end("Page is processed");
        default: renderPage("/Error.html", res); 
    }
}

//what routes U R trying to process: route is a url pattern based on which U shall process the request. 
http.createServer((req, res)=>{
    process(req, res);
}).listen(port);