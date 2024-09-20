//Os module has APIs that shall provide info about the System the app is running. 
const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length)
// console.log(os.networkInterfaces());
// console.log(os.hostname());
console.log(os.totalmem());
console.log(os.uptime());

