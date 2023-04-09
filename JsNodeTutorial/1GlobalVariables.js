// Global variables in NodeJS

// __dirname - path to current directory
// __filename - file name
// require -function to use modules (commonJS)
// module - infor about current module (file)
// process - info about enc where the program is being executed

console.log(__dirname)

setInterval(() => {
    console.log('hello world');
}, 1000);