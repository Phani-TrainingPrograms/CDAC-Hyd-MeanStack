//Nodejs provides a good number of modules that we can use for building our applications. this could be fs(File Systems), Os(Operating System info), ReadLine(For taking inputs from the user), Http(For developing web centric applications) to name a few. 
//Builtin modules that are the part of installation of the nodejs can be accessed directly without using ./ 
const prompt = require('prompt-sync')();
const fs = require('fs');//This is the way to include external modules into UR application. 
//fs is a module that is used for reading/writing files inside UR Application. 
//nodejs supports both synchronous and async APIs. 

const fileName = "SampleFile.txt"
// const content = fs.readFileSync(fileName, 'utf-8');
// console.log(content);
// //async way of doing the same job....
// fs.readFile(fileName, 'utf-8',  (err, contents)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(contents);
//     }
// })
// console.log("This line of statement is expected to be the last statement");
///////////////////////////////////File Writing/////////////////////////////////////
// const obj = {};
// //This example takes inputs from the user using prompt-sync module that needs to be installed before U use==> npm install prompt-sync
// obj.id = prompt("Enter the Id");
// obj.name = prompt("Enter the name");
// obj.address = prompt("Enter the address");
//With objects, we can add properties after the object is created in JS. JS treats objects like a Dictionary(HashTable) where the data is stored in the form of key-value pairs. 
/////////////////////////Test this code in UR application before writing to a file to understand how to treat object like a dictionary/////////////////////////////////////////////

// for (const key in obj) {
//     //key is UR property name
//     //value is the value set to that property
//     console.log(`PropertyName : ${key}, Value: ${obj[key]}`);
// }

// let data = `${JSON.stringify(obj)}\n`;
// //fs.writeFileSync(fileName, data, 'utf-8'); =>Overwrite the existing file content. 

// fs.appendFile(fileName, data, 'utf-8', (err)=>{
//     if(err) console.log(err.message);
//     else{
//         console.log("The file is appended properly");
//     }
// });

//task: create an app using fs to store the input data from the users into a file and should be able to perform CURD operations with the object that we have created. The Application shall use the object and perform the operations. 
//////////////////////////////////////OS module/////////////////////////////////////////


//JavaScript(ES6) code snippets
//VS Code ES7+ React/Redux/React-Native/JS snippets
//Angular Language Service
//Bootstrap & Font Awesome