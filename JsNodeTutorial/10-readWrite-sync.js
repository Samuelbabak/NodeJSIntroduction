const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync(__dirname + '/test-file/first.txt', 'utf-8');
const second = readFileSync(__dirname + '/test-file/SubFolder/test.txt', 'utf-8');

console.log(first + '\n' + second)

writeFileSync(
    __dirname + '/test-file/testWritingToFile.txt',
    `this text is written by the writeFileSync method inside of unit 10. \n Here are the results : ${first} ${second}`,
    {flag: 'a'}
)




