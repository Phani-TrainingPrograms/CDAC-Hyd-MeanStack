const http = require('http');//http is the most widely used module of nodejs for developing web centrice applications like web apps, rest apis, data centric apps and many more. 
//http contains APIs that can be used for executing http services from UR App like GET, PUT, POST, DELETE, PATCH.  The APIs help in rendering static pages, json data and more server side capabilities for UR App. 
//NOTE: U also have a NPM Package called Express for developing large scale rich internet based applications. 

const portNo = 1234;

function processRequest(req, res){
    switch (req.url) {
        case '/Employees': res.end("<h1>Employee Management Page</h1>"); break;
        case '/Customers': res.end("<h1>Customers Management Page</h1>"); break;
        case '/Products': res.end("<h1>Products Management Page</h1>"); break;
        case '/Inventory': res.end("<h1>Inventory Management Page</h1>"); break;
        default: res.end("<h1> OOPS! This page is not found with us!!!!</h1>")
            break;
    }
}

http.createServer((request, response)=>{
    processRequest(request, response)
}).listen(portNo);