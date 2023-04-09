const {readFile, writeFile} = require('fs');

console.log('starting task')
readFile(__dirname + '/test-file/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile(__dirname + '/test-file/SubFolder/test.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile(
            __dirname + "/test-file/testWritingToFileAsync.txt", 
            `This text is written by the writeFile method: the result is \nFile1: ${first}\nFile2: ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })

})
console.log('starting next task');