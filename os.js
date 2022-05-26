const os = require('os');

console.log(os.arch()); // os 64bit

console.log(os.hostname()); // show host name

console.log(os.platform()); // show platform

console.log(os.userInfo()); // show user, home dirctery 

console.log(os.totalmem()/(1024 * 1024 * 1024)); //total ram 

console.log(os.freemem()/(1024 * 1024 * 1024)); // shoe free ram