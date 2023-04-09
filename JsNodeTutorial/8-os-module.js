// looking at the OS module
// provides modules for interacting with the OS

const os = require('os');

// Get info about current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime/60} minutes.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);